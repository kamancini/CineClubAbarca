import { chromium } from "playwright";
import fs from "node:fs/promises";

const baseUrl = "https://cineclubabarca.substack.com";
const archiveUrl = `${baseUrl}/archive`;
const outputFile = "src/data/ensayos.json";

const limpiarTexto = (texto = "") =>
  texto
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const normalizarUrl = (url) => {
  try {
    const parsed = new URL(url, baseUrl);

    if (parsed.hostname !== "cineclubabarca.substack.com") {
      return null;
    }

    const match = parsed.pathname.match(/^\/p\/[^/?#]+/);

    if (!match) {
      return null;
    }

    return `${baseUrl}${match[0]}`;
  } catch {
    return null;
  }
};

const tituloValido = (texto = "") => {
  const titulo = limpiarTexto(texto);

  if (titulo.length < 4 || titulo.length > 220) {
    return false;
  }

  const textosGenericos = [
    "leer más",
    "leer en substack",
    "read more",
    "continue reading",
    "comentarios",
    "comments",
    "share",
    "compartir",
  ];

  return !textosGenericos.includes(titulo.toLowerCase());
};

const browser = await chromium.launch({
  headless: true,
});

try {
  const context = await browser.newContext({
    locale: "es-CL",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
      "AppleWebKit/537.36 (KHTML, like Gecko) " +
      "Chrome/140.0.0.0 Safari/537.36",
  });

  /*
   * 1. Abrimos el archivo público de Substack.
   * No utilizamos /api/v1/archive porque GitHub recibe 403.
   */
  const archivePage = await context.newPage();

  console.log("Abriendo archivo público de Substack...");

  await archivePage.goto(archiveUrl, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  await archivePage.waitForTimeout(2500);

  /*
   * 2. Hacemos scroll para cargar todas las publicaciones
   * disponibles en la página de archivo.
   */
  let alturaAnterior = 0;
  let sinCambios = 0;

  for (let i = 0; i < 30; i++) {
    const alturaActual = await archivePage.evaluate(
      () => document.body.scrollHeight
    );

    await archivePage.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await archivePage.waitForTimeout(1200);

    const nuevaAltura = await archivePage.evaluate(
      () => document.body.scrollHeight
    );

    if (
      nuevaAltura === alturaActual &&
      nuevaAltura === alturaAnterior
    ) {
      sinCambios += 1;
    } else {
      sinCambios = 0;
    }

    alturaAnterior = nuevaAltura;

    if (sinCambios >= 3) {
      break;
    }
  }

  /*
   * 3. Recogemos todos los enlaces /p/ presentes
   * en el archivo público.
   */
  const enlacesEncontrados = await archivePage.evaluate(() =>
    Array.from(document.querySelectorAll('a[href*="/p/"]')).map(
      (link) => ({
        href: link.href,
        texto: (link.textContent || "")
          .replace(/\s+/g, " ")
          .trim(),
      })
    )
  );

  const publicacionesMap = new Map();

  for (const enlace of enlacesEncontrados) {
    const url = normalizarUrl(enlace.href);

    if (!url) {
      continue;
    }

    if (!publicacionesMap.has(url)) {
      publicacionesMap.set(url, {
        link: url,
        posiblesTitulos: [],
      });
    }

    if (tituloValido(enlace.texto)) {
      publicacionesMap
        .get(url)
        .posiblesTitulos.push(limpiarTexto(enlace.texto));
    }
  }

  const enlacesPublicaciones = Array.from(
    publicacionesMap.values()
  );

  console.log(
    `Enlaces encontrados en el archivo: ${enlacesPublicaciones.length}`
  );

  if (enlacesPublicaciones.length === 0) {
    throw new Error(
      "No se encontraron publicaciones en la página pública de Substack."
    );
  }

  /*
   * 4. Abrimos cada publicación y obtenemos sus metadatos:
   * título, descripción, fecha e imagen.
   */
  const posts = [];

  for (let i = 0; i < enlacesPublicaciones.length; i++) {
    const publicacion = enlacesPublicaciones[i];

    console.log(
      `Leyendo ${i + 1}/${enlacesPublicaciones.length}: ${publicacion.link}`
    );

    const page = await context.newPage();

    /*
     * No necesitamos descargar imágenes, videos ni fuentes
     * para leer los metadatos HTML.
     */
    await page.route("**/*", async (route) => {
      const tipo = route.request().resourceType();

      if (
        tipo === "image" ||
        tipo === "media" ||
        tipo === "font"
      ) {
        await route.abort();
        return;
      }

      await route.continue();
    });

    try {
      await page.goto(publicacion.link, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });

      await page.waitForTimeout(400);

      const metadata = await page.evaluate(() => {
        const meta = (selector) =>
          document
            .querySelector(selector)
            ?.getAttribute("content")
            ?.trim() || "";

        const titulo =
          meta('meta[property="og:title"]') ||
          meta('meta[name="twitter:title"]') ||
          document.querySelector("h1")?.textContent?.trim() ||
          document.title ||
          "";

        const descripcion =
          meta('meta[property="og:description"]') ||
          meta('meta[name="description"]') ||
          meta('meta[name="twitter:description"]') ||
          "";

        const fecha =
          meta('meta[property="article:published_time"]') ||
          document
            .querySelector("time[datetime]")
            ?.getAttribute("datetime") ||
          "";

        const imagen =
          meta('meta[property="og:image"]') ||
          meta('meta[name="twitter:image"]') ||
          "";

        return {
          titulo,
          descripcion,
          fecha,
          imagen,
        };
      });

      const tituloFallback =
        publicacion.posiblesTitulos
          .sort((a, b) => b.length - a.length)[0] || "";

      const titulo =
        limpiarTexto(metadata.titulo) ||
        tituloFallback ||
        "Publicación de Cine Club Abarca";

      posts.push({
        title: titulo,
        link: publicacion.link,
        date: metadata.fecha || "",
        excerpt: limpiarTexto(metadata.descripcion).slice(0, 280),
        image: metadata.imagen || "",
        ordenOriginal: i,
      });
    } catch (error) {
      console.warn(
        `No se pudo leer ${publicacion.link}. Se conservará igualmente.`
      );

      const tituloFallback =
        publicacion.posiblesTitulos
          .sort((a, b) => b.length - a.length)[0] ||
        "Publicación de Cine Club Abarca";

      posts.push({
        title: tituloFallback,
        link: publicacion.link,
        date: "",
        excerpt: "",
        image: "",
        ordenOriginal: i,
      });
    } finally {
      await page.close();
    }
  }

  /*
   * 5. Ordenamos de más reciente a más antiguo.
   */
  posts.sort((a, b) => {
    const fechaA = a.date
      ? new Date(a.date).getTime()
      : 0;

    const fechaB = b.date
      ? new Date(b.date).getTime()
      : 0;

    if (fechaA && fechaB) {
      return fechaB - fechaA;
    }

    return a.ordenOriginal - b.ordenOriginal;
  });

  const resultado = posts.map(
    ({ ordenOriginal, ...post }) => post
  );

  /*
   * 6. Guardamos los datos que leerá React.
   */
  await fs.mkdir("src/data", {
    recursive: true,
  });

  await fs.writeFile(
    outputFile,
    JSON.stringify(resultado, null, 2) + "\n",
    "utf8"
  );

  console.log("");
  console.log(
    `Substack actualizado: ${resultado.length} publicaciones.`
  );
  console.log("");

  resultado.forEach((post, index) => {
    console.log(`${index + 1}. ${post.title}`);
  });

  await context.close();
} catch (error) {
  console.error("");
  console.error("No se pudo actualizar Substack.");
  console.error(error);
  console.error("");

  /*
   * Si Substack falla temporalmente, conservamos ensayos.json
   * para que GitHub Pages pueda seguir publicando el sitio.
   */
  try {
    await fs.access(outputFile);

    console.warn(
      "Se conservará la última versión de ensayos.json."
    );
  } catch {
    console.error(
      "No existe una copia anterior de ensayos.json."
    );

    process.exitCode = 1;
  }
} finally {
  await browser.close();
}
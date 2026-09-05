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
  const t = limpiarTexto(texto);

  if (t.length < 4 || t.length > 220) {
    return false;
  }

  const genericos = [
    "leer más",
    "leer en substack",
    "read more",
    "continue reading",
    "comentarios",
    "comments",
    "share",
    "compartir",
  ];

  return !genericos.includes(t.toLowerCase());
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
   * NO usamos /api/v1/archive.
   */
  const archivePage = await context.newPage();

  console.log("Abriendo archivo público de Substack...");

  await archivePage.goto(archiveUrl, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  await archivePage.waitForTimeout(2500);

  /*
   * 2. Hacemos scroll para que Substack cargue las publicaciones
   * que estén más abajo en el archivo.
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
   * 3. Recogemos todos los enlaces públicos /p/ que aparecen
   * en el archivo.
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
   * 4. Visitamos cada artículo público para obtener título,
   * descripción y fecha desde sus metadatos HTML.
   */
  const posts = [];

  for (let i = 0; i < enlacesPublicaciones.length; i++) {
    const publicacion = enlacesPublicaciones[i];

    console.log(
      `Leyendo ${i + 1}/${enlacesPublicaciones.length}: ${publicacion.link}`
    );

    const page = await context.newPage();

    /*
     * No necesitamos descargar imágenes, videos o fuentes para
     * leer los metadatos del artículo.
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

        return {
          titulo,
          descripcion,
          fecha,
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
        ordenOriginal: i,
      });
    } finally {
      await page.close();
    }
  }

  /*
   * 5. Ordenamos del artículo más nuevo al más antiguo.
   * Si alguna publicación no tiene fecha, conservamos el orden
   * en que apareció en el archivo.
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
  /*
   * Muy importante:
   *
   * Si algún día Substack está caído o cambia temporalmente
   * su página, NO queremos que eso impida publicar todo
   * Cine Club Abarca en GitHub Pages.
   *
   * Si ensayos.json ya existe, conservamos la última versión.
   */
  console.error("");
  console.error("No se pudo actualizar Substack.");
  console.error(error);
  console.error("");

  try {
    await fs.access(outputFile);

    console.warn(
      "Se conservará la última versión de ensayos.json."
    );

    /*
     * No hacemos process.exit(1).
     * De esta manera GitHub Pages puede seguir desplegándose.
     */
  } catch {
    console.error(
      "Además, no existe una copia anterior de ensayos.json."
    );

    process.exitCode = 1;
  }
} finally {
  await browser.close();
}
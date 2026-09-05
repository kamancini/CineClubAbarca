import { chromium } from "playwright";
import fs from "node:fs/promises";

const baseUrl = "https://cineclubabarca.substack.com";

const limpiarTexto = (texto = "") =>
  texto
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const browser = await chromium.launch({
  headless: true,
});

try {
  const page = await browser.newPage({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
      "(KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
  });

  /*
   * Primero abrimos la publicación como lo haría una persona.
   * Esto evita hacer la petición directamente desde Node.
   */
  await page.goto(`${baseUrl}/archive`, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  const publicaciones = [];

  let offset = 0;
  const limit = 12;

  while (true) {
    const pagina = await page.evaluate(
      async ({ offset, limit }) => {
        const response = await fetch(
          `/api/v1/archive?sort=new&search=&offset=${offset}&limit=${limit}`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Substack respondió ${response.status} ${response.statusText}`
          );
        }

        return response.json();
      },
      { offset, limit }
    );

    if (!Array.isArray(pagina) || pagina.length === 0) {
      break;
    }

    publicaciones.push(...pagina);

    offset += pagina.length;

    if (pagina.length < limit) {
      break;
    }
  }

  const posts = publicaciones
    .filter((post) => post.title && (post.canonical_url || post.slug))
    .map((post) => ({
      title: post.title,

      link:
        post.canonical_url ||
        `${baseUrl}/p/${post.slug}`,

      date:
        post.post_date ||
        post.published_at ||
        post.publish_date ||
        "",

      excerpt: limpiarTexto(
        post.truncated_body_text ||
        post.subtitle ||
        post.description ||
        ""
      ).slice(0, 280),
    }))
    .sort((a, b) => {
      const fechaA = new Date(a.date).getTime() || 0;
      const fechaB = new Date(b.date).getTime() || 0;

      return fechaB - fechaA;
    });

  await fs.mkdir("src/data", {
    recursive: true,
  });

  await fs.writeFile(
    "src/data/ensayos.json",
    JSON.stringify(posts, null, 2) + "\n",
    "utf8"
  );

  console.log("");
  console.log(`Substack actualizado: ${posts.length} publicaciones.`);
  console.log("");

  posts.forEach((post, index) => {
    console.log(`${index + 1}. ${post.title}`);
  });
} catch (error) {
  console.error("");
  console.error("No se pudo actualizar Substack.");
  console.error(error);
  console.error("");

  process.exit(1);
} finally {
  await browser.close();
}
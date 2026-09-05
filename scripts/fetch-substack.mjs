import fs from "node:fs/promises";

const baseUrl = "https://cineclubabarca.substack.com";

const limpiarTexto = (texto = "") =>
  texto
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

async function obtenerPublicaciones() {
  const publicaciones = [];

  let offset = 0;
  const limit = 12;

  while (true) {
    const url =
      `${baseUrl}/api/v1/archive` +
      `?sort=new&search=&offset=${offset}&limit=${limit}`;

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Error al consultar Substack: ${response.status} ${response.statusText}`
      );
    }

    const pagina = await response.json();

    if (!Array.isArray(pagina) || pagina.length === 0) {
      break;
    }

    publicaciones.push(...pagina);

    offset += pagina.length;

    if (pagina.length < limit) {
      break;
    }
  }

  return publicaciones;
}

try {
  const publicacionesSubstack = await obtenerPublicaciones();

  const posts = publicacionesSubstack
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
}
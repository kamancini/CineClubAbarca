import { useEffect } from "react";
import { ExternalLink } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ensayos from "../data/ensayos.json";

interface Ensayo {
  title: string;
  link: string;
  date: string;
  excerpt: string;
}

const Ensayos = () => {
  const publicaciones = ensayos as Ensayo[];

  useEffect(() => {
    const scriptAnterior = document.querySelector(
      'script[src="https://substack.com/embedjs/embed.js"]'
    );

    if (scriptAnterior) {
      scriptAnterior.remove();
    }

    const script = document.createElement("script");

    script.src = "https://substack.com/embedjs/embed.js";
    script.async = true;
    script.charset = "utf-8";

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Encabezado */}
        <section className="px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <p className="eyebrow">Textos y reflexiones</p>

            <h1 className="font-serif text-5xl md:text-7xl text-paper mt-5">
              Ensayos
            </h1>

            <p className="font-sans text-lg md:text-xl text-muted-foreground mt-7 max-w-3xl leading-relaxed">
              Un espacio para compartir textos, miradas y reflexiones en torno
              al cine, las imágenes y las conversaciones que nacen de nuestros
              encuentros.
            </p>
          </div>
        </section>

        {/* Ensayos */}
        <section className="px-6 md:px-10 pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto">
            {publicaciones.length === 0 ? (
              <div className="paper-wrap paper-tilt-left max-w-3xl">
                <div className="paper-sheet paper-sheet-large">
                  <p className="font-serif text-3xl text-paper">
                    Próximamente
                  </p>

                  <p className="font-sans text-sm text-muted-foreground mt-4">
                    Estamos preparando nuestros próximos ensayos.
                  </p>
                </div>
              </div>
            ) : (
              <div className="substack-grid">
                {publicaciones.map((ensayo) => (
                  <article
                    key={ensayo.link}
                    className="substack-card"
                  >
                    <div className="substack-post-embed">
                      <p lang="es">
                        {ensayo.title} por Cine Club Abarca
                      </p>

                      {ensayo.excerpt && (
                        <p>
                          {ensayo.excerpt}
                        </p>
                      )}

                      <a
                        data-post-link=""
                        href={ensayo.link}
                      >
                        Leer en Substack
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Cierre */}
        <section className="bg-ochre px-6 md:px-10 py-16 md:py-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-ink/70">
                Substack
              </p>

              <h2 className="font-serif text-3xl md:text-5xl text-ink mt-4 leading-tight">
                Sigue nuestros textos y publicaciones
              </h2>
            </div>

            <a
              href="https://cineclubabarca.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-paper text-ink px-7 py-4 font-sans text-[11px] tracking-[0.18em] uppercase hover:opacity-90 transition-opacity shrink-0"
            >
              Ver Substack
              <ExternalLink size={15} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ensayos;
import { ExternalLink } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ensayos from "../data/ensayos.json";

interface Ensayo {
  title: string;
  link: string;
  date: string;
  excerpt: string;
  image?: string;
}

const formatearFecha = (fecha: string) => {
  if (!fecha) {
    return "";
  }

  const date = new Date(fecha);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("es-CL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
};

const Ensayos = () => {
  const publicaciones = ensayos as Ensayo[];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Encabezado */}
        <section className="px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <p className="eyebrow">
              Textos y reflexiones
            </p>

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {publicaciones.map((ensayo, index) => (
                  <article
                    key={ensayo.link}
                    className={`paper-wrap h-full ${
                      index % 2 === 0
                        ? "paper-tilt-left"
                        : "paper-tilt-right"
                    }`}
                  >
                    <div className="paper-sheet h-full flex flex-col">
                      {/* Imagen */}
                      {ensayo.image && (
                        <a
                          href={ensayo.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mb-6"
                        >
                          <img
                            src={ensayo.image}
                            alt=""
                            className="w-full aspect-[4/3] object-cover"
                            loading="lazy"
                          />
                        </a>
                      )}

                      {/* Metadatos */}
                      <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
                        <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-ochre">
                          Cine Club Abarca
                        </p>

                        {ensayo.date && (
                          <>
                            <span className="text-muted-foreground text-xs">
                              ·
                            </span>

                            <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                              {formatearFecha(ensayo.date)}
                            </p>
                          </>
                        )}
                      </div>

                      {/* Título */}
                      <h2 className="font-serif text-3xl md:text-4xl text-paper leading-[1.05] mt-4">
                        {ensayo.title}
                      </h2>

                      {/* Extracto */}
                      {ensayo.excerpt && (
                        <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-5">
                          {ensayo.excerpt}
                        </p>
                      )}

                      {/* Botón */}
                      <div className="mt-auto pt-8">
                        <a
                          href={ensayo.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-ochre text-ink px-5 py-3 font-sans text-[10px] uppercase tracking-[0.16em] hover:bg-ochre-soft transition-colors"
                        >
                          Leer en Substack
                          <ExternalLink size={14} />
                        </a>
                      </div>
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
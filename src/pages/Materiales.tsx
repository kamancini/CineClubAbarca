import { Download } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { materiales } from "../data/materiales";

const Materiales = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <main>
      <section className="px-6 md:px-10 py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">Materiales</p>

          <h1 className="font-serif text-5xl md:text-7xl text-paper mt-5 max-w-4xl leading-[1]">
            Para continuar la conversación
          </h1>

          <p className="font-sans text-lg md:text-xl text-muted-foreground mt-7 max-w-3xl leading-relaxed">
            En este espacio compartiremos materiales vinculados a nuestros
            ciclos, funciones y encuentros.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          {materiales.length === 0 ? (
            <div className="border border-border p-8 md:p-12 text-center">
              <p className="font-serif text-3xl text-paper">
                Próximamente
              </p>

              <p className="font-sans text-sm text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
                Estamos preparando materiales para acompañar nuestras funciones
                y conversaciones.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border border-y border-border">
              {materiales.map((material) => (
                <article
                  key={material.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8"
                >
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-paper">
                      {material.titulo}
                    </h2>

                    <p className="font-sans text-sm text-muted-foreground mt-3 max-w-xl leading-relaxed">
                      {material.descripcion}
                    </p>

                    <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-3">
                      {material.formato}
                    </p>
                  </div>

                  <a
                    href={material.archivo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 shrink-0 border border-ochre text-ochre px-6 py-3 font-sans text-[11px] tracking-[0.2em] uppercase hover:bg-ochre hover:text-ink transition-colors"
                  >
                    <Download size={15} />
                    Descargar
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Materiales;
import Header from "../components/Header";
import Footer from "../components/Footer";
import { funciones } from "../data/funciones";

const Funciones = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <main>
      {/* Encabezado */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_0.9fr] gap-14 items-center">
          <div>
            <p className="eyebrow">Programación</p>

            <h1 className="font-serif text-5xl md:text-7xl text-paper mt-5 leading-[1]">
              Ciclos y funciones guiadas
            </h1>

            <p className="font-sans text-lg md:text-xl text-muted-foreground mt-7 max-w-2xl leading-relaxed">
              Cada función es una invitación a mirar una película y continuar
              la experiencia a través de la conversación. La entrada es liberada
              y los cupos son limitados.
            </p>
          </div>

          <img
            src="/images/funcion-cine.jpg"
            alt="Público durante una función de Cine Club Abarca"
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
      </section>

      {/* Programación */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          {funciones.length === 0 ? (
            <div className="border border-border p-10 text-center">
              <p className="font-serif text-3xl text-paper">
                Próximamente
              </p>

              <p className="font-sans text-sm text-muted-foreground mt-4">
                Estamos preparando nuestras próximas funciones.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border border-y border-border">
              {funciones.map((funcion) => (
                <article
                  key={funcion.id}
                  className="grid grid-cols-1 md:grid-cols-[0.75fr_1.15fr_280px] gap-8 md:gap-12 py-12 items-start"
                >
                  {/* Fecha y ciclo */}
                  <div>
                    <p className="eyebrow">
                      {funcion.ciclo}
                    </p>

                    <p className="font-sans text-base text-paper mt-4">
                      {funcion.fecha}
                    </p>

                    <p className="font-sans text-sm text-muted-foreground mt-2">
                      {funcion.hora} h
                    </p>

                    <p className="font-sans text-sm text-muted-foreground mt-1">
                      {funcion.lugar}
                    </p>
                  </div>

                  {/* Película */}
                  <div>
                    <h2 className="font-serif text-4xl md:text-5xl text-paper leading-tight">
                      {funcion.titulo}
                    </h2>

                    <p className="font-sans text-sm text-muted-foreground mt-2">
                      {funcion.director}, {funcion.anio}
                    </p>

                    {funcion.nota && (
                      <p className="font-sans text-sm text-muted-foreground mt-5 max-w-xl leading-relaxed">
                        {funcion.nota}
                      </p>
                    )}

                    <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-8">
                      Cupos limitados
                    </p>

                    {funcion.inscripcionAbierta ? (
                      <a
                        href={funcion.formularioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 bg-ochre text-ink px-7 py-4 font-sans text-[11px] tracking-[0.2em] uppercase hover:bg-ochre-soft transition-colors"
                      >
                        Inscribirme
                      </a>
                    ) : (
                      <span className="inline-block mt-4 border border-border text-muted-foreground px-7 py-4 font-sans text-[11px] tracking-[0.2em] uppercase">
                        Inscripciones cerradas
                      </span>
                    )}
                  </div>

                  {/* Afiche */}
                    <div>
                    {funcion.afiche ? (
                        <img
                        src={funcion.afiche}
                        alt={`Afiche de ${funcion.titulo}`}
                        className="w-full aspect-[3/4] object-cover"
                        loading="lazy"
                        />
                    ) : (
                        <div className="w-full aspect-[3/4] border border-border flex items-center justify-center">
                        <p className="font-sans text-xs text-muted-foreground text-center px-4">
                            Afiche próximamente
                        </p>
                        </div>
                    )}
                    </div>
                </article>
              ))}
            </div>
          )}

          <p className="font-sans text-sm text-muted-foreground mt-12 max-w-2xl">
            ¿Tienes una película que te gustaría proponer para un próximo ciclo?{" "}
            <a
              href="mailto:cineclubabarca@gmail.com"
              className="text-ochre hover:underline underline-offset-4"
            >
              Escríbenos.
            </a>
          </p>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Funciones;
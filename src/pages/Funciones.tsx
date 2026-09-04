import Header from "../components/Header";
import Footer from "../components/Footer";
import { funciones } from "../data/funciones";

const Funciones = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <main>
      {/* Encabezado */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <img
              src="/images/funcion-cine.jpg"
              alt="Público durante una función de Cine Club Abarca"
              className="w-full h-[420px] md:h-[560px] object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10 -mt-10 mx-4 md:absolute md:left-10 md:bottom-[-4rem] md:mt-0 md:mx-0 md:max-w-xl">
              <div className="paper-wrap paper-tilt-right">
                <div className="paper-sheet px-7 py-7 md:px-9 md:py-8">
                  <p className="eyebrow">Programación</p>

                  <h1 className="font-serif text-4xl md:text-6xl text-paper mt-4 leading-[1]">
                    Ciclos y funciones guiadas
                  </h1>

                  <p className="font-sans text-base md:text-lg text-muted-foreground mt-5 leading-relaxed">
                    Cada función es una invitación a mirar una película y
                    continuar la experiencia a través de la conversación. La
                    entrada es liberada y los cupos son limitados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-20" />
        </div>
      </section>

      {/* Programación */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Subtítulo */}
          <div className="mb-12 md:mb-16">
            <p className="eyebrow">Programación</p>

            <h2 className="font-serif text-4xl md:text-5xl text-paper mt-4">
              Próximas funciones
            </h2>
          </div>

          {funciones.length === 0 ? (
            <div className="paper-wrap paper-tilt-left max-w-2xl mx-auto">
              <div className="paper-sheet text-center">
                <p className="font-serif text-3xl text-paper">
                  Próximamente
                </p>

                <p className="font-sans text-sm text-muted-foreground mt-4">
                  Estamos preparando nuestras próximas funciones.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-14">
              {funciones.map((funcion) => (
                <article
                  key={funcion.id}
                  className="cinema-ticket max-w-[1020px] mx-auto"
                >
                  {/* Afiche */}
                  <div className="cinema-ticket-poster">
                    {funcion.afiche ? (
                      <img
                        src={funcion.afiche}
                        alt={`Afiche de ${funcion.titulo}`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full aspect-[3/4] flex items-center justify-center border border-paper/15">
                        <p className="font-sans text-xs text-muted-foreground text-center px-4">
                          Afiche próximamente
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Información */}
                  <div className="cinema-ticket-info">
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ochre">
                        {funcion.ciclo}
                      </p>

                      <h3 className="font-serif text-4xl md:text-5xl text-paper mt-3 leading-none">
                        {funcion.titulo}
                      </h3>

                      <p className="font-sans text-sm text-muted-foreground mt-3">
                        {funcion.director}, {funcion.anio}
                      </p>
                    </div>

                    {/* Datos */}
                    <div className="cinema-ticket-details">
                      <div>
                        <p className="ticket-label">Fecha</p>

                        <p className="ticket-value">
                          {funcion.fecha}
                        </p>
                      </div>

                      <div>
                        <p className="ticket-label">Hora</p>

                        <p className="ticket-value">
                          {funcion.hora} h
                        </p>
                      </div>

                      <div>
                        <p className="ticket-label">Lugar</p>

                        <p className="ticket-value">
                          {funcion.lugar}
                        </p>
                      </div>
                    </div>

                    {funcion.nota && (
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                        {funcion.nota}
                      </p>
                    )}
                  </div>

                  {/* Talón de inscripción */}
                  <div className="cinema-ticket-action">
                    <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground text-center">
                      Cupos limitados
                    </p>

                    {funcion.inscripcionAbierta ? (
                      <a
                        href={funcion.formularioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full mt-5 bg-ochre text-ink px-6 py-5 font-sans text-xs tracking-[0.16em] uppercase hover:bg-ochre-soft transition-colors"
                      >
                        Inscribirme
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center w-full mt-5 border border-paper/30 text-muted-foreground px-5 py-4 font-sans text-[10px] tracking-[0.14em] uppercase">
                        Inscripciones cerradas
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Proponer película */}
      <section className="bg-ochre px-6 md:px-10 py-14 md:py-16">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-sm text-ink/80 max-w-2xl">
            ¿Tienes una película que te gustaría proponer para un próximo
            ciclo?{" "}
            <a
              href="mailto:cineclubabarca@gmail.com"
              className="text-ink underline underline-offset-4 hover:opacity-70 transition-opacity"
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
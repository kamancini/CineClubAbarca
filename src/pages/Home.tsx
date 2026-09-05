import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { funciones } from "../data/funciones";
import { publicUrl } from "../lib/publicUrl";

const Home = () => {
  const proximaFuncion = funciones[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-6 md:px-10 pt-6 pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto">
            <div className="relative min-h-[650px] md:min-h-[720px] overflow-hidden">
              <img
                src={publicUrl("/images/hero-cineclub.jpg")}
                alt="Encuentro de Cine Club Abarca"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="relative z-10 min-h-[650px] md:min-h-[720px] flex flex-col justify-end p-7 md:p-14">
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/80">
                  Cine · conversación · comunidad
                </p>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mt-5 leading-[0.95] max-w-4xl">
                  Un espacio para
                  <br />
                  encontrarnos
                  <br />
                  alrededor del cine
                </h1>

                <p className="font-sans text-base md:text-lg text-white/85 mt-7 max-w-2xl leading-relaxed">
                  Un espacio íntimo de encuentro en torno al cine, diseñado
                  para compartir opiniones, sensibilidades y vivencias
                  personales.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-9">
                  <Link
                    to="/funciones"
                    className="inline-flex items-center justify-center bg-ochre text-ink px-7 py-4 font-sans text-[11px] uppercase tracking-[0.17em] hover:bg-ochre-soft transition-colors"
                  >
                    Inscribirme a una función
                  </Link>

                  <Link
                    to="/proyecto"
                    className="inline-flex items-center justify-center border border-white/50 text-white px-7 py-4 font-sans text-[11px] uppercase tracking-[0.17em] hover:bg-white/10 transition-colors"
                  >
                    Conocer el proyecto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qué hacemos */}
        <section className="px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-10 md:gap-0 items-center">
              <div className="md:col-span-7">
                <img
                  src={publicUrl("/images/comunidad-patio.jpg")}
                  alt="Encuentro comunitario de Cine Club Abarca"
                  className="w-full h-[420px] md:h-[620px] object-cover"
                />
              </div>

              <div className="md:col-span-6 md:-ml-24 relative z-10">
                <div className="paper-wrap paper-tilt-right">
                  <div className="paper-sheet paper-sheet-large">
                    <p className="eyebrow">Qué hacemos</p>

                    <h2 className="font-serif text-4xl md:text-6xl text-paper mt-4 leading-[1]">
                      Ver cine también es conversar
                    </h2>

                    <p className="font-sans text-base text-muted-foreground mt-6 leading-relaxed">
                      Organizamos ciclos temáticos con funciones guiadas,
                      creando un espacio cercano y seguro para conversar sobre
                      las películas desde nuestras propias experiencias.
                    </p>

                    <p className="font-sans text-base text-muted-foreground mt-5 leading-relaxed">
                      La programación también puede surgir de películas
                      propuestas por la comunidad y de adaptaciones de obras
                      literarias leídas y comentadas colectivamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué existimos */}
        <section className="px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-10 md:gap-0 items-center">
              <div className="md:col-span-6 md:col-start-1 relative z-10 md:mr-[-5rem]">
                <div className="paper-wrap paper-tilt-left">
                  <div className="paper-sheet paper-sheet-large">
                    <p className="eyebrow">Por qué existimos</p>

                    <h2 className="font-serif text-4xl md:text-6xl text-paper mt-4 leading-[1]">
                      Recuperar el encuentro presencial
                    </h2>

                    <p className="font-sans text-base text-muted-foreground mt-6 leading-relaxed">
                      Cine Club Abarca busca fortalecer el tejido comunitario a
                      través de un espacio seguro, acogedor y gratuito.
                    </p>

                    <p className="font-sans text-base text-muted-foreground mt-5 leading-relaxed">
                      El cine y la conversación funcionan como un punto de
                      partida para volver a encontrarnos presencialmente
                      alrededor de intereses compartidos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 md:col-start-6">
                <img
                  src={publicUrl("/images/conversacion-cineclub.jpg")}
                  alt="Conversación después de una función"
                  className="w-full h-[420px] md:h-[620px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Próxima función */}
        {proximaFuncion && (
          <section className="px-6 md:px-10 py-20 md:py-28">
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                <img
                  src={publicUrl("/images/funcion-cine.jpg")}
                  alt="Función de Cine Club Abarca"
                  className="w-full aspect-[16/8] md:aspect-[16/6] object-cover"
                />

                <div className="relative z-10 -mt-12 mx-4 md:absolute md:right-10 md:bottom-[-4rem] md:mx-0 md:max-w-xl">
                  <div className="paper-wrap paper-tilt-right">
                    <div className="paper-sheet px-7 py-8 md:px-9 md:py-9">
                      <p className="eyebrow">Próxima función</p>

                      <h2 className="font-serif text-4xl md:text-5xl text-paper mt-4">
                        {proximaFuncion.titulo}
                      </h2>

                      <p className="font-sans text-sm text-muted-foreground mt-3">
                        {proximaFuncion.director}, {proximaFuncion.anio}
                      </p>

                      <div className="font-sans text-sm text-muted-foreground mt-6 space-y-2">
                        <p>{proximaFuncion.fecha}</p>
                        <p>{proximaFuncion.hora} h</p>
                        <p>{proximaFuncion.lugar}</p>
                      </div>

                      <Link
                        to="/funciones"
                        className="inline-flex items-center justify-center mt-7 bg-ochre text-ink px-7 py-4 font-sans text-[11px] uppercase tracking-[0.17em] hover:bg-ochre-soft transition-colors"
                      >
                        Ver función
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block h-20" />
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-ochre px-6 md:px-10 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-ink/70">
              Nos encontramos en torno al cine
            </p>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-4">
              <div className="max-w-3xl">
                <h2 className="font-serif text-4xl md:text-6xl text-ink leading-tight">
                  Ven a compartir la próxima función
                </h2>

                <p className="font-sans text-base text-ink/75 mt-5 max-w-2xl leading-relaxed">
                  Revisa nuestra programación y encuentra la próxima
                  oportunidad para encontrarnos, ver una película y conversar.
                </p>
              </div>

              <Link
                to="/funciones"
                className="inline-flex items-center justify-center bg-ink text-paper px-7 py-4 font-sans text-[11px] uppercase tracking-[0.17em] hover:opacity-90 transition-opacity shrink-0"
              >
                Ver próximas funciones
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
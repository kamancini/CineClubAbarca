import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { funciones } from "../data/funciones";

const Home = () => {
  const proximaFuncion = funciones[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[82vh] flex items-end overflow-hidden">
          <img
            src="/images/hero-cineclub.jpg"
            alt="Encuentro de Cine Club Abarca"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/15" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

          <div className="relative z-10 w-full px-6 md:px-10 pb-16 md:pb-24 pt-32">
            <div className="max-w-6xl mx-auto">
              <p className="font-sans text-xs md:text-sm uppercase tracking-[0.18em] text-white/75">
                Cine · conversación · comunidad
              </p>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-white mt-5 max-w-4xl">
                Un espacio para
                <br />
                <span className="text-[#e8ad98] italic">
                  encontrarnos
                </span>
                <br />
                alrededor del cine
              </h1>

              <p className="font-sans text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mt-7">
                Un espacio íntimo de encuentro en torno al cine, diseñado para
                compartir opiniones, sensibilidades y vivencias personales.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-9">
                <Link
                  to="/funciones"
                  className="inline-flex justify-center items-center bg-ochre text-ink px-6 py-3 font-sans text-xs uppercase tracking-[0.14em] hover:bg-ochre-soft transition-colors"
                >
                  Inscribirme a una función
                </Link>

                <Link
                  to="/proyecto"
                  className="inline-flex justify-center items-center border border-white/70 text-white px-6 py-3 font-sans text-xs uppercase tracking-[0.14em] hover:bg-white hover:text-paper transition-colors"
                >
                  Conocer el proyecto
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ HACEMOS */}
        <section className="px-6 md:px-10 py-24 md:py-36">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="relative">
                <img
                  src="/images/comunidad-patio.jpg"
                  alt="Encuentro comunitario de Cine Club Abarca"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="paper-wrap paper-tilt-right md:-ml-16 mt-[-2rem] md:mt-0 relative z-10">
                <div className="paper-sheet">
                  <p className="font-sans text-xs uppercase tracking-[0.16em] text-ochre">
                    Qué hacemos
                  </p>

                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-paper mt-4 leading-[1.02]">
                    Ver cine también es conversar
                  </h2>

                  <p className="font-sans text-base text-paper/75 leading-relaxed mt-6">
                    Organizamos ciclos temáticos con funciones guiadas, creando
                    un espacio cercano y seguro para conversar sobre las
                    películas desde nuestras propias experiencias.
                  </p>

                  <p className="font-sans text-base text-paper/75 leading-relaxed mt-4">
                    La programación también puede surgir de películas propuestas
                    por la comunidad y de adaptaciones de obras literarias
                    leídas y comentadas colectivamente.
                  </p>

                  <Link
                    to="/proyecto"
                    className="inline-block mt-7 font-sans text-xs uppercase tracking-[0.14em] text-ochre hover:text-ochre-soft transition-colors"
                  >
                    Conocer más →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ EXISTIMOS */}
        <section className="px-6 md:px-10 py-24 md:py-36 bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] items-center">
              <div className="paper-wrap paper-tilt-left md:-mr-16 relative z-10 order-2 md:order-1 mt-[-2rem] md:mt-0">
                <div className="paper-sheet">
                  <p className="font-sans text-xs uppercase tracking-[0.16em] text-ochre">
                    Por qué existimos
                  </p>

                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-paper mt-4 leading-[1.02]">
                    Recuperar el encuentro presencial
                  </h2>

                  <p className="font-sans text-base text-paper/75 leading-relaxed mt-6">
                    Cine Club Abarca busca fortalecer el tejido comunitario a
                    través de un espacio seguro, acogedor y gratuito.
                  </p>

                  <p className="font-sans text-base text-paper/75 leading-relaxed mt-4">
                    El cine y la conversación funcionan como un punto de partida
                    para volver a encontrarnos presencialmente alrededor de
                    intereses compartidos.
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <img
                  src="/images/conversacion-cineclub.jpg"
                  alt="Conversación durante un encuentro de Cine Club Abarca"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRÓXIMA FUNCIÓN */}
        {proximaFuncion && (
          <section className="px-6 md:px-10 py-24 md:py-36">
            <div className="max-w-6xl mx-auto">
              <div className="mb-10">
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-ochre">
                  Próxima función
                </p>
              </div>

              {/* Imagen horizontal */}
              <div className="relative">
                <img
                  src="/images/funcion-cine.jpg"
                  alt="Función de Cine Club Abarca"
                  className="w-full aspect-[16/8] md:aspect-[16/6] object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/15" />

                {/* Papel superpuesto */}
                <div className="relative z-10 -mt-10 mx-4 md:absolute md:left-10 md:bottom-[-5rem] md:mt-0 md:mx-0 md:max-w-xl">
                  <div className="paper-wrap paper-tilt-right">
                    <div className="paper-sheet paper-sheet-large">
                      <p className="font-sans text-xs uppercase tracking-[0.16em] text-ochre">
                        {proximaFuncion.ciclo}
                      </p>

                      <h2 className="font-serif text-5xl md:text-7xl text-paper mt-3 leading-none">
                        {proximaFuncion.titulo}
                      </h2>

                      <p className="font-sans text-base text-paper/70 mt-5">
                        {proximaFuncion.director} · {proximaFuncion.anio}
                      </p>

                      <div className="mt-7 space-y-2 font-sans text-sm text-paper/70">
                        <p>
                          <strong className="text-paper font-medium">
                            Fecha:
                          </strong>{" "}
                          {proximaFuncion.fecha}
                        </p>

                        <p>
                          <strong className="text-paper font-medium">
                            Hora:
                          </strong>{" "}
                          {proximaFuncion.hora}
                        </p>

                        <p>
                          <strong className="text-paper font-medium">
                            Lugar:
                          </strong>{" "}
                          {proximaFuncion.lugar}
                        </p>

                        {proximaFuncion.nota && (
                          <p>{proximaFuncion.nota}</p>
                        )}
                      </div>

                      {proximaFuncion.inscripcionAbierta ? (
                        <a
                          href={proximaFuncion.formularioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-8 bg-ochre text-ink px-6 py-3 font-sans text-xs uppercase tracking-[0.14em] hover:bg-ochre-soft transition-colors"
                        >
                          Inscribirme
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <p className="font-sans text-sm text-paper/60 mt-8">
                          Inscripciones cerradas
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Espacio para el papel superpuesto en escritorio */}
              <div className="hidden md:block h-24" />
            </div>
          </section>
        )}

        {/* CTA FINAL OCRE */}
        <section className="bg-ochre px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-ink/75">
              Nos encontramos en torno al cine
            </p>

            <h2 className="font-serif text-4xl md:text-6xl text-ink mt-5">
              Ven a compartir la próxima función
            </h2>

            <p className="font-sans text-base text-ink/80 leading-relaxed mt-6 max-w-2xl mx-auto">
              Revisa nuestra programación y encuentra la próxima oportunidad
              para encontrarnos, ver una película y conversar.
            </p>

            <Link
              to="/funciones"
              className="inline-flex mt-8 bg-paper text-ink px-7 py-3 font-sans text-xs uppercase tracking-[0.14em] hover:opacity-90 transition-opacity"
            >
              Ver próximas funciones
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
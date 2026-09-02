import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { funciones } from "../data/funciones";

const pilares = [
  {
    numero: "01",
    titulo: "Ciclos temáticos",
    texto:
      "Programamos ciclos con funciones guiadas, donde cada película abre preguntas que seguimos conversando después.",
  },
  {
    numero: "02",
    titulo: "Voces de la comunidad",
    texto:
      "Parte de nuestra programación nace de películas sugeridas por quienes participan del cineclub.",
  },
  {
    numero: "03",
    titulo: "Cine y literatura",
    texto:
      "Leemos y comentamos obras literarias antes de encontrarnos con sus adaptaciones cinematográficas.",
  },
];

const Home = () => {
  const proximaFuncion = funciones[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Portada */}
<section className="relative min-h-[88vh] flex items-end overflow-hidden">
  <img
    src="/images/hero-cineclub.jpg"
    alt="Encuentro de Cine Club Abarca en una casa de Ñuñoa"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Sombra suave general */}
  <div className="absolute inset-0 bg-black/15" />

  {/* Degradado oscuro concentrado abajo */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

  <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 pb-20 md:pb-28 pt-40">
    <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-white/75">
      Ñuñoa, Santiago · Entrada liberada
    </p>

    <h1 className="font-serif text-6xl md:text-8xl text-white mt-5 max-w-4xl leading-[0.95]">
      El cine como excusa para{" "}
      <span className="italic text-[#e8ad98]">
        encontrarnos
      </span>
    </h1>

    <p className="font-sans text-lg md:text-xl text-white/85 mt-7 max-w-2xl leading-relaxed">
      Un espacio íntimo de encuentro en torno al cine, diseñado para
      compartir opiniones, sensibilidades y vivencias personales.
    </p>

    <div className="flex flex-wrap gap-4 mt-10">
      <Link
        to="/funciones"
        className="bg-ochre text-ink px-7 py-4 font-sans text-[11px] tracking-[0.18em] uppercase hover:bg-ochre-soft transition-colors"
      >
        Inscribirme a una función
      </Link>

      <Link
        to="/proyecto"
        className="border border-white/60 text-white px-7 py-4 font-sans text-[11px] tracking-[0.18em] uppercase hover:bg-white hover:text-paper transition-colors"
      >
        Conocer el proyecto
      </Link>
    </div>
  </div>
</section>

        {/* Qué hacemos */}
        <section className="px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr] gap-14 items-start">
              <div>
                <p className="eyebrow">Qué hacemos</p>

                <h2 className="font-serif text-4xl md:text-6xl text-paper mt-4 leading-tight">
                  Mediación cinematográfica en un entorno cercano
                </h2>

                <p className="font-sans text-base md:text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
                  Creamos espacios para el diálogo y el intercambio de puntos
                  de vista, donde la conversación importa tanto como la película.
                </p>
              </div>

              <img
                src="/images/comunidad-patio.jpg"
                alt="Participantes del Cine Club Abarca reunidos en torno a una mesa"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {pilares.map((pilar) => (
                <article
                  key={pilar.numero}
                  className="border-t border-border pt-6"
                >
                  <p className="font-sans text-xs tracking-[0.18em] text-ochre">
                    {pilar.numero}
                  </p>

                  <h3 className="font-serif text-3xl text-paper mt-5">
                    {pilar.titulo}
                  </h3>

                  <p className="font-sans text-sm text-muted-foreground mt-4 leading-relaxed">
                    {pilar.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué existimos */}
        <section className="bg-card border-y border-border px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="/images/conversacion-cineclub.jpg"
              alt="Conversación después de una función de Cine Club Abarca"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />

            <div>
              <p className="eyebrow">Por qué existimos</p>

              <h2 className="font-serif text-4xl md:text-6xl text-paper mt-4 leading-tight">
                Reivindicar el encuentro presencial
              </h2>

              <p className="font-sans text-base md:text-lg text-muted-foreground mt-6 leading-relaxed">
                Buscamos fortalecer el tejido comunitario en un espacio seguro,
                acogedor y gratuito. El cine y la conversación son nuestro punto
                de partida para encontrarnos, compartir experiencias y conectar
                con otras personas.
              </p>

              <Link
                to="/proyecto"
                className="inline-block mt-8 font-sans text-xs uppercase tracking-[0.18em] text-ochre hover:underline underline-offset-4"
              >
                Conocer nuestra historia →
              </Link>
            </div>
          </div>
        </section>

        {/* Próxima función */}
        {proximaFuncion && (
          <section className="px-6 md:px-10 py-20 md:py-28">
            <div className="max-w-6xl mx-auto">
              <p className="eyebrow">Próxima función</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-8 items-center">
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.18em] text-ochre">
                    {proximaFuncion.ciclo}
                  </p>

                  <h2 className="font-serif text-5xl md:text-7xl text-paper mt-4">
                    {proximaFuncion.titulo}
                  </h2>

                  <p className="font-sans text-muted-foreground mt-3">
                    {proximaFuncion.director}, {proximaFuncion.anio}
                  </p>

                  <div className="mt-8">
                    <p className="font-sans text-paper">
                      {proximaFuncion.fecha}
                    </p>

                    <p className="font-sans text-sm text-muted-foreground mt-2">
                      {proximaFuncion.hora} h · {proximaFuncion.lugar}
                    </p>
                  </div>

                  {proximaFuncion.nota && (
                    <p className="font-sans text-sm text-muted-foreground mt-6 leading-relaxed">
                      {proximaFuncion.nota}
                    </p>
                  )}

                  <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-8">
                    Cupos limitados
                  </p>

                  {proximaFuncion.inscripcionAbierta ? (
                    <a
                      href={proximaFuncion.formularioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-ochre text-ink px-8 py-4 font-sans text-[11px] tracking-[0.2em] uppercase hover:bg-ochre-soft transition-colors"
                    >
                      Inscribirme
                    </a>
                  ) : (
                    <span className="inline-block mt-4 border border-border text-muted-foreground px-8 py-4 font-sans text-[11px] tracking-[0.2em] uppercase">
                      Inscripciones cerradas
                    </span>
                  )}

                  <div>
                    <Link
                      to="/funciones"
                      className="inline-block mt-6 font-sans text-xs text-ochre hover:underline underline-offset-4"
                    >
                      Ver programación →
                    </Link>
                  </div>
                </div>

                <img
                  src="/images/funcion-cine.jpg"
                  alt="Público durante una función de Cine Club Abarca"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        )}

        {/* Cierre */}
        <section className="bg-ochre px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-serif text-4xl md:text-6xl text-ink leading-tight">
              Las películas son el hilo conductor para conocernos y conversar.
            </p>

            <Link
              to="/funciones"
              className="inline-block mt-10 border border-ink/50 text-ink px-8 py-4 font-sans text-[11px] tracking-[0.2em] uppercase hover:bg-ink hover:text-ochre transition-colors"
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

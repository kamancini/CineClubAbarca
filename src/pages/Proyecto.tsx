import Header from "../components/Header";
import Footer from "../components/Footer";
import { publicUrl } from "../lib/publicUrl";

const equipo = [
  {
    nombre: "Rosa María Droguett Abarca",
    rol: "Académica de Estética UC · Co-fundadora",
  },
  {
    nombre: "Cristóbal Ambroggio",
    rol: "Productor audiovisual · Co-fundador",
  },
  {
    nombre: "Karla Mancini",
    rol: "Social Media Manager",
  },
  {
    nombre: "Macarena Farías",
    rol: "Diseñadora",
  },
  {
    nombre: "Vicente Rodríguez",
    rol: "Moderador Cine Club de Lectura",
  },
];

const Proyecto = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <main>
      {/* Encabezado */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">El proyecto</p>

          <h1 className="font-serif text-5xl md:text-7xl text-paper mt-5 max-w-4xl leading-[0.95]">
            Un espacio de encuentro alrededor del cine
          </h1>
        </div>
      </section>

      {/* Historia */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-0 items-center">
            <div className="md:col-span-7">
              <img
                src={publicUrl("/images/proyecto-casa.jpg")}
                alt="Casa Taller de Agustín Abarca"
                className="w-full h-[450px] md:h-[650px] object-cover"
              />
            </div>

            <div className="md:col-span-6 md:-ml-24 relative z-10">
              <div className="paper-wrap paper-tilt-right">
                <div className="paper-sheet paper-sheet-large">
                  <p className="eyebrow">Nuestra historia</p>

                  <h2 className="font-serif text-4xl md:text-5xl text-paper mt-4">
                    Una casa para encontrarnos
                  </h2>

                  <p className="font-sans text-base text-muted-foreground mt-6 leading-relaxed">
                    Cine Club Abarca nace como un homenaje a la Casa Taller del
                    pintor Agustín Abarca, un espacio que históricamente acogió
                    tertulias en torno al arte, la literatura y la música.
                  </p>

                  <p className="font-sans text-base text-muted-foreground mt-5 leading-relaxed">
                    Luego de años realizando cineclubes de manera informal, el
                    proyecto se formaliza en 2025 como un espacio de encuentro
                    comunitario alrededor del cine y la conversación.
                  </p>

                  <p className="font-sans text-base text-muted-foreground mt-5 leading-relaxed">
                    Fue fundado por Rosa María Droguett Abarca, académica de
                    Estética UC, y Cristóbal Ambroggio, productor audiovisual.
                    Con el tiempo, el equipo se amplió para seguir construyendo
                    colectivamente el proyecto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">Qué hacemos</p>

          <h2 className="font-serif text-4xl md:text-6xl text-paper mt-4 max-w-3xl">
            Cine, conversación y comunidad
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="paper-wrap paper-tilt-left">
              <div className="paper-sheet h-full">
                <h3 className="font-serif text-3xl text-paper">
                  Ciclos temáticos
                </h3>

                <p className="font-sans text-sm text-muted-foreground mt-5 leading-relaxed">
                  Realizamos ciclos temáticos con funciones guiadas que
                  permiten profundizar en las películas y compartir distintas
                  formas de verlas.
                </p>
              </div>
            </div>

            <div className="paper-wrap paper-tilt-right">
              <div className="paper-sheet h-full">
                <h3 className="font-serif text-3xl text-paper">
                  Conversación
                </h3>

                <p className="font-sans text-sm text-muted-foreground mt-5 leading-relaxed">
                  Buscamos crear un espacio seguro, cercano y acogedor para
                  compartir opiniones, sensibilidades y vivencias personales.
                </p>
              </div>
            </div>

            <div className="paper-wrap paper-tilt-left">
              <div className="paper-sheet h-full">
                <h3 className="font-serif text-3xl text-paper">
                  Lectura y comunidad
                </h3>

                <p className="font-sans text-sm text-muted-foreground mt-5 leading-relaxed">
                  La programación puede surgir de propuestas de la comunidad y
                  de adaptaciones de obras literarias leídas y comentadas
                  colectivamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">Equipo</p>

          <h2 className="font-serif text-4xl md:text-6xl text-paper mt-4">
            Quienes hacemos Cine Club Abarca
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
            {equipo.map((persona, index) => (
              <div
                key={persona.nombre}
                className={`paper-wrap ${
                  index % 2 === 0
                    ? "paper-tilt-left"
                    : "paper-tilt-right"
                }`}
              >
                <div className="paper-sheet h-full">
                  <h3 className="font-serif text-2xl md:text-3xl text-paper">
                    {persona.nombre}
                  </h3>

                  <p className="font-sans text-sm text-muted-foreground mt-4 leading-relaxed">
                    {persona.rol}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="bg-ochre px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-ink/70">
              Nuestro propósito
            </p>

            <h2 className="font-serif text-4xl md:text-5xl text-ink mt-4 leading-tight">
              Fortalecer el tejido comunitario
            </h2>

            <p className="font-sans text-base text-ink/75 mt-6 leading-relaxed">
              Buscamos fortalecer el tejido comunitario a través de un espacio
              seguro, acogedor y gratuito, recuperando el encuentro presencial
              alrededor de intereses compartidos.
            </p>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-[0.18em] text-ink/70">
              A quién está dirigido
            </p>

            <h2 className="font-serif text-4xl md:text-5xl text-ink mt-4 leading-tight">
              Personas que quieren profundizar su experiencia del cine
            </h2>

            <p className="font-sans text-base text-ink/75 mt-6 leading-relaxed">
              Cine Club Abarca está dirigido a personas entre 18 y 65 años
              interesadas en profundizar su experiencia cinematográfica y
              participar en conversaciones honestas alrededor de las películas.
            </p>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Proyecto;
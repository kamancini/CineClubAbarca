import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <section className="px-6 md:px-10 py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">El proyecto</p>

          <h1 className="font-serif text-5xl md:text-7xl text-paper mt-5 max-w-4xl leading-[1]">
            Una historia de cine, conversación y{" "}
            <span className="italic text-ochre">encuentro</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-muted-foreground mt-7 max-w-3xl leading-relaxed">
            Cine Club Abarca es un espacio íntimo de encuentro en torno al cine,
            diseñado para compartir opiniones, sensibilidades y vivencias
            personales.
          </p>
        </div>
      </section>

      {/* Historia + imagen */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-14 items-start">
          <div>
            <p className="eyebrow">Nuestra historia</p>

            <h2 className="font-serif text-4xl md:text-5xl text-paper mt-4 leading-tight">
              Del encuentro doméstico al cineclub
            </h2>

            <div className="space-y-6 font-sans text-base text-muted-foreground leading-relaxed mt-8">
              <p>
                Cine Club Abarca nace como un homenaje a la Casa Taller del
                pintor Agustín Abarca, un espacio que durante años acogió
                tertulias y encuentros en torno al arte, la literatura y la
                música.
              </p>

              <p>
                Después de años de cineclubes informales y experiencias
                compartidas, la iniciativa se formalizó en 2025 con el propósito
                de continuar esa tradición de encuentro y abrir un espacio
                dedicado al cine y la conversación.
              </p>

              <p>
                El proyecto reúne seis años de trabajo colaborativo entre la
                investigación estética y la producción audiovisual, poniendo el
                cine al centro de una experiencia cercana y comunitaria.
              </p>
            </div>
          </div>

          <div>
            <img
              src="/images/proyecto-casa.jpg"
              alt="Conversación en la entrada de la casa de Cine Club Abarca"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="px-6 md:px-10 py-20 md:py-24 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">Qué hacemos</p>

          <h2 className="font-serif text-4xl md:text-5xl text-paper mt-4 max-w-3xl">
            Mediación cinematográfica y conversación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="border-t border-border pt-6">
              <p className="font-serif text-3xl text-paper">
                Ciclos temáticos
              </p>

              <p className="font-sans text-sm text-muted-foreground mt-4 leading-relaxed">
                Organizamos ciclos con funciones guiadas que utilizan cada
                película como punto de partida para conversar y compartir
                distintas miradas.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <p className="font-serif text-3xl text-paper">
                Comunidad
              </p>

              <p className="font-sans text-sm text-muted-foreground mt-4 leading-relaxed">
                Parte de la programación se construye a partir de películas
                sugeridas por quienes participan del cineclub.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <p className="font-serif text-3xl text-paper">
                Cine y literatura
              </p>

              <p className="font-sans text-sm text-muted-foreground mt-4 leading-relaxed">
                También leemos y comentamos obras literarias antes de
                encontrarnos con sus adaptaciones cinematográficas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">Quiénes somos</p>

          <h2 className="font-serif text-4xl md:text-5xl text-paper mt-4">
            El equipo
          </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {equipo.map((persona) => (
              <div
                key={persona.nombre}
                className="border border-border p-8 md:p-10"
              >
                <p className="font-serif text-3xl text-paper leading-tight">
                  {persona.nombre}
                </p>

                <p className="font-sans text-sm text-muted-foreground mt-3">
                  {persona.rol}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propósito y público */}
      <section className="px-6 md:px-10 py-20 md:py-24 border-t border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow">Propósito</p>

            <h2 className="font-serif text-4xl md:text-5xl text-paper mt-4 leading-tight">
              Fortalecer el tejido comunitario
            </h2>

            <p className="font-sans text-base text-muted-foreground mt-6 leading-relaxed">
              Buscamos ofrecer un espacio seguro, acogedor y gratuito que
              reivindique los encuentros presenciales en torno a intereses
              compartidos, utilizando el cine y la conversación como punto de
              partida para conectar con otras personas.
            </p>
          </div>

          <div>
            <p className="eyebrow">Para quién</p>

            <h2 className="font-serif text-4xl md:text-5xl text-paper mt-4 leading-tight">
              Una comunidad abierta al cine
            </h2>

            <p className="font-sans text-base text-muted-foreground mt-6 leading-relaxed">
              El proyecto está dirigido principalmente a personas entre 18 y 65
              años interesadas en profundizar su experiencia cinematográfica y
              participar en conversaciones honestas sobre los temas, emociones
              y experiencias que el cine nos invita a explorar.
            </p>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Proyecto;
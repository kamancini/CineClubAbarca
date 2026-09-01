import Header from "../components/Header";
import Footer from "../components/Footer";
import { funciones } from "../data/funciones";

const Funciones = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <main className="max-w-6xl mx-auto px-6 md:px-10 py-20">
      <p className="eyebrow">Programación</p>

      <h1 className="font-serif text-5xl md:text-7xl text-paper mt-4">
        Funciones
      </h1>

      <p className="font-sans text-muted-foreground mt-6 max-w-2xl leading-relaxed">
        Cada función propone un encuentro en torno al cine y la conversación.
        La entrada es liberada y los cupos son limitados.
      </p>

      <div className="mt-16 border-y border-border divide-y divide-border">
        {funciones.map((funcion) => (
          <article
            key={funcion.id}
            className="grid grid-cols-1 md:grid-cols-[0.9fr_1.4fr_auto] gap-8 py-10"
          >
            <div>
              <p className="eyebrow">{funcion.ciclo}</p>

              <p className="font-sans text-base text-paper mt-4">
                {funcion.fecha}
              </p>

              <p className="font-sans text-sm text-muted-foreground mt-1">
                {funcion.hora} h · {funcion.lugar}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-4xl text-paper">
                {funcion.titulo}
              </h2>

              <p className="font-sans text-sm text-muted-foreground mt-2">
                {funcion.director}, {funcion.anio}
              </p>

              {funcion.nota && (
                <p className="font-sans text-sm text-muted-foreground mt-5 leading-relaxed">
                  {funcion.nota}
                </p>
              )}
            </div>

            <div className="md:text-right">
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Cupos limitados
              </p>

              {funcion.inscripcionAbierta ? (
                <a
                  href={funcion.formularioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 border border-ochre text-ochre px-6 py-3 font-sans text-[11px] tracking-[0.2em] uppercase hover:bg-ochre hover:text-ink transition-colors"
                >
                  Inscribirme
                </a>
              ) : (
                <span className="inline-block mt-4 border border-border text-muted-foreground px-6 py-3 font-sans text-[11px] tracking-[0.2em] uppercase">
                  Inscripciones cerradas
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>

    <Footer />
  </div>
);

export default Funciones;
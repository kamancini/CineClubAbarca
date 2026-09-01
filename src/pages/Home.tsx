import Header from "../components/Header";
import Footer from "../components/Footer";
import { funciones } from "../data/funciones";

const Home = () => {
  const proximaFuncion = funciones[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="min-h-[75vh] flex items-center px-6 md:px-10">
          <div className="max-w-6xl mx-auto w-full py-24">
            <p className="eyebrow">Ñuñoa, Santiago · Entrada liberada</p>

            <h1 className="font-serif text-6xl md:text-8xl text-paper mt-5 max-w-4xl leading-[0.95]">
              El cine como excusa para{" "}
              <span className="italic text-ochre">encontrarnos</span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-muted-foreground mt-7 max-w-2xl leading-relaxed">
              Un espacio íntimo de encuentro en torno al cine, diseñado para
              compartir opiniones, sensibilidades y vivencias personales.
            </p>
          </div>
        </section>

        <section className="border-t border-border px-6 md:px-10 py-20">
          <div className="max-w-6xl mx-auto">
            <p className="eyebrow">Próxima función</p>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 mt-6 items-end">
              <div>
                <p className="font-sans text-sm text-ochre uppercase tracking-[0.16em]">
                  {proximaFuncion.ciclo}
                </p>

                <h2 className="font-serif text-5xl md:text-6xl text-paper mt-3">
                  {proximaFuncion.titulo}
                </h2>

                <p className="font-sans text-muted-foreground mt-3">
                  {proximaFuncion.director}, {proximaFuncion.anio}
                </p>

                <p className="font-sans text-paper mt-6">
                  {proximaFuncion.fecha} · {proximaFuncion.hora} h
                </p>

                <p className="font-sans text-muted-foreground mt-1">
                  {proximaFuncion.lugar}
                </p>

                {proximaFuncion.nota && (
                  <p className="font-sans text-sm text-muted-foreground mt-5 max-w-2xl leading-relaxed">
                    {proximaFuncion.nota}
                  </p>
                )}
              </div>

              <div>
                {proximaFuncion.inscripcionAbierta ? (
                  <a
                    href={proximaFuncion.formularioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-ochre text-ink px-8 py-4 font-sans text-[12px] tracking-[0.2em] uppercase hover:bg-ochre-soft transition-colors"
                  >
                    Inscribirme
                  </a>
                ) : (
                  <span className="inline-block border border-border text-muted-foreground px-8 py-4 font-sans text-[12px] tracking-[0.2em] uppercase">
                    Inscripciones cerradas
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
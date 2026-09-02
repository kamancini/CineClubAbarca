import Header from "../components/Header";
import Footer from "../components/Footer";
import { articulos } from "../data/fanzine";

const Fanzine = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <main>
      <section className="px-6 md:px-10 py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">Publicación independiente</p>

          <h1 className="font-serif text-5xl md:text-7xl text-paper mt-5">
            Fanzine
          </h1>

          <p className="font-sans text-lg md:text-xl text-muted-foreground mt-7 max-w-3xl leading-relaxed">
            Un espacio para compartir textos, miradas y reflexiones en torno al
            cine, las imágenes y las conversaciones que nacen de nuestros
            encuentros.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          {articulos.length === 0 ? (
            <div className="border border-border p-8 md:p-12 text-center">
              <p className="font-serif text-3xl text-paper">
                Próximamente
              </p>

              <p className="font-sans text-sm text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
                Estamos preparando las primeras publicaciones del Fanzine de
                Cine Club Abarca.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articulos.map((articulo) => (
                <article
                  key={articulo.id}
                  className="border border-border p-8"
                >
                  <p className="eyebrow">{articulo.fecha}</p>

                  <h2 className="font-serif text-3xl text-paper mt-4">
                    {articulo.titulo}
                  </h2>

                  <p className="font-sans text-sm text-muted-foreground mt-3 leading-relaxed">
                    {articulo.bajada}
                  </p>

                  <p className="font-sans text-xs text-muted-foreground mt-6">
                    Por {articulo.autor}
                  </p>
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

export default Fanzine;
import { ExternalLink } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Materiales = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <main>
      {/* Encabezado */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">Materiales</p>

          <h1 className="font-serif text-5xl md:text-7xl text-paper mt-5 max-w-4xl leading-[1]">
            Para continuar la conversación
          </h1>

          <p className="font-sans text-lg md:text-xl text-muted-foreground mt-7 max-w-3xl leading-relaxed">
            Compartimos programas, lecturas y otros materiales que acompañan
            nuestros ciclos, funciones y encuentros.
          </p>
        </div>
      </section>

      {/* Biblioteca digital */}
      <section className="px-6 md:px-10 pb-24 md:pb-36">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] items-center">
            {/* Imagen */}
            <div className="relative">
              <img
                src="/images/fanzine-encuentro.jpg"
                alt="Publicaciones y materiales compartidos durante una actividad de Cine Club Abarca"
                className="w-full aspect-[4/3] md:aspect-[5/4] object-cover"
                loading="lazy"
              />
            </div>

            {/* Papel superpuesto */}
            <div className="paper-wrap paper-tilt-right relative z-10 mt-[-2rem] md:mt-0 md:-ml-16">
              <div className="paper-sheet paper-sheet-large">
                <p className="eyebrow">Biblioteca digital</p>

                <h2 className="font-serif text-4xl md:text-5xl text-paper mt-4 leading-tight">
                  Todos nuestros materiales en un solo lugar
                </h2>

                <p className="font-sans text-base text-muted-foreground mt-6 leading-relaxed max-w-xl">
                  Puedes acceder a nuestra carpeta de Google Drive para
                  consultar y descargar los materiales disponibles del Cine
                  Club Abarca.
                </p>

                <a
                  href="https://drive.google.com/drive/folders/1MiknBBE_hYdrKLfV8ydDCtJ0ZLBfsaYU?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 bg-ochre text-ink px-8 py-4 font-sans text-[11px] tracking-[0.2em] uppercase hover:bg-ochre-soft transition-colors"
                >
                  Explorar materiales
                  <ExternalLink size={15} />
                </a>

                <p className="font-sans text-xs text-muted-foreground mt-4">
                  La carpeta se abrirá en una nueva pestaña de Google Drive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre visual */}
      <section className="bg-ochre h-10 md:h-14" />
    </main>

    <Footer />
  </div>
);

export default Materiales;
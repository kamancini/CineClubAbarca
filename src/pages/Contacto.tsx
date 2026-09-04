import { Mail, MapPin } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contacto = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <main>
      {/* Encabezado */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">Contacto</p>

          <h1 className="font-serif text-5xl md:text-7xl text-paper mt-5">
            Conversemos
          </h1>

          <p className="font-sans text-lg md:text-xl text-muted-foreground mt-7 max-w-2xl leading-relaxed">
            Escríbenos para proponer una película, hacer una consulta o saber
            más sobre nuestras próximas actividades.
          </p>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="px-6 md:px-10 pb-24 md:pb-36">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            
            {/* Correo + Instagram */}
            <div className="paper-wrap paper-tilt-left">
              <div className="paper-sheet paper-sheet-large">
                <div className="space-y-10">
                  {/* Correo */}
                  <div>
                    <p className="eyebrow">Correo</p>

                    <a
                      href="mailto:cineclubabarca@gmail.com"
                      className="flex items-center gap-3 mt-4 font-serif text-2xl md:text-3xl text-paper hover:text-ochre transition-colors break-all"
                    >
                      <Mail
                        size={22}
                        className="text-ochre shrink-0"
                      />

                      cineclubabarca@gmail.com
                    </a>
                  </div>

                  {/* Separador */}
                  <div className="border-t border-paper/15" />

                  {/* Instagram */}
                  <div>
                    <p className="eyebrow">Instagram</p>

                    <a
                      href="https://instagram.com/cineclubabarca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 font-serif text-2xl md:text-3xl text-paper hover:text-ochre transition-colors"
                    >
                      @cineclubabarca
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Ubicaciones */}
            <div className="paper-wrap paper-tilt-right md:mt-10">
              <div className="paper-sheet paper-sheet-large">
                <p className="eyebrow">Dónde nos encontramos</p>

                <div className="flex items-start gap-3 mt-6">
                  <MapPin
                    size={21}
                    className="text-ochre mt-1 shrink-0"
                  />

                  <div className="font-sans text-base text-paper/85 space-y-2">
                    <p>Hamburgo 36, Ñuñoa</p>

                    <p>Tegualda 1871, Ñuñoa</p>

                    <p className="text-sm text-muted-foreground pt-3 leading-relaxed">
                      Revisa la información de cada función para conocer el
                      lugar correspondiente.
                    </p>
                  </div>
                </div>
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

export default Contacto;
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card px-6 md:px-10 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          
          {/* Logo + descripción */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center"
              aria-label="Ir al inicio"
            >
              <img
                src="/images/logo-cineclub.png"
                alt="Cine Club Abarca"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 font-sans text-sm leading-relaxed text-muted-foreground max-w-xs">
              Un espacio íntimo de encuentro en torno al cine, para compartir
              opiniones, sensibilidades y vivencias personales.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="eyebrow mb-5">Navegación</p>

            <nav className="space-y-3">
              <Link
                to="/proyecto"
                className="block font-sans text-sm text-muted-foreground hover:text-ochre transition-colors"
              >
                El proyecto
              </Link>

              <Link
                to="/funciones"
                className="block font-sans text-sm text-muted-foreground hover:text-ochre transition-colors"
              >
                Funciones
              </Link>

              <Link
                to="/ensayos"
                className="block font-sans text-sm text-muted-foreground hover:text-ochre transition-colors"
              >
                Ensayos
              </Link>

              <Link
                to="/materiales"
                className="block font-sans text-sm text-muted-foreground hover:text-ochre transition-colors"
              >
                Materiales
              </Link>

              <Link
                to="/contacto"
                className="block font-sans text-sm text-muted-foreground hover:text-ochre transition-colors"
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <p className="eyebrow mb-5">Contacto</p>

            <div className="space-y-4 font-sans text-sm text-muted-foreground">
              <a
                href="mailto:cineclubabarca@gmail.com"
                className="flex items-center gap-2 hover:text-ochre transition-colors"
              >
                <Mail size={16} />
                cineclubabarca@gmail.com
              </a>

              <a
                href="https://instagram.com/cineclubabarca"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-ochre transition-colors"
              >
                Instagram · @cineclubabarca
              </a>

              <div className="leading-relaxed">
                <p>Hamburgo 36, Ñuñoa</p>
                <p>Tegualda 1871, Ñuñoa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-border mt-12 pt-6">
          <p className="font-sans text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
            Cine Club Abarca · Santiago de Chile · Entrada liberada
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
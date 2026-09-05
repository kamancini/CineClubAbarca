import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

import { publicUrl } from "../lib/publicUrl";

const Footer = () => {
  return (
    <footer className="px-6 md:px-10 py-14 md:py-20 border-t border-paper/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Identidad */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={publicUrl("/images/logo-cineclub.png")}
                alt="Cine Club Abarca"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-6 max-w-sm">
              Un espacio íntimo de encuentro en torno al cine, diseñado para
              compartir opiniones, sensibilidades y vivencias personales.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ochre">
              Navegación
            </p>

            <div className="flex flex-col gap-3 mt-5">
              <Link
                to="/proyecto"
                className="font-sans text-sm text-muted-foreground hover:text-paper transition-colors"
              >
                El proyecto
              </Link>

              <Link
                to="/funciones"
                className="font-sans text-sm text-muted-foreground hover:text-paper transition-colors"
              >
                Funciones
              </Link>

              <Link
                to="/ensayos"
                className="font-sans text-sm text-muted-foreground hover:text-paper transition-colors"
              >
                Ensayos
              </Link>

              <Link
                to="/materiales"
                className="font-sans text-sm text-muted-foreground hover:text-paper transition-colors"
              >
                Materiales
              </Link>

              <Link
                to="/contacto"
                className="font-sans text-sm text-muted-foreground hover:text-paper transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ochre">
              Contacto
            </p>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:cineclubabarca@gmail.com"
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground hover:text-paper transition-colors"
              >
                <Mail size={16} />
                cineclubabarca@gmail.com
              </a>

              <a
                href="https://www.instagram.com/cineclubabarca/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-muted-foreground hover:text-paper transition-colors inline-block"
              >
                @cineclubabarca
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-paper/10">
          <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Cine Club Abarca · Santiago de Chile · Entrada liberada
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
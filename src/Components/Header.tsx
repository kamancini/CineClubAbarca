import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/proyecto", label: "El proyecto" },
  { to: "/funciones", label: "Funciones" },
  { to: "/fanzine", label: "Fanzine" },
  { to: "/materiales", label: "Materiales" },
  { to: "/contacto", label: "Contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl text-paper">Cine Club</span>
          <span className="font-serif italic text-2xl text-ochre">
            Abarca
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-sans text-xs uppercase tracking-[0.14em] transition-colors ${
                location.pathname === link.to
                  ? "text-ochre"
                  : "text-paper/70 hover:text-paper"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-paper"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border px-6 py-5 bg-background">
          <div className="space-y-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block font-sans text-sm uppercase tracking-[0.14em] text-paper/80"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
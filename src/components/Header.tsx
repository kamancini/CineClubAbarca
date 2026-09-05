import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { publicUrl } from "../lib/publicUrl";

const navItems = [
  { label: "El proyecto", path: "/proyecto" },
  { label: "Funciones", path: "/funciones" },
  { label: "Ensayos", path: "/ensayos" },
  { label: "Materiales", path: "/materiales" },
  { label: "Contacto", path: "/contacto" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      <div className="px-6 md:px-10 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="shrink-0"
          >
            <img
              src={publicUrl("/images/logo-cineclub.png")}
              alt="Cine Club Abarca"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-sans text-xs uppercase tracking-[0.14em] transition-opacity ${
                    isActive
                      ? "text-ochre"
                      : "text-paper hover:opacity-60"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden bg-ochre text-ink w-11 h-11 flex items-center justify-center rounded-full shadow-sm hover:bg-ochre-soft transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-ochre px-6 py-7 shadow-lg">
          <div className="max-w-6xl mx-auto flex flex-col gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm uppercase tracking-[0.15em] text-ink"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
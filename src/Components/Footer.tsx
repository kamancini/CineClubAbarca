import { Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12 px-6 md:px-10">
    <div className="max-w-6xl mx-auto">
      <p className="font-serif text-2xl text-paper">
        Cine Club <span className="italic text-ochre">Abarca</span>
      </p>

      <p className="font-sans text-sm text-muted-foreground mt-3 max-w-xl">
        Un espacio íntimo de encuentro en torno al cine, para compartir
        opiniones, sensibilidades y vivencias personales.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8">
        <a
          href="mailto:cineclubabarca@gmail.com"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-ochre"
        >
          <Mail size={16} />
          cineclubabarca@gmail.com
        </a>

        <a
          href="https://instagram.com/cineclubabarca"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-ochre"
        >
          Instagram · @cineclubabarca
        </a>
      </div>

      <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-muted-foreground mt-10">
        Cine Club Abarca · Santiago de Chile · Entrada liberada
      </p>
    </div>
  </footer>
);

export default Footer;
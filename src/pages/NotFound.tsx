import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="min-h-screen bg-background flex items-center justify-center px-6">
    <div className="text-center">
      <p className="eyebrow">Error 404</p>

      <h1 className="font-serif text-6xl text-paper mt-4">
        Página no encontrada
      </h1>

      <Link
        to="/"
        className="inline-block mt-8 text-ochre font-sans uppercase tracking-[0.15em] text-xs"
      >
        Volver al inicio
      </Link>
    </div>
  </main>
);

export default NotFound;
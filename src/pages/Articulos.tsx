import Header from "../components/Header";
import Footer from "../components/Footer";

const Articulos = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <main className="max-w-6xl mx-auto px-6 md:px-10 py-20">
      <p className="eyebrow">Lecturas</p>
      <h1 className="font-serif text-5xl md:text-7xl text-paper mt-4">
        Artículos
      </h1>

      <p className="font-sans text-muted-foreground mt-6 max-w-2xl">
        Crítica, reflexión y conversación en torno al cine.
      </p>
    </main>

    <Footer />
  </div>
);

export default Articulos;
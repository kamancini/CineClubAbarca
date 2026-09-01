import Header from "../components/Header";
import Footer from "../components/Footer";

const Contacto = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <main className="max-w-6xl mx-auto px-6 md:px-10 py-20">
      <p className="eyebrow">Contacto</p>
      <h1 className="font-serif text-5xl md:text-7xl text-paper mt-4">
        Conversemos
      </h1>
    </main>

    <Footer />
  </div>
);

export default Contacto;
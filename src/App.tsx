import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Proyecto from "./pages/Proyecto";
import Funciones from "./pages/Funciones";
import Ensayos from "./pages/Ensayos";
import Materiales from "./pages/Materiales";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyecto" element={<Proyecto />} />
      <Route path="/funciones" element={<Funciones />} />
      <Route path="/ensayos" element={<Ensayos />} />
      <Route path="/materiales" element={<Materiales />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
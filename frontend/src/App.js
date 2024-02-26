import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header.js";
import Nav from "./components/layout/Nav.js";
import Footer from "./components/layout/Footer.js";

import HomePage from "./components/pages/HomePage.js";
import NosotrasPage from "./components/pages/NosotrasPage.js";
import InspiracionPage from "./components/pages/InspiracionPage.js";
import FansPage from "./components/pages/FansPage.js";
import ContactoPage from "./components/pages/ContactoPage.js";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="nosotras" element={<NosotrasPage />} />
          <Route path="inspiracion" element={<InspiracionPage />} />
          <Route path="fans" element={<FansPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

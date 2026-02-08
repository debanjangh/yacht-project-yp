import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import { initScrollReveal } from "./utils/scrollReveal";
import { translations } from "./utils/translations";

export default function App() {
  const [lang, setLang] = useState("en");

  // Initialize scroll animations once
  useEffect(() => {
    initScrollReveal();
  }, []);

  const t = translations[lang];

  return (
    <BrowserRouter>
      <Navbar lang={lang} setLang={setLang} t={t} />

      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/about" element={<About t={t} />} />
        <Route path="/services" element={<Services t={t} />} />
        <Route path="/contact" element={<Contact t={t} />} />
      </Routes>

      <Footer t={t} />
    </BrowserRouter>
  );
}

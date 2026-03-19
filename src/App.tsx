import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingWhatsApp } from "./components/layout/FloatingWhatsApp";
import { CountdownBanner } from "./components/layout/CountdownBanner";
import { MiniPet } from "./components/ui/MiniPet";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { BackToTop } from "./components/ui/BackToTop";
import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { useEffect } from "react";
import AOS from "aos";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-purple-500/30 selection:text-purple-200 relative">
        <ScrollProgress />
        <CountdownBanner />
        <MiniPet />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portafolio" element={<PortfolioPage />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </Router>
  );
}

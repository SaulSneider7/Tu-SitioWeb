import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react"; // Añadimos Lazy Loading
import AOS from "aos";

// Componentes de Layout (Carga inmediata porque son críticos)
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { CountdownBanner } from "./components/layout/CountdownBanner";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { ScrollToTop } from "./components/ui/ScrollToTop";


// Componentes secundarios (Carga diferida para no afectar el LCP)
const FloatingWhatsApp = lazy(() => import("./components/layout/FloatingWhatsApp").then(module => ({ default: module.FloatingWhatsApp })));
const MiniPet = lazy(() => import("./components/ui/MiniPet").then(module => ({ default: module.MiniPet })));
const BackToTop = lazy(() => import("./components/ui/BackToTop").then(module => ({ default: module.BackToTop })));

// Páginas
import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  useEffect(() => {
    // SEO: AOS puede ser pesado. Lo inicializamos solo si el usuario no prefiere reducir movimiento
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (!prefersReducedMotion) {
      AOS.init({
        duration: 800, // Bajamos de 1000 a 800 para que se sienta más "rápido" para Google
        once: true,
        easing: "ease-out-cubic",
        offset: 50, // Activa la animación un poco antes
      });
    }
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* Asegura que cada cambio de ruta inicie en la parte superior */}
      {/* Contenedor principal con lenguaje definido (si usas un wrapper de i18n o similar) */}
      <div className="min-h-screen font-sans selection:bg-purple-500/30 selection:text-purple-200 relative antialiased">
        
        {/* Capa de Accesibilidad: Salto al contenido principal */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-purple-600 text-white p-4 z-[500] rounded-xl">
          Saltar al contenido principal
        </a>

        <ScrollProgress />
        <CountdownBanner />
        
        {/* Navbar es parte del encabezado semántico */}
        <Navbar />

        {/* SEO: Identificamos el contenido principal para los bots */}
        <main id="main-content" role="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portafolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/terminos" element={<TermsOfServicePage />} />
            <Route path="/privacidad" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />

        {/* SEO & Performance: Los widgets decorativos o de terceros se cargan solo cuando el resto está listo */}
        <Suspense fallback={null}>
          <MiniPet />
          <FloatingWhatsApp />
          <BackToTop />
        </Suspense>

      </div>
    </Router>
  );
}
import { Hero } from "../components/sections/Hero";
import { PromoSection } from "../components/sections/PromoSection";
import { Services } from "../components/sections/Services";
import { Process } from "../components/sections/Process";
import { Pricing } from "../components/sections/Pricing";
import { AdditionalServices } from "../components/sections/AdditionalServices";
import { BeatQuote } from "../components/sections/BeatQuote";
import { FAQ } from "../components/sections/FAQ";
import { Reveal } from "../components/ui/Reveal";

export const HomePage = () => {
    return (
        <main>
            {/* El Hero NO debe llevar Reveal (o debe ser mínimo) para optimizar el LCP (Largest Contentful Paint) */}
            <Hero />

            {/* SEO: Usamos IDs para permitir navegación por anclas y búsqueda interna */}
            <section id="ofertas">
                <Reveal><PromoSection /></Reveal>
            </section>

            <section id="servicios">
                <Reveal><Services /></Reveal>
            </section>

            <section id="metodologia">
                <Reveal><Process /></Reveal>
            </section>

            <section id="precios">
                <Reveal><Pricing /></Reveal>
            </section>

            <section id="mejoras-tecnicas">
                <Reveal><AdditionalServices /></Reveal>
            </section>

            <section id="preguntas-frecuentes">
                <Reveal><FAQ /></Reveal>
            </section>

            <section id="comparativa">
                <Reveal><BeatQuote /></Reveal>
            </section>

            {/* SEO: JSON-LD (Datos Estructurados) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Tu SitioWeb",
                    "url": "https://tu-sitioweb.com",
                    "description": "Agencia de desarrollo web y diseño profesional en Perú."
                })}
            </script>
        </main>
    );
};
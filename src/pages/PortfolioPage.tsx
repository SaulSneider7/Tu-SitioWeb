import { Portfolio } from "../components/sections/Portfolio";
import { Reveal } from "../components/ui/Reveal";
import { useEffect } from "react";

export const PortfolioPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    return (
        <div className="pt-32 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 pt-20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 text-center">
                    Nuestro <span className="text-purple-500">Portafolio</span>
                </h1>
                <p className="text-gray-400 text-center max-w-3xl mx-auto text-xl mb-20">
                    Explora nuestra colección de soluciones digitales personalizadas, desde landing pages de alto impacto hasta arquitecturas corporativas complejas.
                </p>
            </div>
            <Reveal><Portfolio /></Reveal>

            {/* CTA Section for Portfolio Page */}
            <Reveal>
                <section className="py-20 bg-purple-600/5">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">¿Listo para ser nuestro próximo caso de éxito?</h2>
                        <p className="text-gray-400 mb-10 text-lg">Hablemos sobre tu proyecto y cómo podemos llevarlo al siguiente nivel técnico.</p>
                        <a href="https://wa.me/51917794918" target="_blank" className="inline-block bg-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-purple-700 transition-all glow-purple">
                            Iniciar una Conversación
                        </a>
                    </div>
                </section>
            </Reveal>
        </div>
    );
};

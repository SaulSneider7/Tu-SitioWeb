import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // SEO & Performance: Implementamos una función de control de frecuencia (throttle)
        // básica para evitar disparar el estado en cada pixel de scroll.
        let timeoutId: ReturnType<typeof setTimeout> | null = null;

        const handleScroll = () => {
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    setIsVisible(window.scrollY > 600);
                    timeoutId = null;
                }, 150); // Solo verifica cada 150ms
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        
        // SEO: Mover el foco al inicio de la página para accesibilidad
        document.getElementById('root')?.focus();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToTop}
                    // SEO: Identificamos el botón como un elemento de navegación
                    role="link" 
                    aria-label="Volver al inicio de la página"
                    title="Ir arriba"
                    className="fixed bottom-32 right-8 z-[90] w-14 h-14 bg-purple-600/90 backdrop-blur-md text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/40 hover:bg-purple-500 transition-all border border-white/10 group"
                >
                    <FontAwesomeIcon 
                        icon={faArrowUp} 
                        className="text-xl group-hover:-translate-y-1 transition-transform duration-300" 
                        aria-hidden="true" 
                    />
                    
                    {/* SEO: Texto oculto para bots y lectores de pantalla */}
                    <span className="sr-only">Subir al inicio</span>
                </motion.button>
            )}
        </AnimatePresence>
    );
};
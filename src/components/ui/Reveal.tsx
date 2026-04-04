import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "100%" }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" }); // Se activa un poco antes de llegar

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div 
            ref={ref} 
            style={{ position: "relative", width, overflow: "hidden" }}
            // SEO: Indicamos que este contenedor tiene contenido que se revelará
            aria-live="polite" 
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 }, // Reducimos el salto de 75 a 50 para mejor UX
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const FloatingWhatsApp = () => {
    // Mensaje predefinido para saber que vienen desde el botón flotante
    const whatsappUrl = "https://wa.me/51917794918?text=Hola,%20vi%20tu%20sitio%20web%20y%20necesito%20asesoría%20para%20mi%20proyecto.";

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer" // CRÍTICO PARA SEO Y SEGURIDAD
            aria-label="Contactar por WhatsApp para asesoría gratuita en diseño web"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 md:px-6 md:py-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.5)] transition-all group border border-white/10"
        >
            {/* Contenedor del Icono con indicador de actividad */}
            <div className="relative flex items-center justify-center">
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl md:text-3xl" aria-hidden="true" />
                
                {/* Notificación visual (Psicología de urgencia) */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-[#25D366]"></span>
                </span>
            </div>

            {/* Texto con Keywords Estratégicas */}
            <div className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase font-black opacity-80 tracking-tighter">Disponible Ahora</span>
                <span className="font-bold text-sm md:text-base whitespace-nowrap">Asesoría Gratis</span>
            </div>
            
            {/* SEO: Microdato oculto para que Google sepa que es una vía de contacto */}
            <span className="sr-only">Contactar a Tu SitioWeb vía WhatsApp</span>
        </motion.a>
    );
};
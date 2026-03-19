import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const FloatingWhatsApp = () => {
    return (
        <motion.a
            href="https://wa.me/51917794918"
            target="_blank"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl glow-green hover:bg-green-600 transition-all group"
        >
            <div className="relative">
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-green-500 animate-ping"></span>
            </div>
            <span className="font-bold whitespace-nowrap">Asesoría Gratis</span>
        </motion.a>
    );
};

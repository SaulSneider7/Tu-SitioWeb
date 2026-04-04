import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHeartBroken, faFrown } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "../components/ui/Reveal";

export const NotFoundPage = () => {
  return (
    <div className="top-15 min-h-screen bg-deep-black flex items-center justify-center px-4 relative overflow-hidden">
      <Helmet>
        <title>No eres tú, soy yo | TuSitioWeb</title>
        <meta name="description" content="La página que buscas no existe o ha sido movida." />
      </Helmet>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-3xl w-full text-center relative z-10">
        
        <Reveal>
          {/* Frase Gigante y Llamativa */}
          <div className="mb-6 flex flex-col items-center gap-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
              No eres tú, soy yo...
            </h2>
            <div className="flex gap-4 text-3xl md:text-4xl">
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-red-500"
              >
                <FontAwesomeIcon icon={faHeartBroken} />
              </motion.span>
              <motion.span 
                animate={{ y: [0, -5, 0] }} 
                transition={{ repeat: Infinity, duration: 3 }}
                className="text-yellow-500"
              >
                <FontAwesomeIcon icon={faFrown} />
              </motion.span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h1 className="text-7xl md:text-[10rem] font-display font-black text-white/20 leading-none mb-8 tracking-tighter italic">
            404
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-white/60 text-lg md:text-2xl font-light mb-12 max-w-lg mx-auto leading-relaxed">
            Nuestra relación con este enlace ha terminado. Pero no te preocupes, hay muchos más peces (y páginas) en el mar de **TuSitioWeb**.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/" 
              className="group relative px-10 py-5 bg-purple-600 rounded-2xl font-bold text-white overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(147,51,234,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center gap-3 text-lg">
                <FontAwesomeIcon icon={faHome} />
                <span>Volver al Inicio</span>
              </div>
            </Link>
            
            <Link 
              to="/blog" 
              className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-white hover:bg-white/10 transition-all hover:border-purple-500/30 text-lg"
            >
              Explorar el Blog
            </Link>
          </div>
        </Reveal>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 font-mono text-[10px] text-white/50 uppercase tracking-[0.5em]"
        >
          Status: Broken_Heart // Code: 404 // Recommendation: Find_New_Love
        </motion.div>
      </div>
    </div>
  );
};
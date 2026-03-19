import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faChevronRight, faTerminal } from "@fortawesome/free-solid-svg-icons";
import pricingConfig from "../../pricing-config.json";

export const Hero = () => {
    const { plans, discount } = pricingConfig;
    const lowestPrice = Math.min(...plans.map(p => p.originalPrice));
    const finalPrice = discount.enabled ? Math.floor(lowestPrice * (1 - discount.percentage / 100)) : lowestPrice;

    return (
        <section className="relative min-h-screen lg:h-screen flex items-center pt-32 md:pt-24 pb-16 px-4 overflow-hidden tech-grid">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                    data-aos="fade-right"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
                        <FontAwesomeIcon icon={faChartLine} className="w-3 h-3 md:w-4 h-4" /> Innovación Digital 2026
                    </div>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-white leading-tight mb-6">
                        Páginas web profesionales desde <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                            S/{finalPrice}
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                        Webs modernas y optimizadas para potenciar tu presencia digital y acelerar tu crecimiento en el mercado peruano.
                    </p>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                        <a href="#planes" className="bg-purple-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-purple-700 transition-all glow-purple flex items-center gap-3">
                            Explorar Sistemas <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 md:w-5 h-5" />
                        </a>
                        <a href="https://wa.me/51917794918" target="_blank" className="glass text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-white/10 transition-all flex items-center gap-3">
                            Protocolo de Inicio <FontAwesomeIcon icon={faTerminal} className="w-4 h-4 md:w-5 h-5" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:flex items-center justify-center min-h-[620px]"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    data-aos-delay="250"
                    data-aos-easing="ease-out-cubic"
                >
                    {/* Glow general */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-blue-500/30 rounded-[3rem] blur-3xl opacity-70"></div>

                    {/* Anillo decorativo detrás */}
                    <div className="absolute w-[520px] h-[520px] rounded-full border border-white/10"></div>
                    <div className="absolute w-[420px] h-[420px] rounded-full border border-purple-400/10"></div>

                    {/* Partículas suaves */}
                    <motion.div
                        className="absolute top-16 left-10 w-3 h-3 rounded-full bg-purple-400/70 blur-[2px]"
                        animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute top-28 right-16 w-2 h-2 rounded-full bg-blue-400/80 blur-[1px]"
                        animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-24 left-20 w-4 h-4 rounded-full bg-fuchsia-400/60 blur-[3px]"
                        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Blob decorativo */}
                    <motion.div
                        className="absolute top-10 left-14 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"
                        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-10 right-10 w-28 h-28 bg-blue-500/20 rounded-full blur-2xl"
                        animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Card superior izquierda */}
                    <motion.div
                        className="absolute top-20 left-0 z-20 glass rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 shadow-2xl"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.2em] text-purple-300 mb-1">
                            Deploy listo
                        </p>
                        <p className="text-sm font-bold text-white">Landing moderna</p>
                        <p className="text-xs text-gray-400">Responsive + rápida</p>
                    </motion.div>

                    {/* Card inferior derecha */}
                    <motion.div
                        className="absolute bottom-20 right-0 z-20 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl px-4 py-3 shadow-2xl max-w-[220px]"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.2em] text-blue-300 mb-2">
                            Código limpio
                        </p>
                        <pre className="text-[11px] leading-relaxed text-gray-200 whitespace-pre-wrap">
                            {`<Hero />
    <Button />
    <section className="premium" />`}
                        </pre>
                    </motion.div>

                    {/* Badge lateral */}
                    <motion.div
                        className="absolute top-[46%] -right-4 z-20 rounded-full border border-purple-400/20 bg-purple-500/10 backdrop-blur-lg px-4 py-2 shadow-lg"
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="text-xs font-semibold text-purple-200">
                            SEO · UX · E-commerce
                        </span>
                    </motion.div>

                    {/* Imagen principal */}
                    <motion.div
                        className="relative z-10 w-full max-w-[620px] mx-auto"
                        animate={{ y: [0, -12, 0], rotate: [0, 1, 0, -1, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-[2rem] blur-2xl scale-95"></div>

                        <img
                            src="/castor_hero.png"
                            alt="Castor Tecnológico"
                            className="relative w-full h-auto object-contain aspect-square drop-shadow-[0_0_40px_rgba(168,85,247,0.35)] select-none"
                            referrerPolicy="no-referrer"
                            draggable={false}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

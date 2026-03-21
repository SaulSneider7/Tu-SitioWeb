import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faChevronRight, faTerminal } from "@fortawesome/free-solid-svg-icons";
import pricingConfig from "../../pricing-config.json";

export const Hero = () => {
    const [showInfo, setShowInfo] = useState(false);
    const { plans, discount } = pricingConfig;
    const lowestPrice = Math.min(...plans.map(p => p.originalPrice));
    const finalPrice = discount.enabled ? Math.floor(lowestPrice * (1 - discount.percentage / 100)) : lowestPrice;

    return (
        <section className="relative min-h-screen lg:h-screen flex items-center pt-32 md:pt-24 pb-16 px-4 overflow-hidden tech-grid mt-30 md:mt-0">
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

                <div className="relative flex flex-col items-center justify-center z-20">

                    {/* ANILLOS DECORATIVOS */}
                    <div className="absolute w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full border border-white/10"></div>
                    <div className="absolute w-[220px] h-[220px] md:w-[420px] md:h-[420px] rounded-full border border-purple-400/10"></div>

                    {/* PARTÍCULAS SUAVES */}
                    <motion.div
                        className="absolute top-16 left-10 w-2 h-2 rounded-full bg-purple-400/70 blur-[2px]"
                        animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute top-24 right-12 w-2 h-2 rounded-full bg-blue-400/70"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />

                    {/* BLOBS */}
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

                    {/* CARD SUPERIOR (CLICK HINT) */}
                    <motion.div
                        className="absolute top-20 left-0 z-20 glass rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 shadow-2xl max-w-[180px]"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.2em] text-purple-300 mb-1">
                            Interacción
                        </p>
                        <p className="text-sm font-bold text-white">Haz click en el castor 👇</p>
                        <p className="text-xs text-gray-400">Descubre lo que construyo</p>
                    </motion.div>

                    {/* CARD INFERIOR */}
                    <motion.div
                        className="absolute bottom-20 right-0 z-20 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl px-4 py-3 shadow-2xl max-w-[220px]"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
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

                    {/* BADGE */}
                    <motion.div
                        className="absolute top-[46%] -right-4 z-20 rounded-full border border-purple-400/20 bg-purple-500/10 backdrop-blur-lg px-4 py-2 shadow-lg"
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity }}
                    >
                        <span className="text-xs font-semibold text-purple-200">
                            SEO · UX · E-commerce
                        </span>
                    </motion.div>

                    {/* INDICADOR CLICK (extra refuerzo UX) */}
                    <motion.div
                        className="absolute -top-8 md:-top-12 flex items-center gap-2 bg-purple-600/20 border border-purple-400/30 text-purple-300 px-3 py-1 rounded-full text-[10px] md:text-xs backdrop-blur-md"
                        animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                    >
                        Interactúa con ByteCastor
                    </motion.div>

                    {/* CASTOR */}
                    <motion.div
                        className="relative z-10 w-full max-w-[280px] sm:max-w-[380px] md:max-w-[520px] lg:max-w-[620px] mx-auto cursor-pointer"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        onClick={() => setShowInfo(!showInfo)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-[2rem] blur-2xl scale-95"></div>

                        <img
                            src="/castor_hero.png"
                            alt="ByteCastor"
                            className="relative w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(168,85,247,0.35)]"
                        />

                        {/* MARCA */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center">
                            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                                ByteCastor
                            </h2>
                            <p className="text-xs uppercase tracking-widest text-purple-300">
                                Arquitecto Digital
                            </p>
                        </div>
                    </motion.div>

                    {/* PANEL INTERACTIVO */}
                    {showInfo && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999] w-[90%] md:w-[380px] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl"
                        >
                            <p className="text-xs uppercase tracking-widest text-blue-300 mb-4 text-center">
                                ¿Qué construyo?
                            </p>

                            <ul className="text-sm text-gray-300 space-y-3">
                                <li>🚀 Webs rápidas y optimizadas</li>
                                <li>🎯 Diseño que convierte</li>
                                <li>📈 SEO listo para Google</li>
                                <li>⚙️ Sistemas escalables</li>
                            </ul>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

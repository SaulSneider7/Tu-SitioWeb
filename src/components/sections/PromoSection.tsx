import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import pricingConfig from "../../pricing-config.json";

export const PromoSection = () => {
    const { plans, discount } = pricingConfig;
    const lowestPrice = Math.min(...plans.map(p => p.originalPrice));
    const finalPrice = discount.enabled ? Math.floor(lowestPrice * (1 - discount.percentage / 100)) : lowestPrice;

    return (
        <section className="py-12 relative overflow-hidden" data-aos="fade-up" aria-labelledby="promo-title">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-1 rounded-[3rem] bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600"
                >
                    <div className="bg-black/90 backdrop-blur-xl rounded-[2.9rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
                        
                        <div className="flex-1 text-center md:text-left">
                            {/* SEO: H2 con palabras clave de intención de búsqueda */}
                            <h2 id="promo-title" className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white mb-4 leading-tight">
                                TU WEB PROFESIONAL EN PERÚ <br />
                                <span className="text-purple-400">DESDE S/{finalPrice}</span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl font-medium">
                                Impulsa tu negocio hoy mismo. Creamos <strong>páginas web de alta velocidad</strong> y listas para vender.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <div className="text-center md:text-right">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-black uppercase tracking-widest mb-2">
                                    <FontAwesomeIcon icon={faComment} className="animate-bounce" aria-hidden="true" /> ASESORÍA GRATIS
                                </div>
                                <p className="text-gray-500 text-xs font-mono">Consultoría digital sin compromiso</p>
                            </div>

                            {/* SEO: Atributos de enlace y aria-label para mejor accesibilidad */}
                            <a
                                href={`https://wa.me/51917794918?text=Hola,%20me%20gustaría%20mi%20asesoría%20gratis%20y%20conocer%20más%20sobre%20los%20planes%20desde%20S/${finalPrice}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Solicitar asesoría gratuita por WhatsApp para mi página web"
                                className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xl hover:bg-purple-500 hover:text-white transition-all shadow-xl shadow-white/5 flex items-center gap-3 group"
                            >
                                ¡LO QUIERO! <FontAwesomeIcon icon={faWhatsapp} className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
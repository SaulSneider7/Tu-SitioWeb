import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShieldAlt, faBolt, faClock, faShareAlt, faMicrochip, faUsers } from "@fortawesome/free-solid-svg-icons";

export const BeatQuote = () => {
    const improvements = [
        {
            icon: faSearch,
            title: "Auditoría de Alcance",
            desc: "Analizamos el presupuesto de tu web para detectar funciones infladas, vacíos técnicos o promesas poco claras."
        },
        {
            icon: faShieldAlt,
            title: "Optimización Técnica",
            desc: "Evaluamos rendimiento, seguridad, arquitectura SEO y escalabilidad futura para asegurar tu inversión."
        },
        {
            icon: faBolt,
            title: "Rentabilidad Real",
            desc: "Ajustamos el costo para que pagues por resultados tangibles, eliminando sobrecostos innecesarios."
        },
        {
            icon: faClock,
            title: "Garantía de Continuidad",
            desc: "Transparentamos los servicios de mantenimiento y soporte post-entrega para evitar sorpresas."
        }
    ];

    const steps = [
        { id: 1, text: "Envíanos la cotización o propuesta técnica que recibiste de otra agencia o freelance." },
        { id: 2, text: "Nuestro equipo técnico analiza el documento buscando mejoras en rendimiento y precio." },
        { id: 3, text: "Recibes una contrapropuesta optimizada, más clara y alineada a tus objetivos comerciales." }
    ];

    return (
        <section id="mejorar-cotizacion" className="py-32 px-4 relative overflow-hidden" aria-labelledby="beat-quote-title">
            {/* SEO: Fondo atmosférico */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-purple-600/5 blur-[150px] -z-10" aria-hidden="true"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-white">
                    {/* Header: SEO Targeting */}
                    <div className="text-center mb-20" data-aos="fade-up">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-black uppercase tracking-[0.3em] mb-6"
                        >
                            Consultoría Técnica Gratuita
                        </motion.div>
                        <h2 id="beat-quote-title" className="text-3xl md:text-4xl lg:text-6xl font-display font-black mb-8 leading-tight">
                            ¿YA TIENES UNA <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-shadow-glow">COTIZACIÓN WEB?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-purple-200 font-bold mb-6 italic text-balance">
                            La auditamos sin compromiso para mejorar el rendimiento y el precio.
                        </p>
                        <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            No tomes una decisión a ciegas sobre tu <strong>infraestructura digital</strong>. Analizamos propuestas de terceros para ofrecerte una alternativa de <strong>desarrollo web escalable</strong>, sin costos ocultos y con mayor retorno de inversión.
                        </p>
                    </div>

                    {/* SEO: Cards como artículos independientes */}
                    <div className="mb-24">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">¿Qué auditamos en tu propuesta actual?</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {improvements.map((item, i) => (
                                <article
                                    key={i}
                                    className="p-8 rounded-3xl glass border-white/5 hover:border-purple-500/30 transition-all group"
                                    data-aos="fade-up"
                                    data-aos-delay={i * 100}
                                >
                                    <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-all shadow-lg shadow-purple-500/10" aria-hidden="true">
                                        <FontAwesomeIcon icon={item.icon} className="text-xl text-purple-400 group-hover:text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">{item.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Pasos a seguir */}
                    <div className="mb-24 p-10 md:p-16 rounded-[3rem] glass border-purple-500/20 relative overflow-hidden" data-aos="zoom-in">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 -z-10" aria-hidden="true"></div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12 italic">Proceso de Mejora de Propuesta</h3>
                        <div className="grid md:grid-cols-3 gap-12 relative">
                            {steps.map((step, i) => (
                                <div
                                    key={i}
                                    className="relative flex flex-col items-center text-center"
                                    data-aos="fade-up"
                                    data-aos-delay={i * 150}
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-purple-500/20 text-white">
                                        {step.id}
                                    </div>
                                    <p className="text-gray-300 font-medium leading-relaxed">{step.text}</p>
                                    {i < 2 && (
                                        <div className="hidden md:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[2px] bg-gradient-to-r from-purple-500/30 to-transparent" aria-hidden="true"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Final */}
                    <div className="text-center" data-aos="fade-up">
                        <a
                            href="https://wa.me/51917794918?text=Hola,%20tengo%20una%20cotización%20de%20otra%20agencia%20y%20me%20gustaría%20mejorarla."
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Enviar cotización externa para auditoría gratuita"
                            className="bg-white text-black px-12 py-6 rounded-2xl font-black text-xl md:text-2xl hover:bg-purple-600 hover:text-white transition-all inline-flex items-center gap-4 shadow-xl mb-6 group"
                        >
                            MEJORAR MI COTIZACIÓN <FontAwesomeIcon icon={faShareAlt} className="text-2xl group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                        </a>
                        <p className="text-gray-500 text-sm mb-12 italic">Especialistas en rescate de proyectos y optimización de presupuestos web.</p>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {[
                                { icon: faShieldAlt, text: "Transparencia Total" },
                                { icon: faMicrochip, text: "Arquitectura Senior" },
                                { icon: faUsers, text: "Soporte en Perú" }
                            ].map((badge, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider"
                                >
                                    <FontAwesomeIcon icon={badge.icon} className="text-purple-400" aria-hidden="true" />
                                    {badge.text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
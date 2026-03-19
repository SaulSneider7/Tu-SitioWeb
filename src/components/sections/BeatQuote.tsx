import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShieldAlt, faBolt, faClock, faShareAlt, faMicrochip, faUsers } from "@fortawesome/free-solid-svg-icons";

export const BeatQuote = () => {
    const improvements = [
        {
            icon: faSearch,
            title: "Alcance real del proyecto",
            desc: "Detectamos funciones infladas, vacíos técnicos o promesas poco claras."
        },
        {
            icon: faShieldAlt,
            title: "Calidad técnica",
            desc: "Estructura, rendimiento, seguridad, SEO y escalabilidad futura."
        },
        {
            icon: faBolt,
            title: "Costo vs valor",
            desc: "Ajustamos el precio para que pagues por resultados, no por humo."
        },
        {
            icon: faClock,
            title: "Soporte y continuidad",
            desc: "Dejamos claro qué incluye el mantenimiento y qué no."
        }
    ];

    const steps = [
        { id: 1, text: "Nos envías la cotización o propuesta que recibiste de otra agencia." },
        { id: 2, text: "Analizamos el documento a nivel técnico, funcional y comercial." },
        { id: 3, text: "Te entregamos una propuesta optimizada, clara y sin costos ocultos." }
    ];

    return (
        <section className="py-32 px-4 relative overflow-hidden" data-aos="fade-up">
            {/* Background atmospheric glow instead of a box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-purple-600/5 blur-[150px] -z-10"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-white">
                    {/* Header */}
                    <div className="text-center mb-20" data-aos="fade-up">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-black uppercase tracking-[0.3em] mb-6"
                        >
                            GARANTÍA DE MEJOR PROPUESTA
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-black mb-8 leading-tight">
                            ¿YA TIENES UNA <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">COTIZACIÓN?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-purple-200 font-bold mb-6">La analizamos y la mejoramos</p>
                        <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            Si otra agencia ya te envió una propuesta, no tomes una decisión a ciegas. Nosotros la revisamos a nivel técnico, estratégico y comercial para entregarte una alternativa más clara, más escalable y con mayor retorno real.
                        </p>
                    </div>

                    {/* What we improve */}
                    <div className="mb-24">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12" data-aos="fade-up">¿Qué mejoramos exactamente?</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {improvements.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-3xl glass border-white/5 hover:border-purple-500/30 transition-all group"
                                    data-aos="fade-up"
                                    data-aos-delay={i * 100}
                                >
                                    <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-all">
                                        <FontAwesomeIcon icon={item.icon} className="text-xl text-purple-400 group-hover:text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 text-white">{item.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* How it works */}
                    <div className="mb-24 p-10 md:p-16 rounded-[3rem] glass border-purple-500/20 relative overflow-hidden" data-aos="zoom-in">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 -z-10"></div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">¿Cómo funciona?</h3>
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
                                        <div className="hidden md:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA & Badges */}
                    <div className="text-center" data-aos="fade-up">
                        <a
                            href="https://wa.me/51917794918?text=Hola,%20tengo%20una%20cotización%20de%20otra%20agencia%20y%20me%20gustaría%20mejorarla."
                            target="_blank"
                            className="bg-white text-black px-12 py-6 rounded-2xl font-black text-xl md:text-2xl hover:bg-purple-500 hover:text-white transition-all inline-flex items-center gap-4 shadow-white/10 mb-6 group"
                        >
                            ENVIAR MI COTIZACIÓN <FontAwesomeIcon icon={faShareAlt} className="text-2xl group-hover:translate-x-2 transition-transform" />
                        </a>
                        <p className="text-gray-500 text-sm mb-12 italic">*Aplican condiciones según el alcance y tipo de proyecto</p>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {[
                                { icon: faShieldAlt, text: "Sin costos ocultos" },
                                { icon: faMicrochip, text: "Enfoque técnico real" },
                                { icon: faUsers, text: "Acompañamiento post-entrega" }
                            ].map((badge, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-bold"
                                    data-aos="fade-up"
                                    data-aos-delay={i * 100}
                                >
                                    <FontAwesomeIcon icon={badge.icon} className="text-purple-400" />
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

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faTerminal, faCode, faChartLine, faBolt } from "@fortawesome/free-solid-svg-icons";

export const Process = () => {
    const steps = [
        {
            id: "01",
            title: "Protocolo de Inicio",
            desc: "Asesoría gratuita para definir el ADN de tu proyecto.",
            icon: faComment,
            color: "from-blue-500 to-cyan-400"
        },
        {
            id: "02",
            title: "Arquitectura & Costo",
            desc: "Diseño de la estructura técnica y presupuesto optimizado.",
            icon: faTerminal,
            color: "from-purple-500 to-pink-500"
        },
        {
            id: "03",
            title: "Fase de Construcción",
            desc: "Codificación de alto nivel con revisiones en tiempo real.",
            icon: faCode,
            color: "from-orange-500 to-yellow-500"
        },
        {
            id: "04",
            title: "Sincronización",
            desc: "Reunión de validación final para ajustes de precisión.",
            icon: faChartLine,
            color: "from-green-500 to-emerald-400"
        },
        {
            id: "05",
            title: "Despliegue Final",
            desc: "Lanzamiento a producción y entrega de activos digitales.",
            icon: faBolt,
            color: "from-purple-600 to-blue-600"
        }
    ];

    return (
        <section id="proceso" className="py-32 tech-grid relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-24" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">Proceso de <span className="text-purple-500">Producción</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">Un flujo de trabajo optimizado para la máxima eficiencia y calidad.</p>
                </div>

                <div className="grid lg:grid-cols-5 gap-6 relative">
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 -translate-y-1/2"></div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="p-8 rounded-3xl glass border-purple-500/20 hover:border-purple-500/50 transition-all group h-full flex flex-col items-center text-center">
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-[2px] mb-8 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform`}>
                                    <div className="w-full h-full bg-black rounded-[calc(1rem-2px)] flex items-center justify-center">
                                        <FontAwesomeIcon icon={step.icon} className="text-2xl text-white" />
                                    </div>
                                </div>
                                <span className="text-4xl font-display font-black text-purple-500/60 mb-4 group-hover:text-purple-500/90 transition-colors">{step.id}</span>
                                <h3 className="text-xl font-display font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

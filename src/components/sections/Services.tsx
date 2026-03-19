import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faGlobe, faShieldAlt, faCode } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
    const services = [
        { icon: faLayerGroup, title: "Landing Pages", desc: "Interfaces de alta conversión con arquitectura optimizada para el usuario moderno." },
        { icon: faGlobe, title: "Web Standard", desc: "Ecosistemas digitales escalables con integración de APIs y sistemas de gestión." },
        { icon: faShieldAlt, title: "Web Corporativa", desc: "Infraestructuras empresariales de alta seguridad y rendimiento personalizado." },
        { icon: faCode, title: "Core Digital", desc: "Sistemas a medida, automatizaciones y desarrollo de backend robusto." }
    ];

    return (
        <section id="servicios" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-24" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">Nuestros <span className="text-purple-500">Módulos</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">Desplegamos tecnología de punta para cada nivel de necesidad digital.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -15, backgroundColor: "rgba(147, 51, 234, 0.1)" }}
                            className="p-10 rounded-[2rem] glass border-purple-500/10 transition-all group"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 transition-all">
                                <FontAwesomeIcon icon={s.icon} className="text-2xl text-purple-400 group-hover:text-white" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-4">{s.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

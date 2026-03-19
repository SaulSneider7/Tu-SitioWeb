import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faChevronRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import pricingConfig from "../../pricing-config.json";

export const Pricing = () => {
    const { plans, discount } = pricingConfig;
    const discountFactor = discount.enabled ? (1 - discount.percentage / 100) : 1;

    return (
        <section id="planes" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-24" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">Planes de <span className="text-purple-500">Inversión</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">Escalabilidad garantizada para cada etapa de tu negocio.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => {
                        const discountedPrice = Math.floor(plan.originalPrice * discountFactor);
                        return (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className={`p-10 rounded-[2.5rem] glass border-purple-500/20 relative overflow-hidden ${plan.popular ? 'ring-2 ring-purple-500 glow-purple' : ''}`}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-purple-600 text-white px-6 py-2 rounded-bl-2xl text-xs font-black uppercase tracking-widest">
                                        Popular
                                    </div>
                                )}
                                <h3 className="text-3xl font-display font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-sm mb-8">{plan.desc}</p>
                                <div className="flex flex-col mb-10">
                                    {discount.enabled ? (
                                        <>
                                            <div className="flex items-center gap-3">
                                                <span className="text-gray-500 line-through text-xl font-mono">S/{plan.originalPrice}</span>
                                                <span className="bg-yellow-400/10 text-yellow-400 text-[10px] font-black px-2 py-1 rounded-md border border-yellow-400/20">-{discount.percentage}% OFF</span>
                                            </div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-5xl font-display font-black text-white">S/{discountedPrice}</span>
                                                <span className="text-gray-400 font-mono text-sm">/ único</span>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-display font-black text-white">S/{plan.originalPrice}</span>
                                            <span className="text-gray-400 font-mono text-sm">/ único</span>
                                        </div>
                                    )}
                                </div>
                                <ul className="space-y-5 mb-12">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-4 text-gray-300">
                                            <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="text-xs text-purple-400" />
                                            </div>
                                            <span className="text-sm">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={`https://wa.me/51917794918?text=Hola,%20estoy%20interesado%20en%20el%20plan%20${plan.name}${discount.enabled ? `%20con%20la%20oferta%20del%20${discount.percentage}%25` : ''}`}
                                    target="_blank"
                                    className={`w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 ${plan.popular ? 'bg-purple-600 text-white hover:bg-purple-700 glow-purple' : 'glass text-white hover:bg-white/5'}`}
                                >
                                    Iniciar Proyecto <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-20 p-12 rounded-[3rem] glass border-purple-500/30 text-center relative overflow-hidden"
                    data-aos="zoom-in"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-purple-600/5 -z-10"></div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">¿Tu visión requiere un Core Personalizado?</h3>
                    <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">Desarrollamos arquitecturas complejas, integraciones de IA y sistemas escalables a medida.</p>
                    <a href="https://wa.me/51917794918" target="_blank" className="inline-block bg-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-purple-700 transition-all glow-purple">
                        Consultoría de Ingeniería <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

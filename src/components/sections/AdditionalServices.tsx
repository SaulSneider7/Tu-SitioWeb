import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faGlobe, faCogs, faEdit } from "@fortawesome/free-solid-svg-icons";
import pricingConfig from "../../pricing-config.json";

export const AdditionalServices = () => {
    const { additionalServices } = pricingConfig;

    const iconMap: { [key: string]: any } = {
        hosting: faServer,
        domain: faGlobe,
        support: faCogs,
        updates: faEdit
    };

    return (
        <section id="servicios-adicionales" className="py-32 relative" aria-labelledby="additional-services-title">
            <div className="max-w-7xl mx-auto px-4">
                
                {/* SEO: Título con palabras clave de soporte y mantenimiento */}
                <div className="text-center mb-24" data-aos="fade-up">
                    <h2 id="additional-services-title" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        Infraestructura y <span className="text-purple-500">Soporte Web</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Garantizamos la estabilidad y el crecimiento de tu proyecto con <strong>servicios de hosting, dominio y mantenimiento técnico</strong>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {additionalServices.map((s, i) => {
                        return (
                            <article
                                key={i}
                                className="p-8 rounded-[2rem] glass border-purple-500/10 flex flex-col items-center text-center group hover:border-purple-500/30 transition-all shadow-lg shadow-purple-500/5"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                {/* Icono decorativo - aria-hidden para no distraer al bot */}
                                <div className="w-16 h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-all shadow-inner" aria-hidden="true">
                                    <FontAwesomeIcon 
                                        icon={iconMap[s.id] || faGlobe} 
                                        className="text-2xl text-purple-400 group-hover:text-white" 
                                    />
                                </div>

                                {/* SEO: H3 para jerarquía de servicios secundarios */}
                                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                    {s.title}
                                </h3>
                                
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                    {s.detail}
                                </p>
                                
                                <div className="mt-auto flex flex-col items-center gap-1">
                                    <div className="text-2xl font-display font-black text-purple-400" aria-label={`Precio: S/${(s as any).originalPrice} por ${(s as any).billingCycle}`}>
                                        S/{(s as any).originalPrice} 
                                        <span className="text-xs text-gray-500 font-mono ml-1 uppercase tracking-tighter">
                                            / {(s as any).billingCycle}
                                        </span>
                                    </div>

                                    {/* Nota aclaratoria para el SEO y el usuario */}
                                    {s.id === "updates" && (
                                        <span className="text-[10px] text-gray-500 italic leading-tight mt-1">
                                            *Consultoría técnica personalizada
                                        </span>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
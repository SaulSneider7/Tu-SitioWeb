import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Agregamos faEdit para los cambios
import { faServer, faGlobe, faCogs, faEdit } from "@fortawesome/free-solid-svg-icons";
import pricingConfig from "../../pricing-config.json";

export const AdditionalServices = () => {
    const { additionalServices } = pricingConfig;

    const iconMap: { [key: string]: any } = {
        hosting: faServer,
        domain: faGlobe,
        support: faCogs,
        updates: faEdit // Mapeamos el nuevo servicio
    };

    return (
        <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-24" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        Servicios <span className="text-purple-500">Adicionales</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Mantenemos tu ecosistema digital siempre actualizado.</p>
                </div>

                {/* Cambiamos md:grid-cols-3 a lg:grid-cols-4 para que quepan los 4 en una fila en pantallas grandes */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {additionalServices.map((s, i) => {
                        return (
                            <div
                                key={i}
                                className="p-8 rounded-[2rem] glass border-purple-500/10 flex flex-col items-center text-center group hover:border-purple-500/30 transition-all"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div className="w-16 h-16 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-all">
                                    <FontAwesomeIcon 
                                        icon={iconMap[s.id] || faGlobe} 
                                        className="text-2xl text-purple-400 group-hover:text-white" 
                                    />
                                </div>
                                <h3 className="text-xl font-display font-bold text-white mb-3">{s.title}</h3>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{s.detail}</p>
                                
                                <div className="mt-auto flex flex-col items-center gap-1">
                                    <div className="text-2xl font-display font-black text-purple-400">
                                        S/{(s as any).originalPrice} 
                                        <span className="text-xs text-gray-500 font-mono ml-1">
                                            / {(s as any).billingCycle}
                                        </span>
                                    </div>
                                    {/* Nota aclaratoria para el precio variable */}
                                    {s.id === "updates" && (
                                        <span className="text-[10px] text-gray-500 italic leading-tight">
                                            *Sujeto a complejidad del cambio
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
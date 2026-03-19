import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faGlobe, faCogs } from "@fortawesome/free-solid-svg-icons";
import pricingConfig from "../../pricing-config.json";

export const AdditionalServices = () => {
    const { additionalServices } = pricingConfig;

    const iconMap: { [key: string]: any } = {
        hosting: faServer,
        domain: faGlobe,
        support: faCogs
    };

    return (
        <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-24" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">Servicios <span className="text-purple-500">Adicionales</span></h2>
                    <p className="text-gray-400 text-lg">Mantenemos tu ecosistema digital siempre actualizado.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {additionalServices.map((s, i) => {
                        return (
                            <div
                                key={i}
                                className="p-10 rounded-[2rem] glass border-purple-500/10 flex flex-col items-center text-center group hover:border-purple-500/30 transition-all"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div className="w-20 h-20 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 transition-all">
                                    <FontAwesomeIcon icon={iconMap[s.id] || faGlobe} className="text-3xl text-purple-400 group-hover:text-white" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-3">{s.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">{s.detail}</p>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="text-3xl font-display font-black text-purple-400">S/{(s as any).originalPrice} <span className="text-sm text-gray-500 font-mono">/ {(s as any).billingCycle}</span></div>
                                </div>
                                {s.id === "support" && (
                                    <div className="mt-6 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 text-xs text-purple-400/70 font-mono">
                                        Soporte base + S/20 por cada cambio (post-proyecto).
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faGlobe, faCogs, faEdit, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
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
        <section 
            id="servicios-adicionales" 
            className="py-32 relative overflow-hidden" 
            aria-labelledby="additional-services-title"
        >
            {/* Decoración de fondo para profundidad visual */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-10">
                
                <div className="text-center mb-24" data-aos="fade-up">
                    {/* Badge superior para SEO: Categorización de servicio */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-[10px]" />
                        Mantenimiento Profesional
                    </span>

                    <h2 id="additional-services-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        Infraestructura y <span className="text-purple-500">Soporte Web</span>
                    </h2>
                    
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Asegura la continuidad de tu negocio en digital. Ofrecemos 
                        <span className="text-white"> soluciones de hosting de alta velocidad</span>, 
                        gestión de dominios y <span className="text-white">soporte técnico especializado en Perú</span>.
                    </p>
                </div>

                {/* Contenedor con Schema.org para servicios */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {additionalServices.map((s, i) => {
                        return (
                            <article
                                key={s.id}
                                className="relative p-8 rounded-[2.5rem] glass border-white/5 flex flex-col items-center text-center group hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                                itemScope 
                                itemType="https://schema.org/Service"
                            >
                                {/* Badge de "Popular" o "Esencial" opcional */}
                                {(s.id === 'hosting' || s.id === 'support') && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-purple-600 text-white text-[10px] font-black uppercase tracking-tighter shadow-lg shadow-purple-500/40">
                                        Recomendado
                                    </span>
                                )}

                                <div className="w-20 h-20 bg-gradient-to-br from-purple-600/20 to-transparent rounded-3xl flex items-center justify-center mb-8 group-hover:from-purple-600 group-hover:rotate-6 transition-all duration-500 shadow-inner" aria-hidden="true">
                                    <FontAwesomeIcon 
                                        icon={iconMap[s.id] || faGlobe} 
                                        className="text-3xl text-purple-400 group-hover:text-white transition-colors" 
                                    />
                                </div>

                                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-purple-400 transition-colors" itemProp="name">
                                    {s.title}
                                </h3>
                                
                                <p className="text-gray-400 mb-8 text-sm leading-relaxed" itemProp="description">
                                    {s.detail}
                                </p>
                                
                                <div className="mt-auto w-full">
                                    <div className="py-4 border-t border-white/5 flex flex-col items-center">
                                        <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Inversión</span>
                                        <div className="text-3xl font-display font-black text-white" aria-label={`Precio: S/${(s as any).originalPrice}`}>
                                            <span className="text-purple-500 text-sm mr-1">S/</span>
                                            {(s as any).originalPrice} 
                                            <span className="text-xs text-gray-500 font-mono ml-1 uppercase">
                                                / {(s as any).billingCycle}
                                            </span>
                                        </div>
                                    </div>

                                    {s.id === "updates" && (
                                        <p className="text-[10px] text-purple-400/60 italic mt-2 font-medium">
                                            *Consultoría técnica prioritaria
                                        </p>
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
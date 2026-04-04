import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPhone, faEnvelope, faMapMarkerAlt, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        { icon: faFacebook, url: "https://www.facebook.com/profile.php?id=61586504782161", label: "Facebook" },
        { icon: faInstagram, url: "https://www.instagram.com/tu_sitioweb.oficial", label: "Instagram" },
        { icon: faTiktok, url: "https://www.tiktok.com/@tu.sitioweb", label: "TikTok" },
        { icon: faWhatsapp, url: "https://wa.me/51917794918", label: "WhatsApp" }
    ];

    return (
        <footer id="contacto" className="text-white pt-32 pb-12 relative overflow-hidden" itemScope itemType="https://schema.org/LocalBusiness">
            {/* SEO: Metadata oculta para Google Bot */}
            <meta itemProp="name" content="Tu SitioWeb - Agencia de Desarrollo Web" />
            <meta itemProp="address" content="Lima, Perú" />
            <meta itemProp="telephone" content="+51917794918" />

            {/* Background Estético */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl -z-10"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24 relative z-10">
                
                {/* Branding & Bio */}
                <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-8 group cursor-default">
                        <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.5)] group-hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faCode} className="text-white text-xl" />
                        </div>
                        <span className="text-3xl font-display font-bold tracking-tight">Tu <span className="text-purple-500">SitioWeb</span></span>
                    </div>
                    <p className="text-gray-400 max-w-md mb-10 text-lg leading-relaxed">
                        Expertos en <strong>diseño web profesional y desarrollo de software</strong> en Perú. Transformamos ideas complejas en interfaces digitales de alto rendimiento.
                    </p>
                    
                    {/* Social Media con mejor accesibilidad */}
                    <div className="flex gap-4">
                        {socialLinks.map((social, i) => (
                            <a 
                                key={i} 
                                href={social.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label={social.label}
                                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-purple-600 hover:-translate-y-1 transition-all duration-300"
                            >
                                <FontAwesomeIcon icon={social.icon} className="text-xl text-white" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navegación Estratégica (SEO Links) */}
                <div>
                    <h4 className="text-sm font-black mb-8 text-purple-500 uppercase tracking-[0.2em]">Mapa del Sistema</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#servicios" className="hover:text-purple-400 transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">_</span> Servicios</a></li>
                        <li><a href="#mejorar-cotizacion" className="hover:text-purple-400 transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">_</span> Auditoría Web</a></li>
                        <li><a href="#planes" className="hover:text-purple-400 transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">_</span> Planes de Inversión</a></li>
                        <li><a href="#faq" className="hover:text-purple-400 transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">_</span> Soporte Técnico</a></li>
                    </ul>
                </div>

                {/* Datos de Contacto con Microdatos */}
                <div className="lg:col-span-2">
                    <h4 className="text-sm font-black mb-8 text-purple-500 uppercase tracking-[0.2em]">Protocolo de Contacto</h4>
                    <ul className="space-y-6 text-gray-400 text-lg">
                        <li className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                <FontAwesomeIcon icon={faPhone} className="text-purple-500" />
                            </div>
                            <span itemProp="telephone" className="hover:text-white transition-colors cursor-pointer">+51 917 794 918</span>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                <FontAwesomeIcon icon={faEnvelope} className="text-purple-500" />
                            </div>
                            <a href="mailto:contacto@tu-sitioweb.com" itemProp="email" className="hover:text-white transition-colors underline decoration-purple-500/30 underline-offset-4">
                                contacto@tu-sitioweb.com
                            </a>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-500" />
                            </div>
                            <span className="text-balance">Lima, Perú // Cobertura Internacional</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright & Sub-footer */}
            <div className="max-w-7xl mx-auto px-4 pt-12 border-t border-white/5 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-600 font-mono text-[10px] tracking-widest uppercase">
                        © {currentYear} TU SITIO WEB // <span className="text-purple-900">SYSTEM_VERSION: 2.1.0</span> // POWERED_BY_CASTOR
                    </div>
                    <div className="flex gap-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        <a href="#" className="hover:text-purple-500 transition-colors">Términos de Servicio</a>
                        <a href="#" className="hover:text-purple-500 transition-colors">Privacidad de Datos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
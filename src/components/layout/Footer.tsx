import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPhone, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    const socialLinks = [
        { icon: faFacebook, url: "https://www.facebook.com/profile.php?id=61586504782161" },
        { icon: faInstagram, url: "https://www.instagram.com/tu_sitioweb.oficial" },
        { icon: faTiktok, url: "https://www.tiktok.com/@tu.sitioweb" }
    ];

    return (
        <footer id="contacto" className="text-white pt-32 pb-12 relative overflow-hidden">
            {/* Visual distinction: Background and separator */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl -z-10"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 gap-16 mb-24 relative z-10">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center glow-purple">
                            <FontAwesomeIcon icon={faCode} className="text-white text-xl" />
                        </div>
                        <span className="text-3xl font-display font-bold">Tu <span className="text-purple-500">SitioWeb</span></span>
                    </div>
                    <p className="text-gray-400 max-w-md mb-10 text-lg leading-relaxed">
                        Ingeniería digital disruptiva para marcas que no temen al futuro. Construimos el estándar de la web moderna.
                    </p>
                    <div className="flex gap-6">
                        {socialLinks.map((social, i) => (
                            <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-purple-600 transition-all group">
                                <FontAwesomeIcon icon={social.icon} className="text-2xl text-white group-hover:scale-110 transition-all" />
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-display font-bold mb-8 text-purple-500 uppercase tracking-widest">Sistemas</h4>
                    <ul className="space-y-5 text-gray-400 text-lg">
                        <li><a href="#servicios" className="hover:text-white transition-colors">Módulos</a></li>
                        <li><a href="#proceso" className="hover:text-white transition-colors">Pipeline</a></li>
                        <li><a href="#planes" className="hover:text-white transition-colors">Inversión</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Protocolo Inicio</a></li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <h4 className="text-xl font-display font-bold mb-8 text-purple-500 uppercase tracking-widest">Contacto</h4>
                    <ul className="space-y-5 text-gray-400 text-lg">
                        <li className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faPhone} className="text-xl text-purple-500" />
                            <span>+51 917 794 918</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faEnvelope} className="text-xl text-purple-500" />
                            <a href="mailto:contacto@tu-sitioweb.com" className="hover:text-white transition-colors whitespace-nowrap">contacto@tu-sitioweb.com</a>
                        </li>
                        <li className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faGlobe} className="text-xl text-purple-500" />
                            <span>Cyber-Lima, PE</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 pt-12 border-t border-purple-500/10 text-center text-gray-600 font-mono text-sm relative z-10">
                <p>© {new Date().getFullYear()} TU SITIO WEB // SYSTEM_VERSION: 2.0.4 // ENCRYPTED_BY_CASTOR</p>
            </div>
        </footer>
    );
};

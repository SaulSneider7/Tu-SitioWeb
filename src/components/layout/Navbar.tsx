import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const NavLink = ({ href, children, className = "", onClick }: { href: string, children: ReactNode, className?: string, onClick?: () => void }) => {
        if (href.startsWith("#") && isHomePage) {
            return <a href={href} className={className} onClick={onClick}>{children}</a>;
        }
        if (href.startsWith("#") && !isHomePage) {
            return <Link to={`/${href}`} className={className} onClick={onClick}>{children}</Link>;
        }
        return <Link to={href} className={className} onClick={onClick}>{children}</Link>;
    };

    return (
        <nav className="fixed top-[96px] md:top-[48px] left-0 right-0 z-50 bg-dark-purple/60 backdrop-blur-xl border-b border-purple-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo_oscuro_tu-sitioweb.png"
                            alt="Tu SitioWeb"
                            className="h-20 w-auto object-contain"
                            referrerPolicy="no-referrer"
                            draggable={false}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                        <NavLink href="#servicios" className="hover:text-purple-500 transition-colors uppercase tracking-widest">Servicios</NavLink>
                        <Link to="/portafolio" className={`hover:text-purple-500 transition-colors uppercase tracking-widest ${location.pathname === '/portafolio' ? 'text-purple-500' : ''}`}>Portafolio</Link>
                        <NavLink href="#proceso" className="hover:text-purple-500 transition-colors uppercase tracking-widest">Proceso</NavLink>
                        <NavLink href="#planes" className="hover:text-purple-500 transition-colors uppercase tracking-widest">Planes</NavLink>

                        <a href="#contacto" className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-all glow-purple font-bold">Asesoría Gratis</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-dark-purple/95 backdrop-blur-2xl border-b border-purple-500/20 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center text-center">
                            <NavLink href="#servicios" className="text-gray-300 hover:text-purple-500 transition-colors uppercase tracking-widest text-lg py-2 w-full" onClick={() => setIsOpen(false)}>Servicios</NavLink>
                            <Link to="/portafolio" className={`text-gray-300 hover:text-purple-500 transition-colors uppercase tracking-widest text-lg py-2 w-full ${location.pathname === '/portafolio' ? 'text-purple-500' : ''}`} onClick={() => setIsOpen(false)}>Portafolio</Link>
                            <NavLink href="#proceso" className="text-gray-300 hover:text-purple-500 transition-colors uppercase tracking-widest text-lg py-2 w-full" onClick={() => setIsOpen(false)}>Proceso</NavLink>
                            <NavLink href="#planes" className="text-gray-300 hover:text-purple-500 transition-colors uppercase tracking-widest text-lg py-2 w-full" onClick={() => setIsOpen(false)}>Planes</NavLink>

                            <div className="pt-4 w-full">
                                <a
                                    href="#contacto"
                                    className="block bg-purple-600 text-white px-6 py-4 rounded-xl hover:bg-purple-700 transition-all glow-purple font-bold text-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Asesoría Gratis
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => setIsOpen(false), [location]);

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; 
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const NavLink = ({ href, children, className = "" }: { href: string, children: ReactNode, className?: string }) => {
        // Mantenemos el color blanco fijo 'text-white' y solo cambiamos a morado en hover
        const baseClass = `transition-all duration-300 text-white hover:text-purple-400 uppercase tracking-widest text-xs font-bold ${className}`;

        if (href.startsWith("#")) {
            return (
                <button 
                    onClick={() => isHomePage ? scrollToSection(href) : window.location.href = `/${href}`}
                    className={baseClass}
                >
                    {children}
                </button>
            );
        }

        return (
            <Link to={href} className={baseClass}>
                {children}
            </Link>
        );
    };

    return (
        <header
            className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
                scrolled 
                ? "top-15 bg-dark-purple/90 backdrop-blur-xl border-b border-purple-500/20 py-2" 
                : "top-15 bg-dark-purple/60 backdrop-blur-md py-4"
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    <Link to="/" className="relative z-50 flex items-center group">
                        <img
                            src="/logo_oscuro_tu-sitioweb.png"
                            alt="Logo"
                            className="h-12 md:h-14 w-auto transition-transform group-hover:scale-105"
                        />
                    </Link>

                    {/* Menú Desktop: Todos los links blancos por defecto */}
                    <ul className="hidden lg:flex items-center gap-8">
                        <li><NavLink className="cursor-pointer" href="#servicios">Servicios</NavLink></li>
                        <li><NavLink className="cursor-pointer" href="/portafolio">Portafolio</NavLink></li>
                        <li><NavLink className="cursor-pointer" href="/blog">Blog</NavLink></li>
                        <li><NavLink className="cursor-pointer" href="#planes">Planes</NavLink></li>
                        <li><NavLink className="cursor-pointer" href="#servicios-adicionales">Servicios Adicionales</NavLink></li>
                        <li>
                            <button
                                onClick={() => scrollToSection("#contacto")}
                                className="cursor-pointer ml-4 bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] font-bold text-sm"
                            >
                                Asesoría Gratis
                            </button>
                        </li>
                    </ul>

                    {/* Botón Móvil */}
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden relative z-50 text-white p-2">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
                    </button>
                </div>
            </nav>

            {/* Menú Móvil */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-dark-purple/95 backdrop-blur-3xl lg:hidden flex flex-col items-center justify-center z-40"
                    >
                        <ul className="flex flex-col gap-10 text-center">
                            <li><NavLink href="#servicios" className="text-2xl">Servicios</NavLink></li>
                            <li><NavLink href="/portafolio" className="text-2xl">Portafolio</NavLink></li>
                            <li><NavLink href="/blog" className="text-2xl">Blog</NavLink></li>
                            <li><NavLink href="#planes" className="text-2xl">Planes</NavLink></li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("#contacto")}
                                    className="bg-purple-600 text-white px-10 py-4 rounded-full font-bold text-xl"
                                >
                                    Asesoría Gratis
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
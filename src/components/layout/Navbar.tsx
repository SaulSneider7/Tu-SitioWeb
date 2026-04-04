import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { type ReactNode, useState, useEffect, type MouseEvent } from "react";
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
    const handleClick = (e: MouseEvent) => {
      if (href.startsWith("#")) {
        if (isHomePage) {
          e.preventDefault();
          const id = href.replace("#", "");
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
          if (onClick) onClick();
        } else {
          // If not on home page, Link will handle navigation to home + hash
          if (onClick) onClick();
        }
      } else {
        if (onClick) onClick();
      }
    };

    if (href.startsWith("#")) {
      if (isHomePage) {
        return (
          <a href={href} className={className} onClick={handleClick}>
            {children}
          </a>
        );
      }
      return <Link to={`/${href}`} className={className} onClick={onClick}>{children}</Link>;
    }
    return <Link to={href} className={className} onClick={onClick}>{children}</Link>;
  };

  return (
    <nav className="fixed top-[96px] md:top-[48px] left-0 right-0 z-50 bg-deep-black/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
              <FontAwesomeIcon icon={faCode} className="text-white text-sm" />
            </div>
            <span className="text-xl font-display font-bold text-white tracking-tight">Tu<span className="text-purple-500">SitioWeb</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold text-white/50 uppercase tracking-[0.2em]">
            <NavLink href="#servicios" className="hover:text-white transition-colors">Servicios</NavLink>
            <Link to="/portafolio" className={`hover:text-white transition-colors ${location.pathname === '/portafolio' ? 'text-white' : ''}`}>Portafolio</Link>
            <Link to="/blog" className={`hover:text-white transition-colors ${location.pathname.startsWith('/blog') ? 'text-white' : ''}`}>Blog</Link>
            <NavLink href="#proceso" className="hover:text-white transition-colors">Proceso</NavLink>
            <NavLink href="#planes" className="hover:text-white transition-colors">Planes</NavLink>
            
            <NavLink href="#contacto" className="bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition-all font-bold tracking-normal uppercase text-[10px] shadow-lg shadow-purple-500/20">Asesoría Gratis</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
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
            className="md:hidden bg-deep-black border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center text-center">
              <NavLink href="#servicios" className="text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold py-2 w-full" onClick={() => setIsOpen(false)}>Servicios</NavLink>
              <Link to="/portafolio" className={`text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold py-2 w-full ${location.pathname === '/portafolio' ? 'text-white' : ''}`} onClick={() => setIsOpen(false)}>Portafolio</Link>
              <Link to="/blog" className={`text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold py-2 w-full ${location.pathname.startsWith('/blog') ? 'text-white' : ''}`} onClick={() => setIsOpen(false)}>Blog</Link>
              <NavLink href="#proceso" className="text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold py-2 w-full" onClick={() => setIsOpen(false)}>Proceso</NavLink>
              <NavLink href="#planes" className="text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold py-2 w-full" onClick={() => setIsOpen(false)}>Planes</NavLink>
              
              <div className="pt-4 w-full">
                <NavLink 
                  href="#contacto" 
                  className="block bg-purple-600 text-white px-6 py-4 rounded-xl hover:bg-purple-700 transition-all font-bold text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Asesoría Gratis
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

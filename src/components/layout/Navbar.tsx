import { whatsapp } from '../site/data';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Arrow, Brand } from '../site/Shared';
export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container navigation">
      <Link to="/" aria-label="Tu SitioWeb, inicio"><Brand /></Link>
      <button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>{open ? 'Cerrar ×' : 'Menú ☰'}</button>
      <nav id="main-nav" aria-label="Navegación principal" className={open ? 'nav-links is-open' : 'nav-links'} onKeyDown={e => { if (e.key === 'Escape') setOpen(false); }}>
        <Link to="/#servicios" onClick={() => setOpen(false)}>Servicios</Link>
        <Link to="/#sistemas" onClick={() => setOpen(false)}>Sistemas a medida</Link>
        <NavLink to="/portafolio">Proyectos</NavLink>
        
        <Link to="/#planes" onClick={() => setOpen(false)}>Planes</Link>
        <NavLink to="/blog">Blog</NavLink>
        <a className="button small" href={whatsapp('Hola, me gustaría conversar sobre un proyecto web.')} target="_blank" rel="noopener noreferrer">Hablemos <Arrow /></a>
      </nav>
    </div>
  </header>;
}



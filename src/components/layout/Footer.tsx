import { whatsapp } from '../site/data';
import { Link } from 'react-router-dom';
import { Arrow, Brand } from '../site/Shared';
export function Footer() {
  return <footer id="contacto" className="site-footer"><div className="container">
    <div className="contact-banner"><div><p className="eyebrow">TU PRÓXIMO PASO EMPIEZA AQUÍ</p><h2>Hagamos algo<br /><span>que marque la diferencia.</span></h2></div><div className="contact-visual"><img className="contact-mascot" src="/img/castor_hero.png" alt="" width="408" height="612" loading="lazy" decoding="async" /><a className="contact-circle" href={whatsapp('Hola, quiero empezar mi proyecto con Tu SitioWeb.')} target="_blank" rel="noopener noreferrer" aria-label="Conversemos sobre tu proyecto por WhatsApp"><Arrow diagonal /><span>Conversemos</span></a></div></div>
    <div className="footer-grid"><div><Link to="/" aria-label="Tu SitioWeb, inicio"><Brand /></Link><p>Páginas web y sistemas a medida.<br />Tecnología que trabaja contigo.</p><span className="location-label">Lima, Perú · Trabajamos sin fronteras</span></div>
      <div><h3>Explora</h3><Link to="/#servicios">Servicios</Link><Link to="/#sistemas">Sistemas a medida</Link><Link to="/portafolio">Proyectos</Link><Link to="/#planes">Planes y precios</Link><Link to="/blog">Blog</Link></div>
      <div><h3>Hablemos</h3><a href="mailto:contacto@tu-sitioweb.com">contacto@tu-sitioweb.com</a><a href="tel:+51917794918">+51 917 794 918</a><a href={whatsapp('Hola, quisiera más información.')} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp ↗</a></div>
      <div><h3>Conectemos</h3><a href="https://www.instagram.com/tu_sitioweb.oficial" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://www.facebook.com/profile.php?id=61586504782161" target="_blank" rel="noopener noreferrer">Facebook ↗</a><a href="https://www.tiktok.com/@tu.sitioweb" target="_blank" rel="noopener noreferrer">TikTok ↗</a></div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Tu SitioWeb. Todos los derechos reservados.</span><nav className="footer-legal" aria-label="Información legal"><Link to="/privacidad">Política de privacidad</Link><Link to="/terminos">Términos y condiciones</Link><Link to="/cookies">Política de cookies</Link><Link to="/devoluciones">Devoluciones</Link></nav><a href="#main-content">Volver arriba ↑</a></div>
  </div></footer>;
}




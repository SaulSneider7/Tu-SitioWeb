import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { SEO } from './SEO';
export function LegalPage({ title, description, path, children }: { title: string; description: string; path: string; children: ReactNode }) {
  return <article className="legal-page container">
    <SEO title={title + ' | Tu SitioWeb'} description={description} path={path} />
    <p className="eyebrow">INFORMACIÓN Y CONDICIONES</p>
    <h1>{title}</h1>
    <p className="legal-updated">Última actualización: <time dateTime="2026-10-28">28 de octubre de 2026</time></p>
    <nav className="legal-navigation" aria-label="Políticas del sitio"><NavLink to="/privacidad">Privacidad</NavLink><NavLink to="/terminos">Términos y condiciones</NavLink><NavLink to="/cookies">Cookies</NavLink><NavLink to="/devoluciones">Devoluciones</NavLink></nav>
    {children}
    <aside className="legal-contact"><h2>¿Necesitas más información?</h2><p>Escríbenos a <a href="mailto:contacto@tu-sitioweb.com">contacto@tu-sitioweb.com</a> indicando tu consulta y, si corresponde, la referencia de tu proyecto.</p></aside>
  </article>;
}

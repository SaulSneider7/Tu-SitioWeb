import { Link, useLocation } from 'react-router-dom';
import { SEO } from '../components/site/SEO';
import { Arrow } from '../components/site/Shared';
export function NotFoundPage() {
  const { pathname } = useLocation();
  return <section className="not-found container"><SEO title="Página no encontrada | Tu SitioWeb" description="Esta página no está disponible. Explora nuestros servicios, proyectos y artículos." path={pathname} noindex /><p className="eyebrow">ERROR 404</p><h1>Este camino<br /><span>no lleva a una página.</span></h1><p>El enlace puede haber cambiado. Volvamos a un buen punto de partida.</p><Link to="/" className="button">Volver al inicio <Arrow /></Link></section>;
}

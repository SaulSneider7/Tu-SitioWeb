import { projects, siteUrl } from '../components/site/data';
import { ProjectGrid } from '../components/site/Shared';
import { SEO } from '../components/site/SEO';
export function PortfolioPage() {
  return <>
    <SEO title="Proyectos de diseño web en Perú | Tu SitioWeb" description="Explora nuestros proyectos de diseño y desarrollo web para empresas, negocios locales y marcas creativas en Perú." path="/portafolio" schema={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Proyectos de Tu SitioWeb', url: siteUrl + '/portafolio', mainEntity: { '@type': 'ItemList', itemListElement: projects.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.title, url: p.link })) } }} />
    <section className="page-intro container"><p className="eyebrow">NUESTRO PORTAFOLIO</p><h1>Ideas que se convierten<br /><span>en experiencias.</span></h1><p>Negocios distintos. Un mismo cuidado por los detalles. Descubre el diseño y desarrollo detrás de cada proyecto.</p><div className="page-rule"><span>PROYECTOS SELECCIONADOS</span><span>{projects.length.toString().padStart(2, '0')} PROYECTOS ↘</span></div></section>
    <section className="container portfolio-list" aria-label="Proyectos de diseño web"><ProjectGrid /></section>
  </>;
}



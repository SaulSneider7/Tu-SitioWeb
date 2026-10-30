import { Link } from 'react-router-dom';
import { projects, posts } from './data';
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}</svg>;
}
export function Brand() {
  return <img className="brand-logo" src="/logo_claro_tu-sitioweb.png" alt="Tu SitioWeb — diseño y desarrollo web" width="1100" height="225" />;
}
export function ProjectGrid({ limit }: { limit?: number }) {
  return <div className="project-grid">{projects.slice(0, limit).map((project, index) => <a className="project-card" href={project.link} target="_blank" rel="noopener noreferrer" key={project.title}>
    <div className={'project-image project-color-' + index % 4}><img src={project.image} alt={'Diseño de la página web de ' + project.title} loading="lazy" width="900" height="600" /><span className="project-open"><Arrow diagonal /></span></div>
    <div className="project-caption"><div><p className="eyebrow">{project.category}</p><h3>{project.title}</h3></div><Arrow diagonal /></div>
    <p className="project-description">{project.description}</p>
  </a>)}</div>;
}
export function BlogGrid({ limit, items = posts }: { limit?: number; items?: typeof posts }) {
  return <div className="blog-grid">{items.slice(0, limit).map(post => <article className="blog-card" key={post.id}>
    <Link to={'/blog/' + post.id} className="blog-image" tabIndex={-1} aria-hidden="true"><img src={post.image} alt="" width="640" height="400" loading="lazy" /></Link>
    <div className="blog-meta"><span>{post.category}</span><time dateTime={post.dateIso}>{post.date}</time></div>
    <h3><Link to={'/blog/' + post.id}>{post.title}</Link></h3>
    <p className="blog-excerpt">{post.excerpt}</p>
    <p className="blog-reading-time">{Math.max(1, Math.ceil(post.content.split(/\s+/).length / 200))} min de lectura</p>
    <Link to={'/blog/' + post.id} className="text-link" aria-label={'Leer: ' + post.title}>Leer artículo <Arrow /></Link>
  </article>)}</div>;
}


import { posts, siteUrl, whatsapp } from '../components/site/data';
import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import { Arrow, BlogGrid } from '../components/site/Shared';
import { SEO } from '../components/site/SEO';
import { NotFoundPage } from './NotFoundPage';
const slug = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export function BlogPostPage() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  if (!post) return <NotFoundPage />;
  const headings = [...post.content.matchAll(/^## (.+)$/gm)].map(match => match[1]);
  const minutes = Math.max(1, Math.ceil(post.content.split(/\s+/).length / 200));
  const related = posts.filter(item => item.id !== id).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 3);
  const url = siteUrl + '/blog/' + post.id;
  return <>
    <SEO title={post.title + ' | Tu SitioWeb'} description={post.excerpt} path={'/blog/' + post.id} image={post.image} article schema={{ '@context': 'https://schema.org', '@graph': [{ '@type': 'BlogPosting', headline: post.title, description: post.excerpt, image: new URL(post.image, siteUrl).href, datePublished: post.dateIso, dateModified: post.dateModified, mainEntityOfPage: url, inLanguage: 'es-PE', author: { '@type': post.author === 'Equipo Tu SitioWeb' ? 'Organization' : 'Person', name: post.author }, publisher: { '@type': 'Organization', name: 'Tu SitioWeb', logo: { '@type': 'ImageObject', url: siteUrl + '/img/logos/logo_claro_tu-sitioweb.png' } } }, { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: siteUrl + '/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: siteUrl + '/blog' }, { '@type': 'ListItem', position: 3, name: post.title, item: url }] }] }} />
    <meta property="article:published_time" content={post.dateIso} /><meta property="article:modified_time" content={post.dateModified} />
    <article className="article-page container">
      <nav className="breadcrumbs" aria-label="Ruta de navegación"><Link to="/">Inicio</Link><span>/</span><Link to="/blog">Blog</Link><span>/</span><span aria-current="page">{post.title}</span></nav>
      <header><p className="eyebrow">{post.category}</p><h1>{post.title}</h1><div className="article-byline"><span>Por {post.author}</span><time dateTime={post.dateIso}>Publicado: {new Date(post.dateIso).toLocaleDateString('es-PE', { timeZone: 'America/Lima' })}</time><time dateTime={post.dateModified}>Actualizado: {new Date(post.dateModified).toLocaleDateString('es-PE', { timeZone: 'America/Lima' })}</time><span>{minutes} min de lectura</span></div><p className="article-excerpt">{post.excerpt}</p><img className="article-cover" src={post.image} alt={post.title} width="1200" height="675" fetchPriority="high" /></header>
      <nav className="article-toc" aria-label="Contenido del artículo"><p className="eyebrow">EN ESTA GUÍA</p><ol>{headings.map(heading => <li key={heading}><a href={'#' + slug(heading)}>{heading}</a></li>)}</ol></nav>
      <div className="article-body"><Markdown components={{ h1: ({ children }) => <h2>{children}</h2>, h2: ({ children }) => <h2 id={slug(String(children))}>{children}</h2>, a: ({ href, children }) => href?.startsWith('/') ? <Link to={href}>{children}</Link> : <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>{children}</a> }}>{post.content}</Markdown></div>
      <aside className="article-contact"><div><p className="eyebrow">DE LA IDEA AL PROYECTO</p><h2>Hablemos de tu negocio.</h2><p>Te ayudamos a definir tu página web o sistema a medida.</p></div><a className="button" href={whatsapp('Hola, leí el artículo "' + post.title + '" y quisiera conversar sobre mi proyecto.')} target="_blank" rel="noopener noreferrer">Consultar mi proyecto <Arrow diagonal /></a></aside>
      <div className="article-end"><Link className="text-link" to="/blog">Volver a todas las guías <Arrow /></Link></div>
    </article>
    <section className="container related-posts"><div className="section-heading"><p className="eyebrow">SIGUE EXPLORANDO</p><h2>También te puede interesar.</h2></div><BlogGrid items={related} /></section>
  </>;
}

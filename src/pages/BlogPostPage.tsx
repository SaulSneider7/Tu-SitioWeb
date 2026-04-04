import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Markdown from "react-markdown";
import { Reveal } from "../components/ui/Reveal";

export const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/data/blog.json")
      .then(res => res.json())
      .then(data => {
        const foundPost = data.find((p: any) => p.id === id);
        setPost(foundPost);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading blog post:", err);
        setLoading(false);
      });
  }, [id]);

  // 1. ESTADO DE CARGA (Para evitar el error de variable no encontrada)
  if (loading) {
    return (
      <div className="pt-32 min-h-screen bg-deep-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  // 2. ESTADO DE ERROR / NO ENCONTRADO
  if (!post) {
    return (
      <div className="pt-32 min-h-screen bg-deep-black flex items-center justify-center text-white px-4 text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Post no encontrado</h1>
          <p className="text-gray-400 mb-8 italic text-sm">Lo sentimos, el artículo que buscas no existe o ha sido movido.</p>
          <Link to="/blog" className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-700 transition-all">
            Volver al Blog
          </Link>
        </div>
      </div>
    );
  }

  // 3. DATOS ESTRUCTURADOS (SEO)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [post.image],
    "datePublished": post.dateIso || post.date,
    "author": [{
        "@type": "Person",
        "name": post.author,
        "url": "https://tu-sitioweb.com/" 
      }],
    "publisher": {
      "@type": "Organization",
      "name": "Tu SitioWeb",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tu-sitioweb.com/logo.png"
      }
    },
    "description": post.excerpt
  };

  return (
    <main className="pt-32 min-h-screen bg-deep-black">
      <Helmet>
        <title>{post.title} | Blog de Diseño Web Perú</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={`https://tu-sitioweb.com/blog/${id}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 pt-20 pb-32">
        <header>
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest hover:text-purple-500 mb-12 group">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al Blog
            </Link>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-4 text-purple-500 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="bg-purple-500/10 px-3 py-1 rounded-full">{post.category}</span>
              <span className="text-white/30 italic">{post.date}</span>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-12 leading-tight">
              {post.title}
            </h1>
          </Reveal>

          <Reveal>
            <figure className="aspect-video rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl bg-white/5">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </figure>
          </Reveal>
        </header>

        <section className="prose prose-invert prose-purple max-w-none prose-lg">
          <div className="text-white/80 leading-relaxed font-light">
            <Markdown 
              components={{
                a: ({node, ...props}) => {
                  const isExternal = props.href?.startsWith('http');
                  return (
                    <a 
                      {...props} 
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "nofollow noopener noreferrer" : undefined}
                      className="text-purple-400 font-bold hover:underline"
                    />
                  );
                }
              }}
            >
              {post.content}
            </Markdown>
          </div>
        </section>

        <footer className="mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-wrap gap-3 mb-12">
            {post.keywords.map((keyword: string, i: number) => (
              <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/40 uppercase font-bold tracking-tighter">
                #{keyword}
              </span>
            ))}
          </div>

          <section className="bg-white/5 rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-3xl">
              {post.author[0]}
            </div>
            <div className="text-center md:text-left">
              <p className="text-white/30 text-[10px] font-bold uppercase mb-1">Experto en Digitalización</p>
              <h4 className="text-white font-bold text-2xl">{post.author}</h4>
              <p className="text-white/50 text-sm mt-2 max-w-md">Especialista en desarrollo de soluciones web de alto rendimiento para el mercado peruano.</p>
            </div>
          </section>
        </footer>
      </article>
    </main>
  );
};
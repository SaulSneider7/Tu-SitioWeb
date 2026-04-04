import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Reveal } from "../components/ui/Reveal";

export const BlogPage = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("/data/blog.json")
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error loading blog posts:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="pt-32 min-h-screen bg-deep-black flex items-center justify-center" aria-live="polite">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        );
    }

    return (
        <main className="pt-32 min-h-screen bg-deep-black">
            <Helmet>
                {/* Título con Keywords de Localidad e Intención */}
                <title>Blog de Tecnología y Diseño Web en Perú | Tu SitioWeb</title>
                <meta name="description" content="Aprende sobre SEO, diseño web profesional y estrategias digitales. Artículos escritos para ayudar a emprendedores peruanos a crecer online." />
                <meta name="keywords" content="blog diseño web peru, consejos seo lima, marketing digital peru, tendencias tecnologia 2026" />
                <link rel="canonical" href="https://tu-sitioweb.com/blog" />

                {/* Open Graph para el listado */}
                <meta property="og:title" content="Blog de Tecnología y Estrategia Digital | Tu SitioWeb" />
                <meta property="og:description" content="Contenido gratuito sobre cómo potenciar tu negocio en el mundo digital." />
                <meta property="og:url" content="https://tu-sitioweb.com/blog" />
            </Helmet>

            <section className="max-w-7xl mx-auto px-4 pt-20 pb-32">
                <header className="text-center mb-24">
                    <Reveal>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
                            Nuestro <span className="text-purple-500">Blog Digital</span>
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="text-white/40 max-w-3xl mx-auto text-xl font-light leading-relaxed">
                            Explora artículos sobre <strong>desarrollo web, posicionamiento SEO y diseño</strong> pensados para el mercado peruano.
                        </p>
                    </Reveal>
                </header>

                {/* SEO Semántico: Usamos un contenedor de sección para el grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12" role="list">
                    {posts.map((post, i) => (
                        <motion.article
                            key={post.id}
                            role="listitem"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group flex flex-col h-full bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                        >
                            {/* Imagen con Alt Text Dinámico y Lazy Loading */}
                            <Link
                                to={`/blog/${post.id}`}
                                className="aspect-video overflow-hidden relative"
                                aria-label={`Leer más sobre ${post.title}`}
                            >
                                <img
                                    src={post.image}
                                    alt={`Portada del artículo: ${post.title}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy" // Mejora la carga inicial (LCP)
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                            </Link>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-white/30 text-[10px] font-bold uppercase tracking-widest mb-4">
                                    <time dateTime={post.dateIso || post.date}>{post.date}</time>
                                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                    <span>Por {post.author}</span>
                                </div>

                                <Link to={`/blog/${post.id}`}>
                                    <h2 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-purple-400 transition-colors leading-tight">
                                        {post.title}
                                    </h2>
                                </Link>

                                <p className="text-white/50 font-light mb-8 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group-hover:text-purple-400 transition-colors"
                                    >
                                        Continuar leyendo
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </main>
    );
};
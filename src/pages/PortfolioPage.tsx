import { Portfolio } from "../components/sections/Portfolio";
import { Reveal } from "../components/ui/Reveal";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export const PortfolioPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Datos estructurados para que Google reconozca tus trabajos como proyectos reales
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Portafolio de Diseño Web en Perú | Tu SitioWeb",
        "description": "Explora nuestro portafolio de páginas web: ecommerce, landing pages y webs corporativas optimizadas para ventas.",
        "url": "https://tu-sitioweb.com/portafolio",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Diseño Web Corporativo"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Tiendas Online / Ecommerce"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Landing Pages de Alta Conversión"
                }
            ]
        }
    };

    return (
        <>
            <Helmet>
                {/* Título: Usamos palabras clave de intención de búsqueda */}
                <title>Portafolio de Diseño Web en Perú | Casos de Éxito</title>
                <meta
                    name="description"
                    content="Proyectos reales de diseño y desarrollo web en Perú. Mira cómo ayudamos a empresas con landing pages y tiendas online que venden más."
                />
                <link rel="canonical" href="https://tu-sitioweb.com/portafolio" />
                
                {/* Meta Keywords (Aunque Google no las usa tanto, otros buscadores sí) */}
                <meta name="keywords" content="diseño web peru, portafolio paginas web, ejemplos landing pages peru, desarrollo web lima" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Portafolio de Proyectos Web | Tu SitioWeb" />
                <meta property="og:description" content="¿Buscas inspiración? Mira nuestros últimos trabajos de diseño web optimizados para el mercado peruano." />
                <meta property="og:image" content="https://tu-sitioweb.com/og-portafolio.jpg" />

                {/* Datos Estructurados JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            <main className="pt-32 min-h-screen bg-dark-purple">
                <article className="max-w-7xl mx-auto px-4 pt-20">
                    {/* H1: Enmarcado en un header para semántica pura */}
                    <header className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-8">
                            Portafolio de <span className="text-purple-500">Diseño Web</span>
                            <br /> 
                            <span className="text-3xl md:text-4xl opacity-90">en Perú y Latinoamérica</span>
                        </h1>

                        <p className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
                            Transformamos ideas en <strong>herramientas de venta digitales</strong>. 
                            Cada proyecto de nuestro portafolio está diseñado con un solo objetivo: 
                            posicionar tu marca y <strong>convertir visitantes en clientes</strong>.
                        </p>
                    </header>

                    <Reveal>
                        {/* La sección de Portfolio debe usar etiquetas <article> o <div> con IDs claros */}
                        <section id="proyectos-web" aria-label="Galería de proyectos realizados">
                            <Portfolio />
                        </section>
                    </Reveal>
                </article>

                {/* CTA con Semántica de Cierre */}
                <Reveal>
                    <section className="py-24 bg-gradient-to-b from-transparent to-purple-900/10 border-t border-white/5">
                        <div className="max-w-4xl mx-auto px-4 text-center">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                                ¿Listo para que tu proyecto <br />
                                <span className="text-purple-400 text-2xl md:text-4xl">sea el próximo caso de éxito?</span>
                            </h2>

                            <p className="text-gray-400 mb-12 text-lg md:text-xl">
                                No solo hacemos webs bonitas, creamos activos digitales que 
                                <strong> posicionan en los primeros lugares de Google</strong>.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a
                                    href="https://wa.me/51917794918?text=Hola,%20quiero%20cotizar%20un%20proyecto%20web"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto bg-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-purple-700 transition-all shadow-xl shadow-purple-600/20"
                                >
                                    Cotizar mi Página Web
                                </a>
                                <span className="text-gray-500 font-medium italic">¡Asesoría 100% gratuita!</span>
                            </div>
                        </div>
                    </section>
                </Reveal>
            </main>
        </>
    );
};
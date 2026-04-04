import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const FAQ = () => {
    const faqs = [
        {
            q: "¿Se pueden hacer cambios después de entregar la página web?",
            a: "Sí. Ofrecemos un plan de mantenimiento mensual por S/50 que incluye cambios ilimitados de mantenimiento, como ajustes de textos, imágenes, precios, colores y actualizaciones técnicas para mantener la web segura y optimizada. Este plan no incluye el desarrollo de nuevas secciones ni funcionalidades complejas. Los cambios se realizan en un plazo de 24 a 72 horas hábiles."
        },
        {
            q: "¿Qué pasa si solo necesito un cambio puntual?",
            a: "También puedes solicitar cambios individuales sin necesidad de un plan mensual. El costo base es desde S/20 por cambio y puede variar dependiendo de la complejidad del requerimiento. El tiempo de atención es de 24 a 72 horas hábiles."
        },
        {
            q: "¿Qué es el dominio?",
            a: "El dominio es el nombre único de tu sitio web en internet (ejemplo: tunegocio.com). Es como tu dirección digital para que los clientes te encuentren. Nosotros ofrecemos el registro de dominio .com por S/100 anuales."
        },
        {
            q: "¿Qué es el hosting?",
            a: "El hosting es el servicio de almacenamiento que permite que tu página web esté disponible en internet las 24 horas del día. Es como el 'alquiler' del espacio digital donde vive tu web. Ofrecemos hosting de alta velocidad por S/150 anuales."
        },
        {
            q: "¿Cuánto tiempo tarda el diseño de una página web profesional?",
            a: "Normalmente entre 5 y 10 días hábiles en Perú, dependiendo del plan y la complejidad. Priorizamos entregas rápidas con tecnología de alto rendimiento para que tu negocio no se detenga."
        },
        {
            q: "¿Necesito conocimientos técnicos para gestionar mi web?",
            a: "No. Como expertos en desarrollo web, nosotros nos encargamos de todo: diseño, arquitectura, hosting y configuración. Tú solo te enfocas en hacer crecer tu negocio."
        },
        {
            q: "¿Cómo ayuda una página web a conseguir clientes en internet?",
            a: "Diseñamos interfaces enfocadas en la conversión. Optimizamos tu web para captar leads mediante botones de WhatsApp y formularios, maximizando el retorno de inversión de tu tráfico digital."
        },
        {
            q: "¿Cuáles son las facilidades de pago para mi proyecto web?",
            a: "Manejamos un sistema de pago fraccionado: un adelanto inicial y el saldo final contra entrega. Aceptamos diversos métodos de pago locales e internacionales para tu comodidad."
        },
        {
            q: "¿Qué incluye exactamente el servicio de creación de páginas web?",
            a: "Incluye diseño web profesional, optimización para dispositivos móviles (Smartphone/Tablet), integración con WhatsApp, seguridad SSL y una arquitectura lista para el posicionamiento en buscadores."
        },
        {
            q: "¿Quién administra la página web después del lanzamiento?",
            a: "Toda web entregada es 100% autogestionable. Te brindamos capacitación o, si prefieres total tranquilidad, ofrecemos planes de mantenimiento web mensual."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // SEO: Generación de JSON-LD para Google FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <section id="faq" className="py-32 relative" aria-labelledby="faq-title">
            {/* Script de Datos Estructurados para Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-20" data-aos="fade-up">
                    <h2 id="faq-title" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        Consultas sobre <span className="text-purple-500">Diseño Web</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Resolvemos tus dudas técnicas para iniciar tu transformación digital hoy mismo.
                    </p>
                </div>

                <div className="space-y-4" role="list">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            role="listitem"
                            className={`rounded-3xl border transition-all duration-300 ${openIndex === i ? 'bg-purple-600/10 border-purple-500/50 shadow-lg shadow-purple-500/5' : 'glass border-white/5 hover:border-white/20'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                aria-expanded={openIndex === i}
                                aria-controls={`faq-answer-${i}`}
                                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                            >
                                <span className="text-lg md:text-xl font-bold text-white pr-8 group-hover:text-purple-400 transition-colors">
                                    {faq.q}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${openIndex === i ? 'bg-purple-600 text-white rotate-180' : 'bg-white/5 text-gray-400'
                                    }`}>
                                    <FontAwesomeIcon icon={openIndex === i ? faMinus : faPlus} aria-hidden="true" />
                                </div>
                            </button>

                            <motion.div
                                id={`faq-answer-${i}`}
                                initial={false}
                                animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-8 pt-0 text-gray-400 leading-relaxed text-lg border-t border-white/5 mt-2">
                                    {faq.a}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
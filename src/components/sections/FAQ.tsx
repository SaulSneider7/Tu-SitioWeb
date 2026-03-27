import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const FAQ = () => {
    const faqs = [
        {
            q: "¿Cuánto tiempo tarda en estar lista mi página web?",
            a: "Normalmente entre 5 y 10 días hábiles, dependiendo del plan y la complejidad. Priorizamos entregas rápidas sin sacrificar calidad."
        },
        {
            q: "¿Necesito tener conocimientos técnicos?",
            a: "No. Nosotros nos encargamos de todo: diseño, desarrollo y configuración. Tú solo te enfocas en tu negocio."
        },
        {
            q: "¿La página web me ayudará a conseguir clientes?",
            a: "Sí, pero siendo claros: una web por sí sola no hace magia. La diseñamos optimizada para convertir visitas en contactos (WhatsApp, redes sociales), pero el resultado también depende de tu tráfico y estrategia."
        },
        {
            q: "¿Puedo pagar en partes?",
            a: "Sí, manejamos un pago inicial y el resto contra entrega. Esto reduce tu riesgo y asegura compromiso de ambas partes."
        },
        {
            q: "¿Qué incluye el servicio?",
            a: "Incluye diseño profesional, adaptación a celulares, integración con WhatsApp, optimización básica y entrega lista para usar."
        },
        {
            q: "¿Después de la entrega, quién administra la página?",
            a: "Tienes dos opciones: Te enseñamos a usarla o podemos gestionarla por ti con un plan de mantenimiento."
        },
        {
            q: "¿Qué pasa si no me gusta el diseño?",
            a: "Trabajamos contigo durante el proceso y hacemos ajustes. Nuestro objetivo es que el resultado represente tu negocio y funcione para vender."
        },
        {
            q: "¿La página es mía o tengo que pagar mensualidad?",
            a: "La página es tuya. No estás atado a nosotros."
        },
        {
            q: "¿Trabajan con cualquier tipo de negocio?",
            a: "Sí, pero obtenemos mejores resultados cuando trabajamos con negocios que realmente buscan crecer y captar clientes online."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-32 relative">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-20" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">Preguntas <span className="text-purple-500">Frecuentes</span></h2>
                    <p className="text-gray-400 text-lg">Despeja tus dudas y comencemos a construir.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-3xl border transition-all duration-300 ${openIndex === i ? 'bg-purple-600/10 border-purple-500/50' : 'glass border-white/5 hover:border-white/20'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-6 md:p-8 flex items-center justify-between text-left"
                            >
                                <span className="text-lg md:text-xl font-bold text-white pr-8">{faq.q}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-purple-600 text-white rotate-180' : 'bg-white/5 text-gray-400'}`}>
                                    <FontAwesomeIcon icon={openIndex === i ? faMinus : faPlus} />
                                </div>
                            </button>

                            <motion.div
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

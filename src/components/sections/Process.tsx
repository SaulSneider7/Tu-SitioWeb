import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faTerminal, faCode, faChartLine, faBolt } from "@fortawesome/free-solid-svg-icons";

export const Process = () => {
  const steps = [
    { 
      id: "01", 
      title: "Consultoría Inicial", 
      desc: "Asesoría gratuita en Perú para definir los objetivos y el ADN de tu sitio web.",
      icon: faComment,
      color: "from-blue-500 to-cyan-400"
    },
    { 
      id: "02", 
      title: "Planificación Técnica", 
      desc: "Diseño de la arquitectura web y presupuesto optimizado según tus necesidades.",
      icon: faTerminal,
      color: "from-purple-500 to-pink-500"
    },
    { 
      id: "03", 
      title: "Desarrollo de Código", 
      desc: "Programación de alto nivel con tecnologías modernas y revisiones constantes.",
      icon: faCode,
      color: "from-orange-500 to-yellow-500"
    },
    { 
      id: "04", 
      title: "Control de Calidad", 
      desc: "Validación final y ajustes de precisión para garantizar una web perfecta.",
      icon: faChartLine,
      color: "from-green-500 to-emerald-400"
    },
    { 
      id: "05", 
      title: "Lanzamiento y Entrega", 
      desc: "Despliegue final a producción y entrega de todos tus activos digitales.",
      icon: faBolt,
      color: "from-purple-600 to-blue-600"
    }
  ];

  return (
    <section id="proceso" className="py-32 tech-grid relative" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* SEO: Título con palabras clave de metodología */}
        <div className="text-center mb-24" data-aos="fade-up">
          <h2 id="process-title" className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Metodología de <span className="text-purple-500">Desarrollo</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Un flujo de trabajo profesional diseñado para crear <strong>páginas web exitosas</strong> con la máxima eficiencia.
          </p>
        </div>
        
        {/* Contenedor de pasos con marcado ordenado */}
        <div className="grid lg:grid-cols-5 gap-6 relative">
          {/* Línea decorativa - aria-hidden para que Google la ignore */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 -translate-y-1/2" aria-hidden="true"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10"
              // Usamos article para que Google indexe cada paso como parte de la metodología
              role="listitem"
            >
              <div className="p-8 rounded-3xl glass border-purple-500/20 hover:border-purple-500/50 transition-all group h-full flex flex-col items-center text-center">
                
                {/* Icono decorativo */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-[2px] mb-8 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform`} aria-hidden="true">
                  <div className="w-full h-full bg-black rounded-[calc(1rem-2px)] flex items-center justify-center">
                    <FontAwesomeIcon icon={step.icon} className="text-2xl text-white" />
                  </div>
                </div>

                {/* ID del paso (visual) */}
                <span className="text-4xl font-display font-black text-purple-500/60 mb-4 group-hover:text-purple-500/90 transition-colors select-none">
                  {step.id}
                </span>

                {/* SEO: H3 para cada etapa del proceso */}
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
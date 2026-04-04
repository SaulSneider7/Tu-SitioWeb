import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faGlobe, faShieldAlt, faCode } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  const services = [
    { 
      icon: faLayerGroup, 
      title: "Landing Pages de Venta", 
      desc: "Interfaces de alta conversión con arquitectura optimizada para captar clientes en el mercado peruano." 
    },
    { 
      icon: faGlobe, 
      title: "Sitios Web Escalables", 
      desc: "Ecosistemas digitales con integración de APIs, ideales para negocios que buscan crecimiento constante." 
    },
    { 
      icon: faShieldAlt, 
      title: "Webs Corporativas", 
      desc: "Infraestructuras empresariales con alta seguridad, rendimiento premium y diseño de marca personalizado." 
    },
    { 
      icon: faCode, 
      title: "Desarrollo a Medida", 
      desc: "Sistemas web complejos, automatizaciones y backend robusto para soluciones digitales únicas." 
    }
  ];

  return (
    <section id="servicios" className="py-32 relative overflow-hidden" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Encabezado de Sección Optimizado */}
        <div className="text-center mb-24" data-aos="fade-up">
          <h2 id="services-title" className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Especialistas en <span className="text-purple-500">Desarrollo Web</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Ofrecemos soluciones digitales de alto impacto en <strong>Perú</strong>, utilizando tecnología de vanguardia para cada etapa de tu negocio.
          </p>
        </div>

        {/* Grilla de Servicios con Marcado Semántico */}
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.article 
              key={i}
              whileHover={{ y: -15, backgroundColor: "rgba(147, 51, 234, 0.1)" }}
              className="p-10 rounded-[2rem] glass border-purple-500/10 transition-all group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Contenedor de Icono - Aria hidden para no confundir lectores de pantalla */}
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 transition-all shadow-lg shadow-purple-500/5" aria-hidden="true">
                <FontAwesomeIcon icon={s.icon} className="text-2xl text-purple-400 group-hover:text-white" />
              </div>

              {/* Título de servicio como H3 para jerarquía lógica */}
              <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                {s.title}
              </h3>

              {/* Descripción con texto equilibrado */}
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {s.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Decoración de fondo para profundidad visual (no afecta SEO) */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};
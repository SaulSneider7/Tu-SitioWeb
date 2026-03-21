import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export const Portfolio = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/projects.json")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="portafolio" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="portafolio" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Proyectos <span className="text-purple-500">Destacados</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Una muestra de nuestra ingeniería digital en acción.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-[2.5rem] overflow-hidden border border-purple-500/20 glass"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-purple via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <p className="text-purple-400 font-mono text-sm mb-2 uppercase tracking-widest">{p.category}</p>
                <h3 className="text-2xl font-display font-bold text-white mb-6">{p.title}</h3>
                <a href={p.link} className="inline-flex items-center gap-2 text-white font-bold hover:text-purple-500 transition-colors">
                  Ver Detalles <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

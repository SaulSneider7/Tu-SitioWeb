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
      <section id="portafolio" className="py-32 relative overflow-hidden bg-deep-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="portafolio" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-32">
          <span className="section-label mx-auto">Portafolio</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">Proyectos <span className="text-purple-500">Destacados</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-light">Una muestra de nuestra ingeniería digital en acción.</p>
        </div>

        <div className="space-y-32">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 group relative">
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <a href={p.link} className="bg-purple-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-purple-700 transition-all flex items-center gap-2">
                      Ver Proyecto <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
                    </a>
                  </div>
                </div>
                {/* Decorative element */}
                <div className={`absolute -z-10 w-full h-full bg-purple-500/10 blur-3xl rounded-full top-0 ${i % 2 === 0 ? '-left-10' : '-right-10'}`}></div>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <span className="text-xs text-purple-500 font-bold uppercase tracking-[0.3em] mb-3 block">{p.category}</span>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">{p.title}</h3>
                </div>
                
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {p.keywords?.map((keyword: string, kidx: number) => (
                    <span key={kidx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/40 uppercase tracking-widest font-medium">
                      {keyword}
                    </span>
                  ))}
                </div>

                <div className="pt-8">
                  <a href={p.link} className="inline-flex items-center gap-3 text-white text-sm font-bold hover:text-purple-500 transition-colors uppercase tracking-[0.2em] group">
                    Explorar Detalles 
                    <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-purple-500 transition-all"></div>
                    <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

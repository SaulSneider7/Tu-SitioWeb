import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCheckCircle, 
  faChevronRight, 
  faMicrochip, 
  faArrowRight, 
  faShoppingBag, 
  faDatabase, 
  faMobileAlt, 
  faWrench 
} from "@fortawesome/free-solid-svg-icons";
import pricingConfig from "../../pricing-config.json";

export const Pricing = () => {
  const { plans, discount } = pricingConfig;
  const discountFactor = discount.enabled ? (1 - discount.percentage / 100) : 1;

  return (
    <section id="planes" className="py-32 relative bg-deep-black" aria-labelledby="pricing-title">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* SEO: Encabezado con Keyword Principal */}
        <div className="text-center mb-24" data-aos="fade-up">
          <span className="section-label mx-auto">Inversión Digital</span>
          <h2 id="pricing-title" className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Planes de <span className="text-purple-500">Diseño Web</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-light">
            Soluciones escalables y <strong>precios competitivos en Perú</strong> para potenciar tu presencia online.
          </p>
        </div>

        {/* Grilla de Planes - Usamos 'article' para cada plan */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {plans.map((plan, i) => {
            const discountedPrice = Math.floor(plan.originalPrice * discountFactor);
            return (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-10 rounded-3xl glass-card relative overflow-hidden flex flex-col ${plan.popular ? 'border-purple-500/50 glow-purple shadow-2xl shadow-purple-500/10' : 'border-white/5'}`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest z-10">
                    Más Elegido
                  </div>
                )}

                <header>
                  <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-tight">{plan.name}</h3>
                  <p className="text-white/40 text-xs mb-8 font-light leading-relaxed">{plan.desc}</p>
                </header>
                
                <div className="flex flex-col mb-10">
                  {discount.enabled ? (
                    <>
                      <div className="flex items-center gap-2 mb-1" aria-hidden="true">
                        <span className="text-white/30 line-through text-sm font-light">S/{plan.originalPrice}</span>
                        <span className="text-purple-400 text-[10px] font-bold">-{discount.percentage}% OFF</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-display font-bold text-white tracking-tighter">S/{discountedPrice}</span>
                        <span className="text-white/40 text-xs font-light">Pago único</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-display font-bold text-white tracking-tighter">S/{plan.originalPrice}</span>
                      <span className="text-white/40 text-xs font-light">Pago único</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-12 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-white/60">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[10px] text-purple-500 mt-1" aria-hidden="true" />
                      <span className="text-xs font-light leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <footer>
                  <a 
                    href={`https://wa.me/51917794918?text=Hola,%20estoy%20interesado%20en%20el%20plan%20${plan.name}${discount.enabled ? `%20con%20la%20oferta%20del%20${discount.percentage}%25` : ''}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contratar el plan ${plan.name} de diseño web`}
                    className={`w-full py-4 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 ${plan.popular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
                  >
                    Iniciar Proyecto <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" aria-hidden="true" />
                  </a>
                </footer>
              </motion.article>
            );
          })}
        </div>
        
        {/* Sección de Soluciones Complejas */}
        <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-y border-white/5 rounded-[3rem] overflow-hidden px-8 md:px-16" aria-labelledby="custom-projects">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div data-aos="fade-right">
                <div className="inline-flex items-center gap-2 text-purple-400 mb-2">
                  <FontAwesomeIcon icon={faMicrochip} className="w-5 h-5" aria-hidden="true" />
                  <span className="font-bold uppercase tracking-wide text-[10px]">Software a Medida</span>
                </div>
                <h2 id="custom-projects" className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Desarrollo de <span className="text-purple-500">Sistemas Avanzados</span>
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed font-light">
                  Creamos <strong>tiendas virtuales con pasarelas de pago</strong>, sistemas SaaS, y aplicaciones web de alto rendimiento. Si buscas una solución personalizada en Perú, tenemos la tecnología.
                </p>
                <a href="https://wa.me/51917794918?text=Hola,%20necesito%20cotizar%20un%20proyecto%20a%20medida."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar para cotizar proyectos web a medida"
                  className="inline-flex items-center gap-2 text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition-all font-bold text-sm">
                  Solicitar Cotización Personalizada
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>

              {/* Cards de Servicios Avanzados */}
              <div className="relative" data-aos="fade-left">
                <div className="absolute inset-0 bg-purple-600/10 blur-[60px] rounded-full" aria-hidden="true"></div>
                <div className="glass-panel p-8 rounded-2xl relative border border-white/10 bg-black/20">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                      <FontAwesomeIcon icon={faShoppingBag} className="text-purple-400 w-6 h-6" aria-hidden="true" />
                      <div>
                        <div className="font-bold text-white text-sm">E-commerce Profesional</div>
                        <div className="text-[10px] text-gray-500">Ventas online 24/7</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                      <FontAwesomeIcon icon={faDatabase} className="text-blue-400 w-6 h-6" aria-hidden="true" />
                      <div>
                        <div className="font-bold text-white text-sm">Sistemas de Gestión</div>
                        <div className="text-[10px] text-gray-500">Automatización de procesos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan de Mantenimiento Web */}
            <article className="glass-panel p-8 md:p-12 rounded-[2rem] border border-purple-500/30 bg-purple-900/10" data-aos="zoom-in">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <FontAwesomeIcon icon={faWrench} className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Mantenimiento y Soporte Web
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 font-light">
                      Seguridad y actualizaciones constantes para tu tranquilidad.
                    </p>
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <div className="text-4xl font-bold text-white">S/ 50 <span className="text-sm text-gray-500 font-normal">/mes</span></div>
                  <div className="text-[10px] text-green-400 font-bold uppercase tracking-widest mt-1">Soporte Técnico Especializado</div>
                </div>

                <a href="https://wa.me/51917794918?text=Hola,%20quiero%20el%20plan%20de%20mantenimiento%20mensual."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suscribirse al plan de mantenimiento web"
                  className="bg-white text-purple-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition-all shadow-lg w-full md:w-auto">
                  Suscribirme al Plan
                </a>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
};
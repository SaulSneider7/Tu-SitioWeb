import { ClientCarousel } from '../components/site/ClientCarousel';
import { TechnologyOrbit } from '../components/site/TechnologyOrbit';
import { CustomSystems } from '../components/sections/CustomSystems';
import { whatsapp } from '../components/site/data';
import { Link } from 'react-router-dom';
import { useCampaign } from '../components/site/campaign-context';
import { campaignPrice } from '../lib/campaign';
import { BetterProposal } from '../components/sections/BetterProposal';
import pricing from '../pricing-config.json';
import { Arrow, BlogGrid, ProjectGrid } from '../components/site/Shared';
import { SEO } from '../components/site/SEO';

const services = [
  { number: '01', icon: '↗', title: 'Diseño y desarrollo web', text: 'Tu marca, bien representada. Páginas rápidas, intuitivas y adaptadas a cada pantalla.', tags: 'Web corporativa · Landing pages' },
  { number: '02', icon: '⌕', title: 'SEO y presencia digital', text: 'Una base sólida para que te encuentren. Estructura, contenido y rendimiento pensados para buscadores.', tags: 'SEO técnico · Optimización web' },
  { number: '03', icon: '⌘', title: 'Sistemas a medida', text: 'Desarrollamos software alrededor de tus procesos: control, reportes y automatización para tu operación diaria.', tags: 'Gestión · Reportes · Automatización' },
];
const questions = [
  ['¿Desarrollan sistemas a medida para mi negocio?', 'Sí. Hemos desarrollado soluciones para una licorería, Metalmaq y una botica. Definimos contigo procesos, funciones y reportes. Los sistemas se cotizan por separado de los planes web.'],
  ['¿Cuánto cuesta una página web en Perú?', 'Nuestros planes parten de S/ 500. La inversión final depende de las páginas, funciones e integraciones que necesites. Antes de comenzar recibirás una cotización con el alcance definido.'],
  ['¿Cuánto tiempo toma desarrollar mi web?', 'Como referencia, el plan Standard tiene una entrega aproximada de 15 días. El plazo final se acuerda según el alcance y la disponibilidad de textos, imágenes y revisiones.'],
  ['¿Mi página estará preparada para Google?', 'Trabajamos la estructura de encabezados, metadatos, adaptación móvil y rendimiento. El posicionamiento depende también de la competencia, el contenido y el trabajo continuo; no prometemos una posición específica.'],
  ['¿El hosting y el dominio están incluidos?', 'Se cotizan por separado para que tengas claridad sobre los costos de renovación. Puedes ver las tarifas de referencia de hosting y dominio junto a nuestros planes.'],
  ['¿Pueden rediseñar mi página actual?', 'Sí. Revisamos tu sitio, sus contenidos y funcionalidades para proponer un rediseño y planificar la conservación de las URLs importantes.'],
  ['¿Qué sucede después del lanzamiento?', 'Te entregamos el proyecto según el alcance acordado. También puedes contratar mantenimiento y cambios de contenido para acompañar la evolución de tu web.'],
];
function Plans() {
  const campaign = useCampaign();
  const discount = campaign.active;
  return <section id="planes" className="section plans-section"><div className="container">
    <div className="section-heading centered"><p className="eyebrow">UNA INVERSIÓN CON DIRECCIÓN</p><h2>Un gran comienzo.<br /><span>Un plan para ti.</span></h2><p>Alcances claros para dar el siguiente paso con confianza.</p></div>
    {discount && <p className="offer-note">{pricing.discount.percentage}% de descuento vigente hasta {new Date(campaign.endsAt).toLocaleString('es-PE', { timeZone: 'America/Lima', dateStyle: 'long', timeStyle: 'short' })}.</p>}
    <div className="plans-grid">{pricing.plans.map((plan, i) => <article className={'plan ' + (plan.popular ? 'featured' : '')} key={plan.name}>
      <div className="plan-top"><span className="eyebrow">{plan.name}</span>{plan.popular && <span className="popular-label">MÁS ELEGIDO</span>}</div>
      <h3>{['Tu primer gran paso', 'Haz crecer tu presencia', 'Lleva tu web más lejos'][i]}</h3>
      <p className="plan-description">{['Una landing page para presentar tu negocio y recibir consultas.', 'Una web de varias páginas para comunicar todo lo que haces.', 'Una solución más completa para necesidades específicas.'][i]}</p>
      <div className="price">{discount && <del>S/ {plan.originalPrice}</del>}<span>S/ {campaignPrice(plan.originalPrice, campaign)}</span><small>por proyecto</small></div>
      <a className={'button ' + (plan.popular ? '' : 'outline')} href={whatsapp('Hola, me interesa el plan ' + plan.name + '. Quisiera una cotización.')} target="_blank" rel="noopener noreferrer">Elegir {plan.name} <Arrow /></a>
      <ul>{plan.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
    </article>)}</div>
    <p className="pricing-note">Precios en soles. El alcance final y las condiciones se confirman en tu cotización. Hosting y dominio se cotizan por separado.</p>
    <div className="extras"><div><p className="eyebrow">TODO LO QUE TU WEB NECESITA</p><h3>Te acompañamos<br />después del lanzamiento.</h3></div><div className="extras-grid">{pricing.additionalServices.map(service => <div key={service.id}><h4>{service.title}</h4><p><strong>S/ {service.originalPrice}</strong> / {service.billingCycle}</p><small>{service.detail}</small></div>)}</div></div>
    <p className="pricing-note">* Cambios adicionales desde S/ 20, sujetos a evaluación del alcance.</p>
  </div></section>;
}
export function HomePage() {
  return <>
    <SEO title="Diseño web y sistemas a medida en Perú | Tu SitioWeb" description="Diseño web y sistemas a medida en Perú. Soluciones para licorerías, metalmecánicas y boticas, con funciones adaptadas a tu negocio." path="/" schema={{ '@context': 'https://schema.org', '@graph': [{ '@type': 'Organization', '@id': 'https://tu-sitioweb.com/#organization', name: 'Tu SitioWeb', url: 'https://tu-sitioweb.com/', logo: 'https://tu-sitioweb.com/logo_claro_tu-sitioweb.png', telephone: '+51917794918', email: 'contacto@tu-sitioweb.com', areaServed: 'PE', sameAs: ['https://www.instagram.com/tu_sitioweb.oficial', 'https://www.facebook.com/profile.php?id=61586504782161', 'https://www.tiktok.com/@tu.sitioweb'] }, { '@type': 'WebSite', '@id': 'https://tu-sitioweb.com/#website', name: 'Tu SitioWeb', url: 'https://tu-sitioweb.com/', inLanguage: 'es-PE', publisher: { '@id': 'https://tu-sitioweb.com/#organization' } }] }} />
    <section className="home-hero container">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> AGENCIA DIGITAL · PERÚ</p><h1>Tu próximo<br />gran salto <span>empieza con una web.</span></h1><p className="hero-description">Convierte visitas en oportunidades y procesos en tiempo para crecer. Diseñamos páginas web y sistemas a medida en Perú para llevar tu negocio al siguiente nivel.</p><div className="hero-actions"><a className="button" href={whatsapp('Hola, quiero conversar sobre una página web o un sistema a medida para mi negocio.')} target="_blank" rel="noopener noreferrer">Empecemos tu proyecto <Arrow diagonal /></a><Link className="text-link" to="/#sistemas">Ver sistemas a medida <Arrow /></Link></div><div className="hero-note"><span className="mini-spark" aria-hidden="true">✳</span><span>Web · Software · Automatización<br /><strong>Desarrollado alrededor de tu negocio.</strong></span></div></div>
      <TechnologyOrbit />
    </section>
    <ClientCarousel />
    <section id="servicios" className="section container"><div className="section-heading split"><div><p className="eyebrow">LO QUE PODEMOS HACER POR TI</p><h2>Buenas ideas.<br /><span>Mejores experiencias.</span></h2></div><p>Somos tu aliado digital. Unimos creatividad y desarrollo para construir una presencia online a la altura de tu negocio.</p></div><div className="services-grid">{services.map(service => <article className="service-card" key={service.number}><div className="service-top"><span className="service-icon" aria-hidden="true">{service.icon}</span><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p><div className="service-bottom"><span>{service.tags}</span><a href={whatsapp('Hola, me interesa el servicio de ' + service.title)} target="_blank" rel="noopener noreferrer" aria-label={'Consultar sobre ' + service.title}><Arrow diagonal /></a></div></article>)}</div></section>
    <CustomSystems />
    <section className="section work-section"><div className="container"><div className="section-heading split"><div><p className="eyebrow">DEL CONCEPTO A LA REALIDAD</p><h2>El trabajo habla.<br /><span>Estos son nuestros proyectos.</span></h2></div><Link to="/portafolio" className="text-link">Ver todos los proyectos <Arrow diagonal /></Link></div><ProjectGrid limit={4} /></div></section>
    <section id="proceso" className="section container process-section"><div className="process-intro"><p className="eyebrow">CERCA DE TI, EN CADA ETAPA</p><h2>Tu visión.<br />Nuestro equipo.<br /><span>Un mismo objetivo.</span></h2><p>Nos gusta hacer las cosas claras. Te escuchamos, proponemos y construimos contigo, desde la primera conversación hasta el lanzamiento.</p><a href={whatsapp('Hola, me gustaría conocer cómo trabajar con ustedes.')} className="text-link" target="_blank" rel="noopener noreferrer">Conozcámonos <Arrow diagonal /></a><span className="process-spark" aria-hidden="true">✳</span></div><ol className="process-list">{[['Escuchamos tu idea', 'Conocemos tu negocio, tu público y tus objetivos. Definimos juntos el alcance y la ruta del proyecto.'], ['Damos forma a tu marca', 'Organizamos el contenido y diseñamos una experiencia visual que se sienta auténticamente tuya.'], ['Construimos y afinamos', 'Desarrollamos tu web, revisamos los detalles y probamos su funcionamiento en diferentes pantallas.'], ['Lanzamos contigo', 'Publicamos tu sitio y te acompañamos en la entrega para que empieces esta nueva etapa con claridad.']].map(([title, description], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{description}</p></div><Arrow diagonal /></li>)}</ol></section>
    <Plans />
    <BetterProposal />
    <section className="section container faq-section" id="preguntas-frecuentes"><div><p className="eyebrow">SIN LETRA PEQUEÑA</p><h2>Buenas preguntas.<br /><span>Respuestas claras.</span></h2><p>Si te queda alguna duda,<br /><a className="inline-link" href={whatsapp('Hola, tengo una consulta sobre sus servicios.')} target="_blank" rel="noopener noreferrer">estamos a un mensaje de distancia ↗</a></p></div><div className="faq-list">{questions.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
    <section className="section journal-section"><div className="container"><div className="section-heading split"><div><p className="eyebrow">IDEAS PARA SEGUIR CRECIENDO</p><h2>Un poco de inspiración.<br /><span>Mucho por descubrir.</span></h2></div><Link className="text-link" to="/blog">Explorar el blog <Arrow diagonal /></Link></div><BlogGrid limit={3} /></div></section>
  </>;
}




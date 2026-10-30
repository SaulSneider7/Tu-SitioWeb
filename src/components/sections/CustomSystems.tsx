import { Arrow } from '../site/Shared';
import { whatsapp } from '../site/data';
const cases = [
  { number: '01', sector: 'COMERCIO', title: 'Licorería', description: 'Un sistema a medida para llevar el control del negocio y consultar la información que necesita en su día a día.', features: ['Control del negocio', 'Reportes personalizados', 'Seguimiento de deudas', 'Funciones según su operación'], icon: '↗' },
  { number: '02', sector: 'METALMECÁNICA', title: 'Metalmaq', description: 'Una solución para conectar la gestión de gastos, las cotizaciones y los pagos de trabajadores en su operación.', features: ['Control de gastos', 'Automatización de cotizaciones', 'Pagos de trabajadores', 'Procesos a medida'], icon: '⌘' },
  { number: '03', sector: 'BOTICAS', title: 'Botica', description: 'Desarrollo de un sistema con funciones personalizadas, definido a partir de las necesidades particulares del negocio.', features: ['Funciones personalizadas', 'Adaptación a sus procesos', 'Desarrollo según sus necesidades'], icon: '+' },
];
export function CustomSystems() {
  return <section id="sistemas" className="section systems-section" aria-labelledby="systems-title"><div className="container">
    <div className="section-heading split"><div><p className="eyebrow">SOFTWARE QUE ENTIENDE TU NEGOCIO</p><h2 id="systems-title">Tu forma de trabajar.<br /><span>Tu sistema a medida.</span></h2></div><p>Cada empresa tiene sus propios procesos. Los convertimos en herramientas digitales para organizar la información y facilitar el trabajo de tu equipo.</p></div>
    <div className="systems-path" aria-label="De tus procesos a una solución a medida"><span>Tus procesos</span><Arrow /><span>Desarrollo a medida</span><Arrow /><span>Control y automatización</span></div>
    <div className="system-cases">{cases.map(item => <article className="system-case" key={item.number}><div className="system-case-top"><span className="system-icon" aria-hidden="true">{item.icon}</span><span>CASO {item.number}</span></div><p className="eyebrow">{item.sector}</p><h3>{item.title}</h3><p>{item.description}</p><ul>{item.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul></article>)}</div>
    <div className="systems-bottom"><div><h3>¿Tu operación necesita algo diferente?</h3><p>Cuéntanos cómo trabajas. Definimos las funciones, el alcance y una cotización para tu sistema.</p><small>Los sistemas a medida se cotizan por separado de los planes web.</small></div><a className="button" href={whatsapp('Hola, necesito un sistema a medida. Quisiera revisar los procesos y funciones de mi negocio.')} target="_blank" rel="noopener noreferrer">Cotizar mi sistema <Arrow diagonal /></a></div>
  </div></section>;
}

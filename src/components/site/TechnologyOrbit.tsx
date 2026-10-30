import type { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const technologies = [
  { name: 'React', icon: faReact, color: '#187d98', x: 50, y: 8 },
  { name: 'TypeScript', mark: 'TS', color: '#3178c6', x: 86.4, y: 29 },
  { name: 'JavaScript', icon: faJs, color: '#947000', x: 86.4, y: 71 },
  { name: 'Tailwind CSS', mark: '≈', color: '#07869b', x: 50, y: 92 },
  { name: 'CSS3', icon: faCss3Alt, color: '#356cc3', x: 13.6, y: 71 },
  { name: 'HTML5', icon: faHtml5, color: '#d35732', x: 13.6, y: 29 },
];

export function TechnologyOrbit() {
  return <div className="technology-orbit">
    <p className="orbit-heading"><span className="status-dot" /> TECNOLOGÍA CON PROPÓSITO</p>
    <div className="orbit-universe">
      <div className="orbit-ring orbit-ring-outer" aria-hidden="true" />
      <div className="orbit-ring orbit-ring-inner" aria-hidden="true" />
      <div className="orbit-core">
        <span className="orbit-core-symbol" aria-hidden="true">↗</span>
        <span className="eyebrow">EN EL CENTRO DE TODO</span>
        <strong>Tu negocio.</strong>
        <span>Listo para crecer.</span>
      </div>
      <ul className="orbit-technologies" aria-label="Tecnologías que utilizamos">
        {technologies.map(technology => <li key={technology.name} className="orbit-position" style={{ left: `${technology.x}%`, top: `${technology.y}%`, '--technology-color': technology.color } as CSSProperties}>
          <div className="orbit-technology">
            <span className="orbit-icon" aria-hidden="true">{technology.icon ? <FontAwesomeIcon icon={technology.icon} /> : technology.mark}</span>
            <span>{technology.name}</span>
          </div>
        </li>)}
      </ul>
    </div>
    <div className="orbit-footer"><span>Una web que conecta.</span><span>Un sistema que resuelve.</span></div>
  </div>;
}

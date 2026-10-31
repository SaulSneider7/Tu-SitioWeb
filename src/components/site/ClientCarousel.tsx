import { useState } from 'react';
const tivan = '/img/logos/logo-agroindustrialtivan.png';
const jasper = '/img/logos/logo_jasperpetshop.jpeg';
const pinguino = '/img/logos/logo_licoreria_DonPinguino.png';
const metalmaq = '/img/logos/logo_metalmaq.png';
const monzon = '/img/logos/logo_monzon_express.png';
const tip = '/img/logos/logo_tip_excellent.png';

const clients = [
  { name: 'Agroindustrial Tivan', sector: 'Agroindustria', src: tivan, variant: 'wide' },
  { name: 'Jasper Petshop', sector: 'Mascotas', src: jasper, variant: 'portrait' },
  { name: 'Licorería Don Pingüino', sector: 'Comercio', src: pinguino },
  { name: 'Metalmaq', sector: 'Metalmecánica', src: metalmaq },
  { name: 'Monzon Express', sector: 'Transporte', src: monzon },
  { name: 'Tip Excellent Path', sector: 'Consultoría empresarial', src: tip },
];

export function ClientCarousel() {
  const [paused, setPaused] = useState(false);
  return <section className="client-carousel" aria-label="Empresas que trabajaron con nosotros">
    <div className="container">
      <div className="client-carousel-heading">
        <div><p className="eyebrow"><span className="status-dot" /> CONFIANZA QUE NOS IMPULSA</p><h2>Grandes ideas.<br /><span>Marcas que confían.</span></h2></div>
        <div className="client-carousel-intro"><p>Distintos rubros. Una misma decisión:<br />dar el siguiente paso con nosotros.</p><button type="button" aria-pressed={paused} aria-controls="client-logo-track" onClick={() => setPaused(!paused)}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span> {paused ? 'Reanudar' : 'Pausar'} carrusel</button></div>
      </div>
      <div className="client-carousel-window">
        <div id="client-logo-track" className="client-logo-track" data-paused={paused}>
          {[0, 1].map(copy => <ul className="client-logo-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {clients.map((client, index) => <li className={'client-logo-item ' + (client.variant || '')} key={client.name}>
              <div className="client-card-top"><span>{client.sector}</span><span aria-hidden="true">0{index + 1}</span></div>
              <div className="client-logo-stage"><img src={client.src} alt="" width="200" height="112" decoding="async" /></div>
              <div className="client-card-bottom"><strong>{client.name}</strong><span aria-hidden="true">✳</span></div>
            </li>)}
          </ul>)}
        </div>
      </div>
    </div>
  </section>;
}

import { Link } from 'react-router-dom';
import { useCampaign } from '../site/campaign-context';
import { Arrow } from '../site/Shared';
export function CountdownBanner() {
  const campaign = useCampaign();
  if (!campaign.active) return null;
  const deadline = new Date(campaign.endsAt).toLocaleString('es-PE', { timeZone: 'America/Lima', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', year: 'numeric' });
  return <aside className="campaign-banner" aria-label="Campaña de descuento en planes web">
    <div className="container campaign-inner">
      <div className="campaign-message"><span className="campaign-badge">POR TIEMPO LIMITADO</span><p><strong>{campaign.percentage}% de descuento</strong> en todos los planes web</p><small>Hasta el {deadline} · hora de Perú</small></div>
      <div className="campaign-clock" role="timer" aria-live="off" aria-label={'Quedan ' + campaign.days + ' días, ' + campaign.hours + ' horas, ' + campaign.minutes + ' minutos y ' + campaign.seconds + ' segundos'}>
        {[[campaign.days, 'Días'], [campaign.hours, 'Horas'], [campaign.minutes, 'Min'], [campaign.seconds, 'Seg']].map(([value, label]) => <span className="campaign-unit" key={label}><strong>{String(value).padStart(2, '0')}</strong><small>{label}</small></span>)}
      </div>
      <Link to="/#planes" className="campaign-link">Ver planes <Arrow /></Link>
    </div>
  </aside>;
}

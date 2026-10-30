import { useEffect, useState, type ReactNode } from 'react';
import { CampaignContext } from './campaign-context';
import { getCampaign } from '../../lib/campaign';
import pricing from '../../pricing-config.json';
export function CampaignProvider({ children }: { children: ReactNode }) {
  // Identical initial server/client render avoids stale offers and hydration mismatches.
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setNow(Date.now());
    const initial = window.setTimeout(tick, 0);
    const timer = window.setInterval(tick, 1000);
    const onVisible = () => { if (!document.hidden) tick(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      clearTimeout(initial);
      clearInterval(timer);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);
  return <CampaignContext value={getCampaign(pricing.discount, now)}>{children}</CampaignContext>;
}

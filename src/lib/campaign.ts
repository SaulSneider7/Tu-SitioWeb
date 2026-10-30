export type CampaignConfig = { enabled: boolean; percentage: number; endDate: string };
export function getCampaign(config: CampaignConfig, now: number | null) {
  // Dates without an offset are interpreted as Peru time, not the visitor's timezone.
  const date = /(?:Z|[+-]\d{2}:\d{2})$/i.test(config.endDate) ? config.endDate : config.endDate + '-05:00';
  const endsAt = Date.parse(date);
  const valid = config.enabled && Number.isFinite(config.percentage) && config.percentage > 0 && config.percentage < 100 && Number.isFinite(endsAt);
  const active = valid && now !== null && endsAt > now;
  const secondsLeft = active ? Math.ceil((endsAt - now!) / 1000) : 0;
  return {
    active, percentage: config.percentage, endsAt,
    days: Math.floor(secondsLeft / 86400),
    hours: Math.floor(secondsLeft % 86400 / 3600),
    minutes: Math.floor(secondsLeft % 3600 / 60),
    seconds: secondsLeft % 60,
  };
}
export function campaignPrice(price: number, campaign: ReturnType<typeof getCampaign>) {
  return campaign.active ? Math.round(price * (1 - campaign.percentage / 100) * 100) / 100 : price;
}

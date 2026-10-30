import assert from 'node:assert/strict';
import { getCampaign, campaignPrice } from '../src/lib/campaign.ts';
const config = { enabled: true, percentage: 10, endDate: '2026-11-01T00:00:00-05:00' };
const end = Date.parse(config.endDate);
const live = getCampaign(config, end - (86400 + 3600 + 60 + 1) * 1000);
assert.equal(live.active, true);
assert.deepEqual([live.days, live.hours, live.minutes, live.seconds], [1, 1, 1, 1]);
assert.equal(campaignPrice(500, live), 450);
assert.equal(campaignPrice(800, live), 720);
assert.equal(campaignPrice(1200, live), 1080);
assert.equal(campaignPrice(999, getCampaign({ ...config, percentage: 12.5 }, end - 1000)), 874.13);
for (const time of [null, end, end + 1]) {
  const expired = getCampaign(config, time);
  assert.equal(expired.active, false);
  assert.equal(campaignPrice(500, expired), 500);
}
assert.equal(getCampaign(config, end - 1).seconds, 1);
assert.equal(getCampaign({ ...config, enabled: false }, end - 1000).active, false);
for (const percentage of [-1, 0, 100, 101, NaN]) assert.equal(getCampaign({ ...config, percentage }, end - 1000).active, false);
assert.equal(getCampaign({ ...config, endDate: 'invalid' }, end - 1000).active, false);
assert.equal(getCampaign({ ...config, endDate: '2026-11-01T00:00:00' }, end - 1000).endsAt, end);
console.log('Campaign checks passed: countdown, expiry, disabled/invalid config, Peru timezone and discounted prices.');

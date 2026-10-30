import { createContext, useContext } from 'react';
import { getCampaign } from '../../lib/campaign';
import pricing from '../../pricing-config.json';
export const CampaignContext = createContext(getCampaign(pricing.discount, null));
export const useCampaign = () => useContext(CampaignContext);

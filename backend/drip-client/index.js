import init from 'drip-nodejs';
import { DRIP_ACCOUNT_ID, DRIP_API_KEY } from '../config/index.js';

export const drip = init({ token: DRIP_API_KEY, accountId: DRIP_ACCOUNT_ID }); 

// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'ykblg',
  apiKey: process.env.API_KEY,
});

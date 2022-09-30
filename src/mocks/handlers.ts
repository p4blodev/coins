import { rest } from 'msw';
import { COINS_MARKETS } from './data/coinsMarkets';
export const handlers = [
  rest.get<any, any>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1',
    (req, res, ctx) => {
      console.log('req: ', req);
      return res(ctx.status(200), ctx.json(COINS_MARKETS));
    },
  ),
  rest.get('*', (req, res, ctx) => {
    console.error(`You MUST write a request handle for ${req.url.toString()}`);
    return res(ctx.status(500));
  }),
];

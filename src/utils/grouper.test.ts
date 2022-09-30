import { groupData } from './grouper';
import { COINS_MARKETS_1_YEARS } from '../mocks/data/coinsMarketCharts';

describe('groupData verification', () => {
  test('01 - should have 12 items when recieve one year data', () => {
    const result = groupData(360, COINS_MARKETS_1_YEARS);

    expect(result).toHaveLength(12);
  });
});

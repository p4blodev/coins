import {
  CoinMarketChartGetType,
  CoinMarketChartType,
  CoinType,
} from '../models/coins.type';

const API_BASE = 'https://api.coingecko.com/api/v3/coins';

export const getCoins = async (): Promise<CoinType[]> => {
  const url = `${API_BASE}/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1`;
  return await fetch(url)
    .then(async (response) => {
      return await response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getCoinsMarketChart = async (
  params: CoinMarketChartGetType,
): Promise<CoinMarketChartType> => {
  const { id, currenncy, from, to } = params;
  const url = `${API_BASE}/${id}/market_chart/range?vs_currency=${currenncy}&from=${from}&to=${to}`;

  return await fetch(url)
    .then(async (response) => {
      return await response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

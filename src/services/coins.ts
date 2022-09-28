import {
  CoinMarketChartGetType,
  CoinMarketChartType,
  CoinType,
} from "../models/coins.type";

const API_BASE = "https://api.coingecko.com/api/v3/coins";
// const API_URL =
//   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1";

// const OTHER_URL =
//   "https://api.coingecko.com/api/v3/coins/binancecoin/market_chart/range?vs_currency=usd&from=1664153498&to=1664412698";

export const getCoins = async (): Promise<CoinType[]> => {
  const url = `${API_BASE}/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getCoinsMarketChart = async (
  params: CoinMarketChartGetType
): Promise<CoinMarketChartType> => {
  const { id, currenncy, from, to } = params;
  const url = `${API_BASE}/${id}/market_chart/range?vs_currency=${currenncy}&from=${from}&to=${to}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

/*
const dateStr = '2022-04-27';

const date = new Date(dateStr);

// 👇️ timestamp in milliseconds
const timestampInMs = date.getTime();

// 👇️ timestamp in seconds (Unix timestamp)
const timestampInSeconds = Math.floor(date.getTime() / 1000);
console.log(timestampInSeconds);
*/

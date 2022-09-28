import { CoinType } from "../models/coins.type";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1";

export const getCoins = async (): Promise<CoinType[]> => {
  console.log("pablo");
  return fetch(API_URL)
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

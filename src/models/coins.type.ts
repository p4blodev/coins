export type CoinType = {
  ath: number;
  ath_change_percentage: number;
  ath_date: Date;
  atl: number;
  atl_change_percentage: number;
  atl_date: Date;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number | null;
  high_24h: number;
  id: string;
  image: string;
  last_updated: Date;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number | null;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: RoiType | null;
  symbol: string;
  total_supply: number | null;
  total_volume: number;
};

export type RoiType = {
  currency: Currency;
  percentage: number;
  times: number;
};

export enum Currency {
  Btc = "btc",
  Eth = "eth",
  Usd = "usd",
}

export type CoinMarketChartType = {
  market_caps: Array<number[]>;
  prices: Array<number[]>;
  total_volumes: Array<number[]>;
};

export type CoinMarketChartGetType = {
  id: string;
  currenncy: Currency;
  from: number;
  to: number;
};

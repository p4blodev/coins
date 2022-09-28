import {
  CoinMarketChartGetType,
  CoinMarketChartType,
} from "../../models/coins.type";

export type useCoinsMarketChartType = {
  isLoading: boolean;
  error: string | null;
  data?: CoinMarketChartType;
  setFilters: (filters: CoinMarketChartGetType) => void;
};

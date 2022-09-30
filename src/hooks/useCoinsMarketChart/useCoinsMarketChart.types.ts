export type filtersType = {
  id: string;
  from: number;
};

export type useCoinsMarketChartType = {
  isLoading: boolean;
  error: string | null;
  data?: { date: string; price: number }[];
  searchHistoricPrice: (filters: filtersType) => void;
};

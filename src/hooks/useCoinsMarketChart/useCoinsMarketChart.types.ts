export interface filtersType {
  id: string;
  from: number;
}

export interface useCoinsMarketChartType {
  isLoading: boolean;
  error: string | null;
  data?: Array<{ date: string; price: number }>;
  searchHistoricPrice: (filters: filtersType) => void;
}

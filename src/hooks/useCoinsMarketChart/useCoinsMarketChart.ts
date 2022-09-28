import { getCoinsMarketChart } from "../../services/coins";
import {
  CoinMarketChartGetType,
  CoinMarketChartType,
  Currency,
} from "../../models/coins.type";
import { useCoinsMarketChartType } from "./useCoinsMarketChart.types";
import { useEffect, useState } from "react";

const DEFAULT_VALUE = {
  id: "binancecoin",
  currenncy: Currency.Usd,
  from: 1664153498,
  to: 1664412698,
};

export const useCoinsMarketChart = (): useCoinsMarketChartType => {
  const [data, setData] = useState<CoinMarketChartType>();
  const [filters, setFilters] = useState<CoinMarketChartGetType>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!filters) return;
    getCoinsMarketChart(filters)
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [filters]);

  return { data, error, isLoading, setFilters };
};

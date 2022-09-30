import { getCoinsMarketChart } from '../../services/coins';
import { groupData } from '../../utils/grouper';
import { CoinMarketChartType, Currency } from '../../models/coins.type';
import {
  useCoinsMarketChartType,
  filtersType,
} from './useCoinsMarketChart.types';
import { useCallback, useState } from 'react';

const getToDate = (): number => {
  return Math.floor(new Date().getTime() / 1000);
};

const getFromDate = (days: number): number => {
  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() - days);

  return Math.floor(currentDate.getTime() / 1000);
};

export const useCoinsMarketChart = (): useCoinsMarketChartType => {
  const [data, setData] = useState<Array<{ date: string; price: number }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const searchHistoricPrice = useCallback((filters: filtersType) => {
    const toDate = getToDate();
    const fromDate = getFromDate(filters.from);

    getCoinsMarketChart({
      ...filters,
      currenncy: Currency.Usd,
      from: fromDate,
      to: toDate,
    })
      .then((data: CoinMarketChartType) => {
        const { prices } = data;

        const dataGrouped = groupData(filters.from, prices);
        setData(dataGrouped);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading, searchHistoricPrice };
};

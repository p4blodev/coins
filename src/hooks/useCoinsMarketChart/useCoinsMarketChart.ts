import { getCoinsMarketChart } from '../../services/coins';
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

const generateToken = (days: number, date: Date) => {
  switch (days) {
    case 1:
      return `${date.getHours()}${date.getDate()}${
        date.getMonth() + 1
      }${date.getFullYear()}`;
    case 30:
    case 180:
      return `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}`;
    case 360:
    case 1800:
      return `${date.getMonth() + 1}${date.getFullYear()}`;

    default:
      return `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}`;
  }
};

const groupData = (days: number, prices: number[][]) => {
  const objPrices: any = {};

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };

  prices.forEach((element) => {
    const date = new Date(element[0]);
    const token = generateToken(days, date);

    if (!objPrices[token]) {
      const obj = {
        date: new Intl.DateTimeFormat('default', options)
          .format(new Date(element[0]))
          .toString(),
        price: element[1],
      };
      objPrices[token] = obj;
    }
  });

  const formatedData: Array<{ date: string; price: number }> = [];

  Object.keys(objPrices).forEach((key) => {
    formatedData.push(objPrices[key]);
  });

  return formatedData;
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

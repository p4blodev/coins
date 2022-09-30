import { getCoins } from '../../services/coins';
import { CoinType } from '../../models/coins.type';
import { useGetCoinsType } from './useGetCoins.types';
import { useEffect, useState } from 'react';

export const useGetCoins = (): useGetCoinsType => {
  const [data, setData] = useState<CoinType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getCoins()
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading };
};

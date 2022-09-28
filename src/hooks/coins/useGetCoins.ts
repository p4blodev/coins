import { getCoins } from "../../services/coins";
import { useQuery } from "@tanstack/react-query";
import { CoinType } from "../../models/coins.type";
import { ReactQueryKeysEnum } from "../REACT_QUERY_KEYS";
import { useGetCoinsType } from "./useGetCoins.types";

export const useGetCoins = (): useGetCoinsType => {
  const { data, isLoading, error } = useQuery<CoinType[], string>(
    [ReactQueryKeysEnum.COINS],
    () => getCoins(),
    {
      initialData: [],
    }
  );
  return { data, error, isLoading };
};

import { CoinType } from "../../models/coins.type";

export type useGetCoinsType = {
  isLoading: boolean;
  error: string | null;
  data: CoinType[];
};

import { CoinType } from '../../models/coins.type';

export interface useGetCoinsType {
  isLoading: boolean;
  error: string | null;
  data: CoinType[];
}

import { useState } from 'react';
import { CoinType } from '../../models/coins.type';
import { Coins } from '../../components';
import { HistoricPriceGraph } from '../historicPriceGraph';

export const ListAssets = () => {
  const [selectedCoin, setSelectedCoin] = useState<CoinType>();

  const onCoinClick = (item: CoinType) => {
    setSelectedCoin(item);
  };

  return (
    <div className="listAssets_conatinar">
      <Coins onSelected={onCoinClick} />
      {selectedCoin && <HistoricPriceGraph coin={selectedCoin} />}
    </div>
  );
};

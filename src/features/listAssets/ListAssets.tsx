import { useState } from "react";
import { CoinType } from "../../models/coins.type";
import { Coins } from "../../components";
import { HistoricPriceGraph } from "../historicPriceGraph";

const numberFormat = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const ListAssets = () => {
  const [selectedCoin, setSelectedCoin] = useState<CoinType>();

  const onCoinClick = (item: CoinType) => {
    setSelectedCoin(item);
  };

  return (
    <div className="listAssets_conatinar">
      <Coins onSelected={onCoinClick} />
      {selectedCoin && (
        <div>
          <HistoricPriceGraph coin={selectedCoin} />
        </div>
      )}
    </div>
  );
};

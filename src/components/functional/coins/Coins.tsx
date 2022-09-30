import React from "react";
import { useGetCoins } from "../../../hooks";
import { CoinType } from "../../../models/coins.type";
import { TableMUI } from "../../ui";

const headers = {
  name: "Coin",
  market_cap_rank: "Market Cap",
  current_price: "Price",
};

export type CoinsType = {
  onSelected: (coin: CoinType) => void;
};

export const Coins = ({ onSelected }: CoinsType) => {
  const { data, error, isLoading } = useGetCoins();

  const onRowClick = (item: CoinType) => {
    onSelected(item);
  };

  return (
    <div className="listAssets_conatinar">
      <TableMUI headers={headers} data={data} onRowClick={onRowClick} />
    </div>
  );
};

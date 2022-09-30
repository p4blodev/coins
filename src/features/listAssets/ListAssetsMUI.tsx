import { useState } from "react";
import { useGetCoins } from "../../hooks";
import { CoinType } from "../../models/coins.type";
import { TableMUI } from "../../components";
import { HistoricPriceGraph } from "../historicPriceGraph";

const numberFormat = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

const headers2 = {
  name: "Coin",
  market_cap_rank: "Market Cap",
  current_price: "Price",
};

export const ListAssestsMUI = () => {
  const [selectedCoin, setSelectedCoin] = useState<string>("");
  const { data, error, isLoading } = useGetCoins();

  const onRowClick = (item: CoinType) => {
    setSelectedCoin(item.id);
  };

  return (
    <>
      <TableMUI headers={headers2} data={data} onRowClick={onRowClick} />
      {selectedCoin && <HistoricPriceGraph coinId={selectedCoin} />}
    </>
  );
};

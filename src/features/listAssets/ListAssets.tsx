import { useState } from "react";
import { Table, TimeFrame } from "../../components";
import { useGetCoins } from "../../hooks";
import { CoinType } from "../../models/coins.type";
import { HistoricPriceGraph } from "../historicPriceGraph";

const numberFormat = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

const headers = {
  name: "Coin",
  current_price: "Price",
  market_cap: "Market Cap",
};

export const ListAssests = () => {
  const [selectedCoin, setSelectedCoin] = useState<string>("");
  const { data, error, isLoading } = useGetCoins();

  const onRowClick = (item: CoinType) => {
    setSelectedCoin(item.id);
  };

  return (
    <>
      <Table headers={headers} data={data} onRowClick={onRowClick} />

      {selectedCoin && <HistoricPriceGraph coinId={selectedCoin} />}
    </>
  );
};

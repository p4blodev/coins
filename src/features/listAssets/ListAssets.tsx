import { Table } from "../../components/table";
import { useGetCoins } from "../../hooks";
import { CoinType } from "../../models/coins.type";

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
  const { data, error, isLoading } = useGetCoins();

  const onRowClick = (item: CoinType) => {
    console.log(
      "turboCL -> file: ListAssets.tsx -> line 15 -> onRowClick -> item",
      item
    );
  };

  return <Table headers={headers} data={data} onRowClick={onRowClick} />;
};

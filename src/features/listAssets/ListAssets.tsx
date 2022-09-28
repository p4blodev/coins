import { Table } from "../../components/table";
import { useGetCoins } from "../../hooks";

const numberFormat = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const ListAssests = () => {
  const { data, error, isLoading } = useGetCoins();

  const headers = {
    name: "Coin",
    current_price: "Price",
    market_cap: "Market Cap",
  };

  return <Table headers={headers} data={data} />;
};

import React, { useCallback, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { TimeFrame } from "../../components";
import { useCoinsMarketChart } from "../../hooks";

export const HistoricPriceGraph = ({ coinId }: { coinId: string }) => {
  const [timeFrame, setTimeFrame] = useState<number>(1);
  const { error, isLoading, searchHistoricPrice, data } = useCoinsMarketChart();

  useEffect(() => {
    searchHistoricPrice({
      id: coinId,
      from: timeFrame,
    });
  }, [coinId, searchHistoricPrice, timeFrame]);

  const onSelectedTimeFrame = (value: number) => {
    setTimeFrame(value);
  };

  return (
    <>
      <TimeFrame onSelected={onSelectedTimeFrame} />
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  );
};

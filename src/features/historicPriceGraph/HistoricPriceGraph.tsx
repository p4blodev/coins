import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TimeFrameMUI } from '../../components';
import { useCoinsMarketChart } from '../../hooks';
import { CoinType } from '../../models/coins.type';

export const HistoricPriceGraph = ({ coin }: { coin: CoinType }) => {
  const { id, name } = coin;
  const [timeFrame, setTimeFrame] = useState<number>(1);
  const { searchHistoricPrice, data } = useCoinsMarketChart();

  useEffect(() => {
    searchHistoricPrice({
      id,
      from: timeFrame,
    });
  }, [id, searchHistoricPrice, timeFrame]);

  const onSelectedTimeFrame = (value: number) => {
    setTimeFrame(value);
  };

  return (
    <div className="historicPriceGraph_container">
      <header>
        <TimeFrameMUI onSelected={onSelectedTimeFrame} />
        <span>{`Coin: ${name}`}</span>
      </header>
      <div className="historicPriceGraph_graph">
        <ResponsiveContainer>
          <LineChart
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
        </ResponsiveContainer>
      </div>
    </div>
  );
};

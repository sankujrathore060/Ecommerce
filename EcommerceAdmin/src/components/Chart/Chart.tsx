import React from "react";
import { ChartContainer, ChartTitle } from "./Chart.Styles";
import {
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

type ChartProps = {
  data: { name: string; activeUser?: number; sales?: number }[];
  title: string;
  grid: boolean;
  dataKey: string;
};

const Chart: React.FC<ChartProps> = ({ data, title, grid, dataKey }) => {
  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="gray" />
          <Line type="monotone" dataKey={dataKey} stroke="gray" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" />}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default Chart;

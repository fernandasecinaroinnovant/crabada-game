import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  CartesianAxis,
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { RootState } from "../../../../../store/store";

const YAxisData: { id: string; orientation: "left" | "right" }[] = [
  { id: "right-y-axis", orientation: "right" },
];

export interface ChartData {
  name: number;
  [key: string]: number;
}

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

interface Props {
  crabClasses: {
    crabName: string;
    legendColor: string;
    chartColor: string;
  }[];
  data: ChartData[];
}

const CustomizedLineChart: React.FC<Props> = (props) => {
  const { crabClasses } = props;
  const crabs = useSelector((state: RootState) => state.crabs.values);
  const data = useMemo(() => {
    return Object.keys(crabs)
      .sort((a, b) => Number(a) - Number(b))
      .map<ChartData>((date: string) => {
        return {
          name: Number(date),
          ...crabs[Number(date)],
        };
      });
  }, [crabs]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis
          dataKey="name"
          tickLine={false}
          stroke="#5C5C5C"
          strokeWidth={0.5}
          tick={{ fill: "#ffff" }}
          dy={5}
          tickFormatter={(tick, index) => {
            const date = new Date(tick);
            const day = date.getDate();
            if (day === 1 || index === 0) {
              const month = date.getMonth();
              return months[month];
            }
            return "";
          }}
        />
        {YAxisData.map(({ id, orientation }) => (
          <YAxis
            key={id}
            yAxisId={id}
            tickLine={false}
            axisLine={false}
            orientation={orientation}
            tickFormatter={(tick) => (tick >= 1000 ? `${tick / 1000}K` : tick)}
            tick={{ fill: "#ffff" }}
            dx={orientation === "left" ? -4 : 4}
          />
        ))}
        <CartesianGrid vertical={false} stroke="#5C5C5C" strokeWidth={0.5} />
        <CartesianAxis />
        <ReferenceLine
          yAxisId="right-y-axis"
          y={4000}
          label="Max"
          stroke="#ffff"
          strokeDasharray="12"
        />
        {crabClasses.map(({ crabName, chartColor }) => (
          <React.Fragment key={crabName}>
            {YAxisData.map(({ id }) => (
              <Line
                key={crabName}
                yAxisId={id}
                type="monotone"
                dataKey={crabName}
                stroke={chartColor}
                dot={false}
                strokeWidth={3}
              />
            ))}
          </React.Fragment>
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomizedLineChart;

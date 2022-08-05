import React from "react";
import {
  CartesianAxis,
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

const YAxisData: { id: string; orientation: "left" | "right" }[] = [
  { id: "left-y-axis", orientation: "left" },
  { id: "right-y-axis", orientation: "right" },
];

const CustomizedLineChart: React.FC<{
  crabClasses: {
    crabName: string;
    legendColor: string;
    chartColor: string;
  }[];
}> = (props) => {
  const { crabClasses } = props;
  return (
    <LineChart
      width={896}
      height={303}
      data={[
        {
          name: "NOV",
          prime: 4000,
          bulk: 2400,
          gem: 2400,
        },
        {
          name: "DEC",
          prime: 3000,
          bulk: 2210,
          gem: 1398,
        },
        {
          name: "JAN",
          prime: 2000,
          bulk: 2290,
          gem: 9800,
        },
        {
          name: "FEB",
          prime: 2780,
          bulk: 2000,
          gem: 3908,
        },
        {
          name: "MAR",
          prime: 1890,
          bulk: 2181,
          gem: 4800,
        },
        {
          name: "APR",
          prime: 2390,
          bulk: 2500,
          gem: 3800,
        },
        {
          name: "MAY",
          prime: 3490,
          bulk: 2100,
          gem: 4300,
        },
      ]}
    >
      <XAxis
        dataKey="name"
        tickLine={false}
        stroke="#5C5C5C"
        strokeWidth={0.5}
        tick={{ fill: "#ffff" }}
        dy={5}
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
        yAxisId="left-y-axis"
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
          ))}{" "}
        </React.Fragment>
      ))}
    </LineChart>
  );
};

export default CustomizedLineChart;

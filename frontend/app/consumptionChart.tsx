"use client";

import moment from "moment";
import React, { ReactElement } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderDayTick = (tickProps: any): ReactElement<SVGElement> => {
  const { x, y, payload } = tickProps;
  const { value } = payload;
  const date = moment(value);
  const hour = date.hour();
  const mins = date.minute();

  if (hour === 0 && mins < 30) {
    return (
      <text x={x} y={y - 4} textAnchor="middle">
        {date.format("dddd")}
      </text>
    );
  }
  return <React.Fragment />;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formatHourMinute = (tickItem: any) => moment(tickItem).format("HH:mm");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ConsumptionBarChart = ({ data }: any) => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          {...{
            overflow: "visible",
          }}
        >
          <XAxis
            dataKey="interval_start"
            stroke="black"
            tickFormatter={formatHourMinute}
          />
          <XAxis
            dataKey="interval_start"
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={renderDayTick}
            xAxisId="quarter"
          />
          <YAxis
            stroke="black"
            label={{
              value: "Consumption (kWh)",
              angle: -90,
              position: "insideLeft",
              fill: "black",
            }}
          />
          <Tooltip />
          <Bar dataKey="consumption" fill="#8884d8" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConsumptionBarChart;

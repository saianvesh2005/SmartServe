import React from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [

  { month:"Jan", revenue:30000 },

  { month:"Feb", revenue:45000 },

  { month:"Mar", revenue:39000 },

  { month:"Apr", revenue:62000 },

  { month:"May", revenue:73000 },

  { month:"Jun", revenue:91000 },

];

function RevenueChart(){

  return(

    <ResponsiveContainer
      width="100%"
      height={320}
    >

      <LineChart data={data}>

        <CartesianGrid strokeDasharray="3 3"/>

        <XAxis dataKey="month"/>

        <YAxis/>

        <Tooltip/>

        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#7c3aed"
          strokeWidth={4}
        />

      </LineChart>

    </ResponsiveContainer>

  );

}

export default RevenueChart;
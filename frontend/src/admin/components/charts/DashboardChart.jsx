import React from "react";

import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const data = [
  { month: "Jan", bookings: 40 },
  { month: "Feb", bookings: 65 },
  { month: "Mar", bookings: 52 },
  { month: "Apr", bookings: 80 },
  { month: "May", bookings: 92 },
  { month: "Jun", bookings: 110 },
];

function DashboardChart() {

  return (

    <ResponsiveContainer
      width="100%"
      height={320}
    >

      <BarChart data={data}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Legend />

        <Bar
          dataKey="bookings"
          fill="#2563eb"
          radius={[8,8,0,0]}
        />

      </BarChart>

    </ResponsiveContainer>

  );

}

export default DashboardChart;
"use client";

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

import {monthSales } from "@/data/mock-dashboard";

export default function SalesChart() {
  return (
    <section className="rounded-xl border bg-card p-5 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Sales Statistics</h2>

        <p className="mt-1 text-sm text-muted-foreground">Monthly Sales</p>
      </div>

      <div className="h-75 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={monthSales}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }} >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" tick={{ fontSize: 12 }}/>

            <YAxis tick={{ fontSize: 12 }} width={35} />

            <Tooltip formatter={(value) => [ `${value} Million dollars`, "sales" ]}
            />

            <Line
              type="monotone"
              dataKey="sales"
              name="فروش"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
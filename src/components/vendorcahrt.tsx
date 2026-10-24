"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { vendorMonthSales } from "@/data/mock-vendorpanel";

export default function VendorSalesChart() {
  return (
    <section className="w-[50%] rounded-xl border border-[#7a3ffa1a] bg-card p-5 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Sales Statistics
        </h2>

        <p className="mt-1 text-sm text-[#7B29FB]">
          Monthly Sales
        </p>
      </div>

      <div className="h-75 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={vendorMonthSales}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              tick={{ fontSize: 12 }}
              width={35}
            />

            <Tooltip
              formatter={(value) => [
                `${value} Million dollars`,
                "Sales",
              ]}
            />

            <defs>
              <linearGradient
                id="vendorSalesGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#7B29FB"
                  stopOpacity={1}
                />

                <stop
                  offset="95%"
                  stopColor="#F1EBFE"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="sales"
              name="Sales"
              stroke="#7B29FB"
              strokeWidth={3}
              fill="url(#vendorSalesGradient)"
              activeDot={{
                r: 6,
                fill: "#7B29FB",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
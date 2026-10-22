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

import { monthSales } from "@/data/mock-dashboard";

export default function SalesChart() {
  return (
    <section className="w-[50%] rounded-xl border border-[#7a3ffa1a] bg-card p-5 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Sales Statistics
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Monthly Sales
        </p>
      </div>

      <div className="h-75 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={monthSales}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >
            {/* خطوط پس‌زمینه */}
            <CartesianGrid strokeDasharray="3 3" />

            {/* ماه‌های سال */}
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
            />

            {/* مقدار فروش */}
            <YAxis
              tick={{ fontSize: 12 }}
              width={35}
            />

            {/* اطلاعات هنگام حرکت موس */}
            <Tooltip
              formatter={(value) => [
                `${value} Million dollars`,
                "Sales",
              ]}
            />

            {/* گرادیان رنگ زیر نمودار */}
            <defs>
              <linearGradient
                id="salesGradient"
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

            {/* نمودار سطحی */}
            <Area
              type="monotone"
              dataKey="sales"
              name="Sales"
              stroke="#7B29FB"
              strokeWidth={3}
              fill="url(#salesGradient)"
                activeDot={{ r: 6, fill: "#7B29FB" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
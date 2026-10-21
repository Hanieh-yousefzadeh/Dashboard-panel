import { dashboardCard } from "@/data/mock-dashboard";
import DashboardCard from "@/components/dashboard-card";
import SalesChart from "@/components/salesChart";
import StatusOrders from "@/components/statusOrders";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Management Dashboard</h1>
        <p className="mt-2 text-sm "> Overview of the Store's Status </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardCard.map((stat) => (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      <SalesChart />

      <StatusOrders />
    </div>
  );
}
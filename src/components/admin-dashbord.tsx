import { dashboardCard } from "@/data/mock-dashboard";
import DashboardCard from "@/components/dashboard-card";
import SalesChart from "@/components/salesChart";
import StatusOrders from "@/components/statusOrders";

export default function AdminDashboard() {
  return (
    <div className="w-315 pl-5 pt-6">
      {/* <div>
        <p className="mt-2 text-lg "> Overview of the Store's Status </p>
      </div> */}


      <div className="flex justify-between pb-5">
        {dashboardCard.map((stat) => (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            description={stat.description}
          />
        ))}
      </div>
      <div className="flex justify-between gap-5 w-full">
        <SalesChart />
        <StatusOrders />

      </div>
    </div>
  );
}
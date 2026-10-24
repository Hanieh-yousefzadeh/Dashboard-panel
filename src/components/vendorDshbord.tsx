import DashboardCard from "@/components/dashboard-card";
import VendorSalesChart from "@/components/vendorcahrt"
import VendorOrders from "@/components/vendorOrdere"
import { vendorDashboardCard } from "@/data/mock-vendorpanel";

export default function VendorDashboard() {
  return (
    <div className="w-315 pl-5 pt-6">
      {/* <div>
        <p className="mt-2 text-lg "> Overview of the Store's Status </p>
      </div> */}

      <div className="flex justify-between pb-5">
        {vendorDashboardCard.map((card) => (
          <DashboardCard
            key={card.title}
            title={card.title}
            value={card.value}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </div>
      <div className="flex justify-between gap-5 w-full">
        <VendorSalesChart />
        <VendorOrders />

      </div>
    </div>
  );
}

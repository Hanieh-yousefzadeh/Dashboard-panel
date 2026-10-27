import { dashboardCard } from "@/data/mock-dashboard";
import DashboardCard from "@/components/dashboard-card";
import SalesChart from "@/components/salesChart";
import StatusOrders from "@/components/statusOrders";
import { useTranslations } from "next-intl";

export default function AdminDashboard() {
  const t = useTranslations("AdminDashboard")
  return (
    <div className="xl:w-315 sm:pl-5 pt-2">
      <div>
        <p className="mt-2 text-lg sm:pb-2 sm:text-left text-center pb-5">  {t("overview")}</p>
      </div>


      <div className="md:flex-row  flex flex-wrap xl:gap-0 gap-5  justify-center md:justify-start xl:justify-between pb-2">
        {dashboardCard.map((stat) => (
          <DashboardCard
            key={stat.title}
            title={t(`cards.${{
              "Total Users": "users",
              "Total Products": "products",
              "Total Orders": "orders",
              "Total Sales": "sales",
              "Total Comments": "comments",
            }[stat.title]}`
            )}
            value={stat.value}
            icon={stat.icon}
            description={t("cards.thisMonth")}
          />
        ))}
      </div>
      <div className="xl:flex-row flex flex-col justify-between p-2 gap-3 w-full">
        <SalesChart />
        <StatusOrders />

      </div>
    </div>
  );
}
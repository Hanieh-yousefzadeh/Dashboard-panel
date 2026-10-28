import DashboardCard from "@/components/dashboard-card";
import VendorSalesChart from "@/components/vendorcahrt"
import VendorOrders from "@/components/vendorOrdere"
import { vendorDashboardCard } from "@/data/mock-vendorpanel"
import { useTranslations } from "next-intl"

export default function VendorDashboard() {
  const t = useTranslations("VendorDashboard");

  const cardTranslationKeys = {
    "My Products": "myProducts",
    "Total Products": "totalProducts",
    "Total Orders": "totalOrders",
    "All Orders": "allOrders",
    "Total Sales": "totalSales",
    "Total Revenue": "totalRevenue",
    "Pending Orders": "pendingOrders",
    "Need Attention": "needAttention",
    "Total Reviews": "totalReviews",
    "Customer Reviews": "customerReviews",
  } as const
  return (
    <div className="w-315 pl-5 pt-6">
      {/* <div>
        <p className="mt-2 text-lg "> Overview of the Store's Status </p>
      </div> */}

      <div className="flex justify-between pb-5">
        {vendorDashboardCard.map((card) => (
          <DashboardCard
            key={card.title}
            title={t(cardTranslationKeys[card.title])}
            value={card.value}
            icon={card.icon}
            description={t(cardTranslationKeys[card.description])}
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

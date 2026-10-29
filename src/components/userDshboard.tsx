import { userDashboardCard } from "@/data/mock-dashuser"
import DashboardCard from "@/components/dashboard-card"
import { useTranslations } from "next-intl"

export default function UserDashboard() {
    const t = useTranslations("UserDashboard")
    return (
        <div className="py-5 px-6">

            <h1 className="text-2xl font-bold pb-8 pl-2">{t("title")}</h1>


            <div className="flex pl-25  gap-7">
                {userDashboardCard.map((card) => (
                    <DashboardCard
                        key={card.title}
                        title={card.title === "My Orders" ? t("myOrders") :
                            card.title === "My Favorite" ? t("myFavorite") :
                                card.title === "My Address" ? t("myAddress") : t("myOpinions")
                        }
                        value={card.value}
                        icon={card.icon}
                        description={card.description === "Total Number" ? t("totalNumber") :
                            card.description === "Saved products" ? t("savedProducts") :
                                card.description === "Registered addresses" ? t("registeredAddresses") : t("submittedComments")}
                    />
                ))}
            </div>
        </div>
    );
}
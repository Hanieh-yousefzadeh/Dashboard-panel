import { userDashboardCard } from "@/data/moc-dashuser"
import DashboardCard from "@/components/dashboard-card"

export default function UserDashboard() {
    return (
        <div className="py-5 px-6">

            <h1 className="text-2xl font-bold pb-8 pl-2"> User Dashboard</h1>


            <div className="flex pl-25  gap-7">
                {userDashboardCard.map((card) => (
                    <DashboardCard
                        key={card.title}
                        title={card.title}
                        value={card.value}
                        icon={card.icon}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
}
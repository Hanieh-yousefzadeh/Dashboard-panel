import { Users, Package, ShoppingCart, Wallet } from "lucide-react";



const icons = {
    users: Users,
    package: Package,
    "shopping-cart": ShoppingCart,
    wallet: Wallet,
}
type Card = {
    title: string
    value: string
    icon: keyof typeof icons
};

export default function DashboardCard({ title, value, icon }: Card) {

    const Icon = icons[icon]

    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
                <p className="text-sm"> {title} </p>
                <div className="rounded-lg p-2"> <Icon className="size-5" /> </div>
            </div>

            <h2 className="mt-4 text-2xl font-bold"> {value} </h2>

        </div>
    );

}
import { Users, Package, ShoppingCart, Wallet ,MessageSquare } from "lucide-react";



const icons = {
    users: Users,
    package: Package,
    "shopping-cart": ShoppingCart,
    wallet: Wallet,
    MessageSquare :MessageSquare,
}
type Card = {
    title: string
    value: string
    description: string
    icon: keyof typeof icons
};

export default function DashboardCard({ title, value, icon, description }: Card) {

    const Icon = icons[icon]

    return (
        <div className="rounded-2xl border  border-[#7a3ffa0b] bg-[#f1ebfe6a] p-5 shadow-sm flex flex-col justify-center items-center w-58 h-30">
            <div className="flex items-center justify-between">
                <div className="rounded-lg p-2"> <Icon className="size-5" /> </div>
                <p className="text-sm"> {title} </p>

            </div>
            <h2 className=" text-2xl font-bold"> {value} </h2>
            <p className="text-xs text-[#9468fc] pt-2">{description}</p>
        </div>
    );

}
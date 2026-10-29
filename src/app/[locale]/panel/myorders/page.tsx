
"use client";

import { mockMyOrders } from "@/data/mock-myOrders";
import Image from "next/image";
import { Package, Truck, XCircle, RotateCcw } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const orderStats = [
    {
        title: "Current Orders",
        status: "Pendding",
        icon: Package,
    }, {
        title: "Delivered",
        status: "delivered",
        icon: Truck,
    }, {
        title: "Cancelled",
        status: "cancelled",
        icon: XCircle,
    }, {
        title: "Returned",
        status: "returned",
        icon: RotateCcw,
    }
]

export default function MyOrdersPage() {
    return (
        <div className="p-6 pl-9">
            <div className="flex items-center gap-x-29">
                <h1 className="text-2xl font-bold">My Orders </h1>
                <div className="flex  gap-4">

                    {orderStats.map((item) => {
                        const Icon = item.icon
                        const count = mockMyOrders.filter((order) => order.status === item.status).length

                        return (
                            <div key={item.status} className="rounded-2xl border border-[#7a3ffa0b] dark:bg-[#0E0B2F] bg-[#f1ebfe6a] p-5 shadow-sm flex flex-col justify-center items-center md:w-58  w-45 md:h-30 ">
                                <div className="flex items-center justify-between gap-3">
                                    <Icon className="h-6 w-6 text-[#7a3ffa]" />
                                    <p className="text-sm text-[#031481a6] dark:text-[#FAFAFA]"> {item.title} </p>
                                </div>
                                <p className="mt-4 text-3xl font-bold">{count}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="rounded-md border-2 border-[#7a3ffa1a] mt-8  dark:bg-[#0E0B2F]">
                <Table>
                    <TableHeader className="h-15 text-lg bg-[#f1ebfe6a] dark:bg-[#7a3ffa23]">
                        <TableRow className="hover:bg-transparent dark:hover:bg-transparent">
                            <TableHead className="font-bold pl-16 text-[#5409cd] dark:text-[#bd8efb] ">Order ID</TableHead>
                            <TableHead className="font-bold  text-[#5409cd] dark:text-[#bd8efb] ">Product</TableHead>
                            <TableHead className="font-bold  text-[#5409cd] dark:text-[#bd8efb] ">Date</TableHead>
                            <TableHead className="font-bold  text-[#5409cd] dark:text-[#bd8efb] ">Price</TableHead>
                            <TableHead className="font-bold  text-[#5409cd] dark:text-[#bd8efb] ">Status</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {mockMyOrders.map((order) => (
                            <TableRow key={order.id} className="h-13">
                                <TableCell className="font-medium pl-16 pr-16"> #{order.id}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-3 min-w-40">
                                        <Image src={order.image} alt={order.name} width={48} height={48}
                                            className="size-12 shrink-0 rounded-md object-cover" />
                                        <span className="line-clamp-1 pr-5"> {order.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="pr-10">{order.date}</TableCell>
                                <TableCell className="pr-10"> {order.price.toLocaleString("en-US")} $
                                </TableCell>

                                <TableCell>
                                    <span
                                        className={`rounded-lg px-4 py-2.5 text-sm font-semibold  ${order.status === "pending" ? "bg-[#F9F7FF] dark:bg-[#f1ebfeac] dark:text-[#6219d6] text-[#7B29FB] px-5"
                                            : order.status === "delivered"
                                                ?"bg-green-50 dark:bg-[#dbfce7a3] dark:text-green-900 text-green-700"
                                                : order.status === "cancelled"
                                                    ? "bg-red-50 dark:bg-[#ffe2e29a] dark:text-red-900 text-red-700"
                                                    : "bg-blue-50 dark:bg-[#dbeafea6] dark:text-blue-900 text-[#031381]"
                                            }`}
                                    >
                                        {order.status === "pending" ? "Pending"
                                            : order.status === "delivered" ? "Delivered"
                                                : order.status === "cancelled" ? "Cancelled"
                                                    : "Returned"}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}

                        {mockMyOrders.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center text-gray-500"
                                >
                                    You have no orders yet.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
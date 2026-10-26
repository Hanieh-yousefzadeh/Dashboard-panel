"use client"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import type { stateType, dispatchType } from "@/lib/store"
import { updateOrderStatus } from "@/redux/orderSlice"
import type { OrderStatus } from "@/data/mock-order"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"

export default function OrdersPage() {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const dispatch = useDispatch<dispatchType>()
    const orders = useSelector((state: stateType) => state.orders.orders
    )

    const [filter, setFilter] = useState("all")

    const pending = orders.filter((order) => order.status === "pending").length
    const delivered = orders.filter((order) => order.status === "delivered").length
    const cancelled = orders.filter((order) => order.status === "cancelled").length
    const returned = orders.filter((order) => order.status === "returned").length

    const filteredOrders = orders.filter((order) => {
        if (filter === "all") {
            return true
        }

        return order.status === filter
    })

    return (
        <main className=" p-6">
            {mounted && (
                <>
                    <div className="sm:flex-row flex flex-col items-center justify-center lg:justify-start xl:gap-55 lg:gap-15 md:gap-10 pb-6">
                        <h1 className="xl:text-2xl font-bold xl:w-60 sm:pb-0 pb-5">Orders Management</h1>

                        <div className="grid xl:gap-4 gap-5 grid-cols-2  sm:grid-cols-4">
                            <Card className="flex flex-row justify-between items-center xl:w-45 w-30 h-18 border border-[#7a3ffa0b] bg-[#f1ebfe6a]">
                                <CardHeader>
                                    <CardTitle className=" xl:w-30 text-[#031381]">Current Orders</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="lg:text-3xl font-bold text-purple-600">{pending}</p>
                                </CardContent>
                            </Card>

                            <Card className="flex flex-row justify-between items-center xl:w-45 w-30 h-18 border  border-[#7a3ffa0b] bg-[#f1ebfe6a]">
                                <CardHeader>
                                    <CardTitle className="text-[#031381]">Delivered</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="lg:text-3xl font-bold text-green-600">{delivered}</p>
                                </CardContent>
                            </Card>

                            <Card className="flex flex-row justify-between items-center xl:w-45 w-30 h-18 border  border-[#7a3ffa0b] bg-[#f1ebfe6a]">
                                <CardHeader>
                                    <CardTitle className="text-[#031381]">Cancelled</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="lg:text-3xl font-bold text-red-600">{cancelled}</p>
                                </CardContent>
                            </Card>

                            <Card className="flex flex-row justify-between items-center xl:w-45 w-30 h-18 border  border-[#7a3ffa0b] bg-[#f1ebfe6a]">
                                <CardHeader>
                                    <CardTitle className="text-[#031381]">Returned</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="lg:text-3xl font-bold text-[#7a3ffab7]">{returned} </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <Card className="w-full  border border-[#7a3ffa0b] ">
                        <CardHeader className="flex items-center justify-between">
                            <CardTitle className="text-xl pl-5 font-semibold text-[#031381]"> Order List</CardTitle>
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="rounded-md p-2 border-r-4 border-r-white outline-[#7a3ffa3f] outline"
                            >
                                <option value="all">All Orders</option>
                                <option value="pending">Pending</option>
                                <option value="delivered">Delivered</option>
                                <option value="cancelled">Cancelled</option>
                                <option value="returned">Returned</option>
                            </select>
                        </CardHeader>

                        <CardContent className="min-w-0">
                            <div className="xl:w-full w-80 lg:w-180 sm:w-170 overflow-x-auto">
                                <Table className="">
                                    <TableHeader >
                                        <TableRow className="bg-[#f1ebfe6a] border-t h-18" >
                                            <TableHead className="text-base font-extrabold text-[#5409CD] pl-5  pr-18">Order Number</TableHead>
                                            <TableHead className="text-base font-extrabold text-[#5409CD] pr-10">Customer Name</TableHead>
                                            <TableHead className="text-base font-extrabold text-[#5409CD] pr-28">Date</TableHead>
                                            <TableHead className="text-base font-extrabold text-[#5409CD] pr-25 ">Amount</TableHead>
                                            <TableHead className="text-base font-extrabold text-[#5409CD] pr-25">Status</TableHead>
                                            <TableHead className="text-base font-extrabold text-[#5409CD]">change status</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody className="text-[#031381]">
                                        {filteredOrders.map((order) => (
                                            <TableRow key={order.id} className="h-14">
                                                <TableCell className="pl-5">#{order.id}</TableCell>
                                                <TableCell>{order.customer}</TableCell>
                                                <TableCell className="pr-10">{order.date}</TableCell>
                                                <TableCell className="pr-10"> {order.total.toLocaleString("en")}$</TableCell>
                                                <TableCell className="pr-15">
                                                    {order.status === "pending" && "pending"}
                                                    {order.status === "delivered" && "delivered"}
                                                    {order.status === "cancelled" && "cancelled"}
                                                    {order.status === "returned" && "returned"}
                                                </TableCell>

                                                <TableCell className="">
                                                    <select value={order.status}
                                                        onChange={(e) => dispatch(updateOrderStatus({
                                                            id: order.id,
                                                            status: e.target.value as OrderStatus,
                                                        })
                                                        )} className="rounded-md  p-2 border-r-4 border-r-white outline-[#7a3ffa3f] outline">
                                                        <option value="pending">Pending</option>
                                                        <option value="delivered">Delivered</option>
                                                        <option value="cancelled">Cancelled</option>
                                                        <option value="returned">Returned</option>
                                                    </select>
                                                </TableCell>
                                            </TableRow>
                                        ))}

                                        {filteredOrders.length === 0 && (
                                            <TableRow>
                                                <TableCell colSpan={6} className="text-center"> There is no order.</TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>

                            </div>
                        </CardContent>
                    </Card>
                </>
            )}
        </main>
    )
}
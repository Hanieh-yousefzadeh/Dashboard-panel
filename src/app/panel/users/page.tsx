"use client"

import { mockCustomers } from "@/data/mock-customers"
import {PencilSparkles ,Trash} from "lucide-react"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function UsersPage() {
    return (
        <div className="p-5 w-7xl">
            <div className="flex justify-between pb-12">
                <p className="text-2xl font-bold"> Manage your customers</p>
                 <h1 className="text-lg text-[#7a3ffa] ">User</h1>
            </div>

            <div className="rounded-md border-2 border-[#7a3ffa1a]">
                <Table>
                    <TableHeader>
                        <TableRow className="">
                            <TableHead className="pl-10">ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Created</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody >
                        {mockCustomers.map((customer) => (
                            <TableRow key={customer.id}>
                                <TableCell className="pl-10">{customer.id}</TableCell>
                                <TableCell>{customer.name}</TableCell>
                                <TableCell>{customer.email}</TableCell>
                                <TableCell>{customer.created}</TableCell>

                                <TableCell className="flex items-center">
                                    <button className="text-[#6e2dfad6] ">
                                        <PencilSparkles className=" size-5"/>
                                    </button>
                                    <button className="ml-3 text-red-600 hover:underline">
                                       <Trash className="size-5"/>
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
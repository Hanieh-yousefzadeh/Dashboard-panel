"use client"

import { mockCustomers } from "@/data/mock-customers"
import type { Customer } from "@/data/mock-customers"
import { PencilSparkles, Trash } from "lucide-react"
import { useState } from "react"
import {Plus} from"lucide-react"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function UsersPage() {

    const [customers, setCustomers] = useState<Customer[]>(mockCustomers)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [open, setOpen] = useState(false)

    function handleAddCustomer() {
        if (!name.trim() || !email.trim()) return

        const newCustomer: Customer = {
            id: Date.now(),
            name: name.trim(),
            email: email.trim(),
            created: new Date().toISOString().split("T")[0],
        }

        setCustomers((prev) => [...prev, newCustomer])

        setName("")
        setEmail("")
        setOpen(false)
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        handleAddCustomer()
    }
    return (
        <div className="p-5 w-7xl">
            <div className="flex justify-between pb-12">
                <p className="text-2xl font-bold"> Manage your customers</p>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger render={<Button className="text-base bg-[#7a3ffacb] py-4.5 pr-3.5 hover:bg-[#5409cd] cursor-pointer"><Plus strokeWidth={3}/> Add User</Button>}/>

                    <DialogContent className="border-[#7a3ffa1a] text-[#5409cd]">
                        <DialogHeader>
                            <DialogTitle className="text-[#5409cd] font-bold">Add New User</DialogTitle>
                        </DialogHeader>

                        <form
                            onSubmit={handleSubmit}
                            className=" flex flex-col gap-5 pt-5 text-[#6200ff]"
                        >
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter name"
                                    required
                                    className="border-[#7a3ffa1a] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email"
                                    required
                                    className="border-[#7a3ffa1a] placeholder:text-[#6315e16e] focus-visible:ring-0 "
                                />
                            </div>

                            <Button type="submit" className=" cursor-pointer w-full py-5 mt-3 bg-[#7a3ffacb] hover:bg-[#5409cd]"> Add Customer</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>



            <div className="rounded-md border-2 border-[#7a3ffa1a]">
                <Table className="">
                    <TableHeader className="h-12 text-base">
                        <TableRow>
                            <TableHead className="pl-11 font-semibold text-[#5409cd]">ID</TableHead>
                            <TableHead className=" font-semibold text-[#5409cd]">Name</TableHead>
                            <TableHead className=" font-semibold text-[#5409cd]">Email</TableHead>
                            <TableHead className=" font-semibold text-[#5409cd]">Created</TableHead>
                            <TableHead className=" font-semibold text-[#4e07c2] text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody >
                        {customers.map((customer) => (
                            <TableRow key={customer.id}>
                                <TableCell className="pl-10">{customer.id}</TableCell>
                                <TableCell>{customer.name}</TableCell>
                                <TableCell>{customer.email}</TableCell>
                                <TableCell>{customer.created}</TableCell>

                                <TableCell className="flex items-center justify-center">
                                    <button className="text-[#6e2dfab3] cursor-pointer ">
                                        <PencilSparkles className=" size-5" />
                                    </button>
                                    <button className="ml-3 text-red-600 cursor-pointer">
                                        <Trash className="size-5" />
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
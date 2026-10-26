"use client"

import { useDispatch, useSelector } from "react-redux"
import type { stateType, dispatchType } from "@/lib/store"
import { addVendor, editeVendor, deleteVendor } from "@/redux/vendorSlice"
import type { Vendor } from "@/data/mock-vendors"
import { PencilSparkles, Trash } from "lucide-react"
import { useState, useEffect } from "react"
import { Plus } from "lucide-react"

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

export default function VendorsPage() {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const dispatch = useDispatch<dispatchType>()

    const vendors = useSelector((state: stateType) => state.vendors.vendors)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [open, setOpen] = useState(false)
    const [editingVendor, setEditingVendor] = useState<Vendor | null>(null)
    const [editName, setEditName] = useState("")
    const [editEmail, setEditEmail] = useState("")
    const [editAddress, setEditAddress] = useState("")

    function handleAddVendor() {
        if (!name.trim() || !email.trim() || !address.trim()) return

        const newVendor: Vendor = {
            id: Date.now(),
            name: name.trim(),
            email: email.trim(),
            address: address.trim(),
        }

        dispatch(addVendor(newVendor))

        setName("")
        setEmail("")
        setAddress("")
        setOpen(false)
    }
    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        handleAddVendor()
    }

    function handleEditClick(vendor: Vendor) {
        setEditingVendor(vendor)
        setEditName(vendor.name)
        setEditEmail(vendor.email)
        setEditAddress(vendor.address)
    }
    function handleEditSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!editingVendor) return

        dispatch(editeVendor({
            ...editingVendor,
            name: editName,
            email: editEmail,
            address: editAddress
        })
        )
        setEditingVendor(null)
    }
    function handleDeleteVendor(id: number) {
        dispatch(deleteVendor(id))
    }
    return (
        <div className="p-5 pl-8 xl:w-316 md:w-3xl w-80 overflow-x-atuo">
            <div className="flex justify-between pb-12">
                <div className="flex flex-col gap-3">
                    <h1 className="sm:text-2xl font-bold"> Vendors Management </h1>
                    <p className="text-sm text-[#7B29FB]"> Total Vendors: ({vendors.length}) </p>
                </div>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger render={<Button className="text-base bg-[#7a3ffacb] py-4.5 pr-3.5 hover:bg-[#5409cd] cursor-pointer"><Plus strokeWidth={3} /> Add Vendor</Button>} />

                    <DialogContent className="border-[#7a3ffa1a] text-[#5409cd]">
                        <DialogHeader>
                            <DialogTitle className="text-[#5409cd] font-bold">Add New Vendor</DialogTitle>
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
                                    className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
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
                                    className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0 "
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="address">Address</Label>
                                <Input
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Enter address"
                                    required
                                    className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                />
                            </div>

                            <Button type="submit" className=" cursor-pointer w-full py-5 mt-3 bg-[#7a3ffacb] hover:bg-[#5409cd]">Add Vendor</Button>
                        </form>
                    </DialogContent>
                </Dialog>
                <Dialog
                    open={editingVendor !== null}
                    onOpenChange={(isOpen) => {
                        if (!isOpen) {
                            setEditingVendor(null)
                        }
                    }}
                >
                    <DialogContent className="border-[#7a3ffa1a] text-[#5409cd]">
                        <DialogHeader>
                            <DialogTitle className="text-[#5409cd] font-bold"> Edit Vendor </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleEditSubmit} className="flex flex-col gap-5 pt-5">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="editName">Name</Label>
                                <Input
                                    id="editName"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    required
                                    className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="editEmail">Email</Label>
                                <Input
                                    id="editEmail"
                                    type="email"
                                    value={editEmail}
                                    onChange={(e) => setEditEmail(e.target.value)}
                                    required
                                    className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="editSddress">Address</Label>
                                <Input
                                    id="editAddress"
                                    value={editAddress}
                                    onChange={(e) => setEditAddress(e.target.value)}
                                    required
                                    className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                />
                            </div>

                            <Button type="submit" className="w-full py-5 bg-[#7a3ffacb] hover:bg-[#5409cd]" > Save Changes  </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {mounted && (
                <div className="rounded-md border-2 border-[#7a3ffa1a]">
                    <Table className="">
                        <TableHeader className="h-12 text-base bg-[#f1ebfe6a]">
                            <TableRow>
                                <TableHead className="pl-11 font-semibold text-[#5409cd]">ID</TableHead>
                                <TableHead className=" font-semibold text-[#5409cd]">Name</TableHead>
                                <TableHead className=" font-semibold text-[#5409cd]">Email</TableHead>
                                <TableHead className=" font-semibold text-[#5409cd]">Address</TableHead>
                                <TableHead className=" font-semibold text-[#4e07c2] text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody >
                            {vendors.map((vendor) => (
                                <TableRow key={vendor.id} className="h-14">
                                    <TableCell className="pl-10">{vendor.id}</TableCell>
                                    <TableCell>{vendor.name}</TableCell>
                                    <TableCell>{vendor.email}</TableCell>
                                    <TableCell>{vendor.address}</TableCell>
                                    <TableCell className="flex items-center justify-center">
                                        <button onClick={() => handleEditClick(vendor)} className="text-[#6e2dfab3] cursor-pointer ">
                                            <PencilSparkles className=" size-5" />
                                        </button>
                                        <button onClick={() => handleDeleteVendor(vendor.id)} className="ml-3 text-red-600 cursor-pointer">
                                            <Trash className="size-5" />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    )
}
"use client"

import { useEffect, useState } from "react"
import { Plus, PencilSparkles, Trash } from "lucide-react"
import { mockAddresses, type Address } from "@/data/mock-address"

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

const emptyAddress = {
    province: "",
    city: "",
    address: "",
    plaque: "",
    postalCode: "",
}

export default function MyAddressesPage() {
    const [addresses, setAddresses] = useState<Address[]>(mockAddresses)
    const [mounted, setMounted] = useState(false)

    const [open, setOpen] = useState(false)
    const [editingAddress, setEditingAddress] = useState<Address | null>(null)

    const [form, setForm] = useState(emptyAddress)

    useEffect(() => {
        const savedAddresses = localStorage.getItem("myAddresses")
        if (savedAddresses) {
            setAddresses(JSON.parse(savedAddresses))
        } setMounted(true)
    }, [])

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("myAddresses", JSON.stringify(addresses))
        }
    }, [addresses, mounted])

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        const newAddress: Address = {
            id: Date.now(),
            ...form,
        }

        setAddresses((prev) => [...prev, newAddress])
        setForm(emptyAddress)
        setOpen(false)
    }

    function handleEditClick(item: Address) {
        setEditingAddress(item)
        setForm({
            province: item.province,
            city: item.city,
            address: item.address,
            plaque: item.plaque,
            postalCode: item.postalCode,
        })
    }
    function handleEditSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!editingAddress) return

        const updatedAddress: Address = {
            id: editingAddress.id,
            ...form,
        }

        const update = addresses.map((item) => item.id === editingAddress.id ? updatedAddress : item )
        setAddresses(update)
        setEditingAddress(null)
        setForm(emptyAddress)
    }

    function handleDeleteAddress(id: number) {
         const deleteAddress = addresses.filter((item) => item.id !== id)
        setAddresses(deleteAddress)
    }

    function renderAddressForm(isEditing: boolean) {
        return (
            <form onSubmit={isEditing ? handleEditSubmit : handleSubmit}
                className="flex flex-col gap-7 pt-5 text-[#6200ff] dark:border-[#b392fbab] dark:text-[#dbc8f9] dark:bg-[#0a0220]">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="province">Province</Label>
                    <Input
                        id="province"
                        value={form.province}
                        onChange={(e) => setForm({ ...form, province: e.target.value }) }
                        placeholder="Enter province"
                        required
                        className="border-[#7a3ffa1a] h-10 focus-visible:ring-0 dark:placeholder:text-[#b098d6bd] dark:text-[#bea2eba1]"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                        id="city"
                        value={form.city}
                        onChange={(e) =>setForm({ ...form, city: e.target.value })}
                        placeholder="Enter city"
                        required
                        className="border-[#7a3ffa1a] h-10 focus-visible:ring-0 dark:placeholder:text-[#b098d6bd] dark:text-[#bea2eba1]"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="address">Full Address</Label>
                    <Input
                        id="address"
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value }) }
                        placeholder="Street, alley, building..."
                        required
                        className="border-[#7a3ffa1a] h-10 focus-visible:ring-0 dark:placeholder:text-[#b098d6bd] dark:text-[#bea2eba1]"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="plaque">Plaque Number</Label>
                    <Input
                        id="plaque"
                        value={form.plaque}
                        onChange={(e) => setForm({ ...form, plaque: e.target.value })}
                        placeholder="Enter plaque number"
                        required
                        className="border-[#7a3ffa1a] h-10 dark:placeholder:text-[#b098d6bd] dark:text-[#bea2eba1] focus-visible:ring-0"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                        id="postalCode"
                        value={form.postalCode}
                        onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
                        placeholder="10-digit postal code"
                        maxLength={10}
                        required
                        className="border-[#7a3ffa1a] h-10 dark:placeholder:text-[#b098d6bd] dark:text-[#bea2eba1] focus-visible:ring-0"
                    />
                </div>

                <Button type="submit" className="w-full bg-[#7a3ffa] hover:bg-[#5409cd] py-5 mt-2 dark:text-[#d1ccd5] dark:bg-[#3b0b87]">
                    {isEditing ? "Save Changes" : "Add Address"}
                </Button>
            </form>
        )
    }

    return (
        <div className="p-5 pl-8 xl:w-316 md:w-3xl w-80 overflow-x-auto">
            <div className="pb-12 flex items-center justify-between gap-4">
                <div className="flex flex-col gap-3">
                    <h1 className="sm:text-2xl font-bold"> My Addresses </h1>
                    <p className="text-base text-[#7B29FB] dark:text-[#decaf9]">Total Addresses: ({addresses.length})</p>
                </div>

                <Dialog
                    open={open}
                    onOpenChange={(isOpen) => {
                         setOpen(isOpen)

                        if (isOpen) {
                            setForm(emptyAddress)
                        }
                    }}
                >
                    <DialogTrigger
                        render={
                            <Button className="bg-[#7a3ffacb] hover:bg-[#5409cd] cursor-pointer py-4.5 pr-3.5 dark:hover:text-[#d1ccd5] dark:bg-[#261666] dark:text-[#d1ccd5]">
                                <Plus strokeWidth={3} />
                                Add Address
                            </Button>
                        }
                    />

                    <DialogContent className="border-[#7a3ffa1a] text-[#5409cd] dark:border-[#b392fbab] dark:text-[#dbc8f9] dark:bg-[#0a0220]">
                        <DialogHeader>
                            <DialogTitle className="font-bold text-[#5409cd] dark:text-[#d1ccd5] ">
                                Add New Address
                            </DialogTitle>
                        </DialogHeader>

                        {renderAddressForm(false)}
                    </DialogContent>
                </Dialog>
            </div>

            {mounted && (
                <div className="rounded-md border-2 border-[#7a3ffa1a] dark:bg-[#0E0B2F]">
                    <Table>
                        <TableHeader className="h-15 text-lg bg-[#f1ebfe6a] dark:bg-[#7a3ffa23]">
                            <TableRow className="hover:bg-transparent dark:hover:bg-transparent">
                                <TableHead className="font-semibold  text-[#5409cd] dark:text-[#bd8efb]  pl-12"> Province / City  </TableHead>
                                <TableHead className="font-semibold  text-[#5409cd] dark:text-[#bd8efb] "> Address </TableHead>
                                <TableHead className="font-semibold  text-[#5409cd] dark:text-[#bd8efb] "> Plaque </TableHead>
                                <TableHead className="font-semibold  text-[#5409cd] dark:text-[#bd8efb] ">  Postal Code </TableHead>
                                <TableHead className="text-center font-semibold text-[#5409cd] dark:text-[#bd8efb] "> Actions </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {addresses.map((item) => (
                                <TableRow key={item.id} className="h-15">
                                    <TableCell className="pl-12"> {item.province}, {item.city}</TableCell>
                                    <TableCell className="w-90 pr-10"> {item.address} </TableCell>
                                    <TableCell className="pl-3 pr-15">{item.plaque}</TableCell>
                                    <TableCell>{item.postalCode}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center justify-center">
                                            <button onClick={() => handleEditClick(item)}
                                                className="text-[#6e2dfab3] dark:text-[#6e2dfae0] cursor-pointer" >
                                                <PencilSparkles className="size-5" />
                                            </button>

                                            <button onClick={() => handleDeleteAddress(item.id) }
                                                className="ml-3 text-red-600 dark:text-red-900 cursor-pointer">
                                                <Trash className="size-5" />
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}

                            {addresses.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-24 text-center">
                                        No addresses found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            )}

            <Dialog
                open={editingAddress !== null}
                onOpenChange={(isOpen) => {
                    if (!isOpen) {
                        setEditingAddress(null)
                        setForm(emptyAddress)
                    }
                }}
            >
                <DialogContent className="border-[#7a3ffa1a] text-[#5409cd] dark:text-[#dbc8f9] dark:bg-[#0a0220] ">
                    <DialogHeader>
                        <DialogTitle className="font-bold text-[#5409cd] dark:text-[#d1ccd5]">
                            Edit Address
                        </DialogTitle>
                    </DialogHeader>

                    {renderAddressForm(true)}
                </DialogContent>
            </Dialog>
        </div>
    )
}
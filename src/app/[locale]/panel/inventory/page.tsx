"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { stateType, dispatchType } from "@/lib/store"
import { editProduct } from "@/redux/productSlice"
import { Package, PencilSparkles } from "lucide-react"
import type { Product } from "@/data/mock-products"

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

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function InventoryPage() {
    const dispatch = useDispatch<dispatchType>()

    const products = useSelector(
        (state: stateType) => state.products.products
    )

    const [editingId, setEditingId] = useState<number | null>(null)
    const [stockValue, setStockValue] = useState("")

    function handleSave(productId: number) {
        const product = products.find((item) => item.id === productId)

        if (!product || stockValue.trim() === "") return

        const newStock = Number(stockValue)
        if (!Number.isInteger(newStock) || newStock < 0) return

        dispatch(editProduct({
            ...product,
            stock: newStock,
        })
        )
        setEditingId(null)
        setStockValue("")
    }
    function handleCancel() {
        setEditingId(null)
        setStockValue("")
    }
    function handleEdit(product: Product) {
        setEditingId(product.id)
        setStockValue(String(product.stock))
    }
    const lowStock = products.filter((product) => product.stock > 0 && product.stock <= 5).length
    const outOfStock = products.filter((product) => product.stock === 0).length

    return (
        <div className="p-5">

            <div className="flex items-center gap-10 pb-6">
                <h1 className="text-2xl font-bold w-65"> Inventory Management </h1>
                <div className="flex justify-end gap-4 w-235">
                    <Card className="flex flex-row justify-between items-center w-45 h-18 border border-[#7a3ffa0b] bg-[#f1ebfe6a]">
                        <CardHeader>
                            <CardTitle className=" w-30 text-[#031381]">Total Products </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold text-[#7B29FB]">{products.length}</p>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-row justify-between items-center w-45 h-18 border  border-[#7a3ffa0b] bg-[#f1ebfe6a]">
                        <CardHeader>
                            <CardTitle className="text-[#031381] w-30">Low Stock</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold text-[#7929fbc3]">{lowStock}</p>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-row justify-between items-center w-45 h-18 border  border-[#7a3ffa0b] bg-[#f1ebfe6a]">
                        <CardHeader>
                            <CardTitle className="text-[#031381] w-30">Out of Stock</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold text-red-500">{outOfStock}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="overflow-x-auto rounded-md border-2 border-[#7a3ffa1a]">
                <Table>
                    <TableHeader className="h-14 bg-[#f1ebfe6a]">
                        <TableRow>
                            <TableHead className="font-semibold text-[#5409cd] pl-18"> Product</TableHead>
                            <TableHead className="font-semibold text-[#5409cd]">Price </TableHead>
                            <TableHead className="font-semibold text-[#5409cd]"> Stock </TableHead>
                            <TableHead className="font-semibold text-[#5409cd]">Status </TableHead>
                            <TableHead className="font-semibold text-[#5409cd]">Action</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell className="py-5 pl-18 pr-15 font-medium">{product.name}</TableCell>
                                <TableCell className="pr-15">${product.price}</TableCell>
                                <TableCell className="pr-15">
                                    {editingId === product.id ?
                                        (<Input type="number" value={stockValue}
                                            onChange={(e) => setStockValue(e.target.value)} className="w-24 border-[#7a3ffa1a]"
                                        />) : (product.stock)}
                                </TableCell>

                                <TableCell className="pr-15">
                                    {product.stock === 0 ? (<span className="text-red-500"> Out of Stock</span>)
                                        : product.stock <= 5 ? (<span className="text-orange-500"> Low Stock</span>)
                                            : (<span className="text-green-600">In Stock</span>)}
                                </TableCell>

                                <TableCell>
                                    {editingId === product.id ? (
                                        <div className="flex gap-2">
                                            <Button onClick={() => handleSave(product.id)} className="bg-[#7a3ffa] hover:bg-[#5409cd]"> Save </Button>
                                            <Button onClick={ handleCancel } > Cancel</Button>
                                        </div>
                                    ) : (
                                        <Button onClick={() => handleEdit(product)} className="border-[#7a3ffa1a] bg-[#5409cdde] text-[#F9F7FF] hover:bg-[#5409cd]">
                                            <PencilSparkles className="mr-1 size-4" />
                                            Edit Stock
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}

                        {products.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} className="py-8 text-center">No products found. </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
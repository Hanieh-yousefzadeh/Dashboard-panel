"use client"

import { useDispatch, useSelector } from "react-redux"
import type { stateType, dispatchType } from "@/lib/store"
import { mockProducts, type Product } from "@/data/mock-products"
import { addProduct, editProduct, deleteProduct } from "@/redux/productSlice"
import { PencilSparkles, Trash } from "lucide-react"
import { useState, useEffect } from "react"
import { Plus } from "lucide-react"
import Image from "next/image"
import { mockCategories } from "@/data/mock-categoris"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {

    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    const dispatch = useDispatch<dispatchType>()
    const products = useSelector((state: stateType) => state.products.products)
    const [form, setForm] = useState({
        name: "",
        image: "",
        categoryId: "",
        price: "",
        stock: "",
    })
    const [editForm, setEditForm] = useState({
        name: "",
        image: "",
        categoryId: "",
        price: "",
        stock: "",
    })
    const [open, setOpen] = useState(false)
    const [editingProduct, setEditingProduct] = useState<Product | null>(null)
    function handleAddProduct() {
        if (!form.name.trim() || !form.image.trim() || !form.categoryId || !form.price || !form.stock) {
            return
        }
        const newProduct: Product = {
            id: Date.now(),
            name: form.name,
            image: form.image,
            categoryId: Number(form.categoryId),
            price: Number(form.price),
            stock: Number(form.stock),
        }
        dispatch(addProduct(newProduct))
        setForm({
            name: "",
            image: "",
            categoryId: "",
            price: "",
            stock: "",
        })
        setOpen(false)
    }
    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        handleAddProduct()
    }
    function handleEditClick(product: Product) {
        setEditingProduct(product)

        setEditForm({
            name: product.name,
            image: product.image,
            categoryId: String(product.categoryId),
            price: String(product.price),
            stock: String(product.stock),
        })
    }
    function handleEditSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!editingProduct) return
        if (!editForm.name.trim() || !editForm.image.trim() || !editForm.categoryId || !editForm.price || !editForm.stock) {
            return
        }

        dispatch(editProduct({
            ...editingProduct,
            name: editForm.name,
            image: editForm.image,
            categoryId: Number(editForm.categoryId),
            price: Number(editForm.price),
            stock: Number(editForm.stock),
        })
        )
        setEditingProduct(null)
    }
    function handleDeleteProduct(id: number) {
        dispatch(deleteProduct(id))
    }

    return (
        <div className="p-5 pl-8 xl:w-316 md:w-3xl w-80 overflow-x-atuo">
            <div className="pb-12 flex items-center justify-between">
                <div className="flex flex-col gap-3">
                    <h1 className="sm:text-2xl font-bold">Products Management </h1>
                    <p className="text-sm text-[#7B29FB]"> Total Products: ({products.length}) </p>
                </div>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger render={<Button className="text-base bg-[#7a3ffacb] py-4.5 pr-3.5 hover:bg-[#5409cd] cursor-pointer">
                        <Plus strokeWidth={3} /> Add Product </Button>} />
                    <DialogContent className="border-[#7a3ffa1a] text-[#5409cd]">
                        <DialogHeader>
                            <DialogTitle className="text-[#5409cd] font-bold">Add New Product</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 pt-5 text-[#6200ff]">
                            <div className="flex flex-col gap-2">
                                <Label>Product Name</Label>
                                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    placeholder="Product name"
                                    required className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label>Image Path</Label>
                                <Input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })}
                                    placeholder="/products/product.jpg"
                                    required className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label>Category</Label>
                                <select value={form.categoryId} onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
                                    required className="w-full rounded-md border bg-transparent p-2 text-sm"
                                >
                                    <option value="">Select category</option>
                                    {mockCategories.map((category) => (
                                        <option key={category.id} value={category.id}> {category.name} </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label>Price</Label>
                                <Input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })}
                                    placeholder="Price"
                                    required className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label>Stock</Label>
                                <Input type="number" value={form.stock}
                                    onChange={(e) => setForm({ ...form, stock: e.target.value })}
                                    placeholder="Stock"
                                    required className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                />
                            </div>
                            <Button type="submit" className="w-full bg-[#7a3ffa] hover:bg-[#5409cd]"  >Add Product </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            {mounted && (
                <div className="rounded-md border-2 border-[#7a3ffa1a]">
                    <Table>
                        <TableHeader className="h-15 text-base bg-[#f1ebfe6a]">
                            <TableRow>
                                <TableHead className="pl-8 font-semibold text-[#5409cd]"> ID </TableHead>
                                <TableHead className="font-semibold text-[#5409cd]">  Product </TableHead>
                                <TableHead className="font-semibold text-[#5409cd]"> Category  </TableHead>
                                <TableHead className="font-semibold text-[#5409cd]"> Price </TableHead>
                                <TableHead className="font-semibold text-[#5409cd]"> Stock </TableHead>
                                <TableHead className=" font-semibold text-[#5409cd]"> Actions </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => {
                                const category = mockCategories.find((item) => item.id === product.categoryId)
                                return (
                                    <TableRow key={product.id}>
                                        <TableCell className="pl-8 pr-20">{product.id} </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-3 min-w-40">
                                                <Image src={product.image} alt={product.name} width={48} height={48}
                                                    className="size-12 shrink-0 rounded-md object-cover" />
                                                <span className="line-clamp-1 pr-25"> {product.name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="pr-30"> {category?.name}</TableCell>
                                        <TableCell className="pr-28">  ${product.price} </TableCell>
                                        <TableCell className="pr-28"> {product.stock}</TableCell>

                                        <TableCell>
                                            <div className="flex items-center justify-center gap-3 pr-8">
                                                <Dialog open={editingProduct?.id === product.id}
                                                    onOpenChange={(isOpen) => { if (!isOpen) setEditingProduct(null) }}
                                                >
                                                    <DialogTrigger render={
                                                        <button type="button" className="cursor-pointer text-[#6e2dfab3]" onClick={() => handleEditClick(product)}>
                                                            <PencilSparkles className="size-5" />
                                                        </button>
                                                    } />
                                                    <DialogContent className="border-[#7a3ffa1a] text-[#5409cd]">
                                                        <DialogHeader>
                                                            <DialogTitle className="text-[#5409cd] font-bold">Edit Product</DialogTitle>
                                                        </DialogHeader>

                                                        <form onSubmit={handleEditSubmit} className="flex flex-col gap-5 pt-5">
                                                            <div className="flex flex-col gap-2">
                                                                <Label>Product Name</Label>
                                                                <Input value={editForm.name}
                                                                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                                                    required className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                                                />
                                                            </div>

                                                            <div className="flex flex-col gap-2">
                                                                <Label>Image Path</Label>
                                                                <Input value={editForm.image}
                                                                    onChange={(e) => setEditForm({ ...editForm, image: e.target.value })
                                                                    }
                                                                    required className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                                                />
                                                            </div>

                                                            <div className="flex flex-col gap-2">
                                                                <Label>Category</Label>
                                                                <select value={editForm.categoryId}
                                                                    onChange={(e) => setEditForm({
                                                                        ...editForm,
                                                                        categoryId: e.target.value,
                                                                    })
                                                                    }
                                                                    required className="w-full rounded-md border bg-transparent p-2 text-sm"
                                                                >
                                                                    <option value="">Select category</option>
                                                                    {mockCategories.map((category) => (
                                                                        <option key={category.id} value={category.id} >
                                                                            {category.name}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>

                                                            <div className="flex flex-col gap-2">
                                                                <Label>Price</Label>
                                                                <Input type="number" value={editForm.price}
                                                                    onChange={(e) => setEditForm({
                                                                        ...editForm,
                                                                        price: e.target.value,
                                                                    })
                                                                    }
                                                                    required className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                                                />
                                                            </div>

                                                            <div className="flex flex-col gap-2">
                                                                <Label>Stock</Label>
                                                                <Input type="number" value={editForm.stock}
                                                                    onChange={(e) => setEditForm({
                                                                        ...editForm,
                                                                        stock: e.target.value,
                                                                    })
                                                                    }
                                                                    required className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                                                />
                                                            </div>
                                                            <Button type="submit" className="w-full py-5 bg-[#7a3ffacb] hover:bg-[#5409cd]"> Save Changes  </Button>
                                                        </form>
                                                    </DialogContent>
                                                </Dialog>

                                                <button type="button" className="cursor-pointer text-red-600" onClick={() => handleDeleteProduct(product.id)} >
                                                    <Trash className="size-5" />
                                                </button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                            {products.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} className="py-8 text-center"> No products found.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    )
}
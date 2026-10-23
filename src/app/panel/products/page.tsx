"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {PencilSparkles,Trash} from "lucide-react"

import Image from "next/image"
import { mockProducts } from "@/data/mock-products"
import { mockCategories } from "@/data/mock-categoris"

export default function ProductsPage() {
    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-6">Products Management</h1>
            <div className="rounded-md border-2 border-[#7a3ffa1a]">
                <Table>
                    <TableHeader className="h-15 text-base">
                        <TableRow>
                            <TableHead className="pl-8 font-semibold text-[#5409cd]">
                                ID
                            </TableHead>

                            <TableHead className="font-semibold text-[#5409cd]">
                                Product
                            </TableHead>

                            <TableHead className="font-semibold text-[#5409cd]">
                                Category
                            </TableHead>

                            <TableHead className="font-semibold text-[#5409cd]">
                                Price
                            </TableHead>

                            <TableHead className="font-semibold text-[#5409cd]">
                                Stock
                            </TableHead>

                            <TableHead className=" font-semibold text-[#5409cd]">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {mockProducts.map((product) => {
                            const category = mockCategories.find(
                                (item) => item.id === product.categoryId
                            )

                            return (
                                <TableRow key={product.id}>
                                    <TableCell className="pl-8 pr-30">
                                        {product.id}
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex items-center gap-3 min-w-40">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={48}
                                                height={48}
                                                className="size-12 shrink-0 rounded-md object-cover"
                                            />

                                            <span className="line-clamp-1 pr-25">
                                                {product.name}
                                            </span>
                                        </div>
                                    </TableCell>

                                    <TableCell className="pr-30">
                                        {category?.name}
                                    </TableCell>

                                    <TableCell className="pr-28">
                                        ${product.price}
                                    </TableCell>

                                    <TableCell className="pr-28">
                                        {product.stock}
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex items-center justify-center gap-3 pr-8">
                                            <button
                                                className="text-[#6e2dfab3] cursor-pointer"
                                                onClick={() => {
                                                    // ویرایش محصول را بعداً اضافه می‌کنیم
                                                }}
                                            >
                                                <PencilSparkles className="size-5" />
                                            </button>

                                            <button
                                                className="text-red-600 cursor-pointer"
                                                onClick={() => {
                                                    // حذف محصول را بعداً اضافه می‌کنیم
                                                }}
                                            >
                                                <Trash className="size-5" />
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
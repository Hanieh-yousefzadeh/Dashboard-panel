
import { mockProducts } from "@/data/mock-products"
import { mockProductStats } from "@/data/mock-prostats"
import Image from "next/image"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function VisitPage() {

    const productsWithStats = mockProducts.map((product) => {
        const stats = mockProductStats.find((item) => item.productId === product.id)
        return {
            ...product,
            views: stats?.views ? stats.views : 0,
            addedToWishlist: stats?.Wishlist ? stats.Wishlist : 0,
        }
    })
    return (
        <div className="pl-6 py-8">
            <div className="rounded-md border-2 border-[#7a3ffa1a]">
                <Table className="w-307">
                    <TableHeader className="h-15 bg-[#f1ebfe6a]">
                        <TableRow>
                            <TableHead className=" font-semibold text-[#5409cd] pl-19">Product </TableHead>
                            <TableHead className="font-semibold text-[#5409cd]"> Views </TableHead>
                            <TableHead className="font-semibold text-[#5409cd]"> Added to Wishlist</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {productsWithStats.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>
                                    <div className="flex min-w-40 items-center gap-3 pl-15">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={48}
                                            height={48}
                                            className="size-12 shrink-0 rounded-md object-cover"
                                        />

                                        <span className="line-clamp-1">{product.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="pr-20"> {product.views} </TableCell>
                                <TableCell className="pl-15"> {product.addedToWishlist}</TableCell>
                            </TableRow>
                        ))}

                        {productsWithStats.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={3} className="py-8 text-center"> No products found.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

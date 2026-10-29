"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Trash } from "lucide-react";

import { FavoriteProduct, mockMyFavorites } from "@/data/mock-favorite";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function MyFavoritePage() {
    const [favorites, setFavorites] = useState<FavoriteProduct[]>([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const savedFavorites = localStorage.getItem("myFavorites")
        if (savedFavorites !== null) {
            setFavorites(JSON.parse(savedFavorites))
        }else {
            setFavorites(mockMyFavorites)
        }
        setLoaded(true)
    }, [])

    useEffect(() => {
        if (loaded) { localStorage.setItem("myFavorites", JSON.stringify(favorites)) }
    }, [favorites, loaded])

    function deleteFavorite(id: number) {
        const deletefav = favorites.filter((product) => product.id !== id)
        setFavorites(deletefav)
    }

    if (!loaded) {
        return null
    }
    return (
        <div className="p-6">
            <h1 className="mb-8 pl-3 text-2xl font-bold">My Favorite </h1>

            <div className="mt-4  ml-3 w-300 rounded-md border border-[#7a3ffa1a] shadow-sm dark:bg-[#0E0B2F]">
                <Table>
                    <TableHeader className="h-15 text-lg bg-[#f1ebfe6a] dark:bg-[#7a3ffa23]">
                        <TableRow className="hover:bg-transparent dark:hover:bg-transparent">
                            <TableHead className="pl-10 font-semibold text-[#5409cd] dark:text-[#bd8efb]"> Product</TableHead>
                            <TableHead className="font-semibold text-[#5409cd] dark:text-[#bd8efb]">Price </TableHead>
                            <TableHead className="text-center  font-semibold text-[#5409cd] dark:text-[#bd8efb]"> Action </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {favorites.map((product) => (
                            <TableRow key={product.id} className="h-16">
                                <TableCell>
                                    <div className="flex min-w-40 items-center gap-3 pl-8">
                                        <Image src={product.image} alt={product.name} width={48} height={48}
                                            className="size-12 shrink-0 rounded-md object-cover"
                                        />

                                        <span className="line-clamp-1"> {product.name}</span>
                                    </div>
                                </TableCell>

                                <TableCell> {product.price.toLocaleString("en-US")} $</TableCell>

                                <TableCell className="text-center">
                                    <button
                                        onClick={() => deleteFavorite(product.id)}
                                        className="rounded-lg p-2 text-red-500 dark:text-red-900 hover:bg-red-50">
                                        <Trash className="size-5" />
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}

                        {favorites.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={3} className="h-24 text-center text-gray-500" >
                                    You have no favorite products yet.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
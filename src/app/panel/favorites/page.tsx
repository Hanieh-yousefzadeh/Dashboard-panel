"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Trash } from "lucide-react";

import { FavoriteProduct } from "@/data/mock-favorite";

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
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites))
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

            <div className="mt-4  ml-3 w-300 rounded-2xl border border-[#7a3ffa1a] p-5 shadow-sm">
                <Table>
                    <TableHeader className="h-15">
                        <TableRow className="bg-[#f1ebfe6a]">
                            <TableHead className="pl-10 text-base font-bold"> Product</TableHead>
                            <TableHead className="text-base font-bold">Price </TableHead>
                            <TableHead className="text-center text-base font-bold"> Action </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {favorites.map((product) => (
                            <TableRow key={product.id} className="h-16">
                                <TableCell>
                                    <div className="flex min-w-40 items-center gap-3">
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
                                        className="rounded-lg p-2 text-red-500 transition hover:bg-red-50">
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
"use client"

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { setProducts } from "@/redux/productSlice"
import type { dispatchType, stateType } from "@/lib/store"



export default function ProductStorage() {
    const dispatch = useDispatch<dispatchType>()
    const products = useSelector((state: stateType) => state.products.products)
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        const saved = localStorage.getItem("products")
        if (saved) {
            dispatch( setProducts(JSON.parse(saved)))
        }
        setLoaded(true)
    }, [dispatch])

    useEffect(() => {
        if (!loaded) return

        localStorage.setItem("products", JSON.stringify(products))
    }, [products, loaded])

    return null

}
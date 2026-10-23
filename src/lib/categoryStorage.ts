"use client"

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { setCategory } from "@/redux/categorySlice"
import type { dispatchType, stateType } from "@/lib/store"






export default function CategoriesStorage() {
    const dispatch = useDispatch<dispatchType>()
    const categories = useSelector((state: stateType) => state.categories.categories)

    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        const saved = localStorage.getItem("categories")
        if (saved) {
            dispatch(setCategory(JSON.parse(saved)))
        }
        setLoaded(true)
    }, [dispatch])

    useEffect(() => {
        if (!loaded) return

        localStorage.setItem("categories", JSON.stringify(categories))
    }, [categories, loaded])

    return null

}
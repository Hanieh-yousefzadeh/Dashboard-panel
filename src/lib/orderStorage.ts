"use client"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { stateType, dispatchType } from "@/lib/store"
import { setOrders } from "@/redux/orderSlice"



export default function OrderStorage() {
    const dispatch = useDispatch<dispatchType>()
    const orders = useSelector((state: stateType) => state.orders.orders)

    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        const saved = localStorage.getItem("orders")
        if (saved) {
            dispatch(setOrders(JSON.parse(saved)))
        }
        setLoaded(true)
    }, [dispatch])

    useEffect(() => {
        if (!loaded) return

        localStorage.setItem("orders", JSON.stringify(orders))
    }, [orders, loaded])

    return null

}
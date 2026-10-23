"use client"

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { setVendors } from "@/redux/vendorSlice"
import type { dispatchType, stateType } from "@/lib/store"






export default function VendorsStorage() {
    const dispatch = useDispatch<dispatchType>()
    const vendors = useSelector((state: stateType) => state.vendors.vendors)

    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        const saved = localStorage.getItem("vendors")
        if (saved) {
            dispatch( setVendors(JSON.parse(saved)))
        }
        setLoaded(true)
    }, [dispatch])

    useEffect(() => {
        if (!loaded) return

        localStorage.setItem("vendors", JSON.stringify(vendors))
    }, [vendors, loaded])

    return null

}
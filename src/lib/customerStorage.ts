"use client"

import { useDispatch, useSelector } from "react-redux"
import type { dispatchType, stateType } from "@/lib/store"
import { useEffect, useState } from "react"
import {setCustomers} from "@/redux/customersSlice"






export default function CustomersStorage(){
    const dispatch = useDispatch<dispatchType>()
    const customers = useSelector((state :stateType) => state.customers.customers)

    const [loaded ,setLoaded] = useState(false)


    useEffect(()=>{
        const saved = localStorage.getItem("customers")
        if(saved){
            dispatch(setCustomers(JSON.parse(saved)))
        }
        setLoaded(true)
    },[dispatch])

    useEffect(()=>{
        if(!loaded) return

        localStorage.setItem("customers" , JSON.stringify(customers))
    },[customers,loaded])

    return null

}
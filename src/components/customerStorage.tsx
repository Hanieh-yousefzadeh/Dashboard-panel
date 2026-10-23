"use client"

import { useDispatch, useSelector } from "react-redux"
import { dispatchType, stateType } from "@/lib/store"
import { useEffect, useState } from "react"
import {setCustomers} from "@/redux/customersSlice"






export default function CustomersStorage(){
    const dispatch = useDispatch<dispatchType>()
    const customers = useSelector((state :stateType) => state.customers.customers)

    const [Loaded ,setLoaded] = useState(false)


    useEffect(()=>{
        const seved = localStorage.getItem("customers")
        if(seved){
            dispatch(setCustomers(JSON.parse(seved)))
        }
        setLoaded(true)
    },[dispatch])

    useEffect(()=>{
        if(!Loaded) return

        localStorage.setItem("customers" , JSON.stringify(customers))
    },[customers,Loaded])

    return null

}
"use client"
import { Provider } from "react-redux"
import { Store } from "@/lib/store"

export default function StoreProvider({children} : {children : React.ReactNode}){

    return <Provider store ={Store}>{children}</Provider>
    

}
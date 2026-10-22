"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { dispatchType, stateType } from "@/lib/store"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "@/redux/authSlice"
import { LogOut} from "lucide-react"
import Theme from "./theme"




export default function Header() {
    const user = useSelector((state: stateType) => state.auth.user)
    const dispatch = useDispatch<dispatchType>()
    const router = useRouter()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return <p className="p-8">Loading...</p>;
    }

    function handleLougout() {
        dispatch(logout());
        router.replace("/");
    }

    return (
        <header className="flex justify-between pr-7 pl-4 border-b-2 border-[#7a3ffa2d]">
            <img src="/Logo.png" className="h-20" />
            <div className="flex items-center gap-3">
               <div className=" border-2 border-[#7a3ffa2d] flex items-center rounded-full p-1">
                <Theme/>
               </div>
                <button onClick={handleLougout} className="flex items-center gap-1"><LogOut  className="size-5.5"/> logout</button>
            </div>
        </header>
    )
}
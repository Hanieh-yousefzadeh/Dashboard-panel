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
        return <p className="sm:p-8">Loading...</p>;
    }

    function handleLogout() {
        dispatch(logout());
        router.replace("/");
    }

    return (
        <header className="w-5xl xl:w-full lg:flex hidden justify-between md:pr-7 sm:pl-4 border-b-2 border-[#7a3ffa2d]">
            <img src="/Logo.png" className="md:h-20 w-40" />
            <div className="flex items-center gap-3">
               <div className=" border-2 border-[#7a3ffa2d] flex items-center rounded-full p-1 cursor-pointer">
                <Theme/>
               </div>
                <button onClick={handleLogout} className="flex items-center gap-1 cursor-pointer sm:text-base"><LogOut  className="sm:size-5.5"/> logout</button>
            </div>
        </header>
    )
}
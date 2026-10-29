"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { dispatchType, stateType } from "@/lib/store"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "@/redux/authSlice"
import { LogOut } from "lucide-react"
import Theme from "./theme"
import LanguageSwitch from "@/components/lang-switch"
import { useTranslations } from "next-intl"





export default function Header() {
    const t = useTranslations("AdminDashboard.header")
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
        <header className="w-5xl xl:w-full lg:flex hidden justify-between md:pr-7 sm:pl-4 border-b-2 border-[#7a3ffa2d] dark:border-[#7a3ffa51]">
            <div className="h-20 flex justify-between items-center">
                <img src="/Logo.png" className="md:h-20 w-40 dark:hidden" alt="Ecomrace"/>
                <img src="/vdark.png" className="hidden md:h-15 w-40 dark:block brightness-125" alt="Ecomrace"/>
            </div>
            <div className="flex items-center gap-3">
                <LanguageSwitch />
                <div className=" border-2 border-[#7a3ffa2d] hover:bg-[#8049FD] hover:text-white  dark:border-[#7a3ffaa0] flex items-center rounded-full p-1 cursor-pointer">
                    <Theme />
                </div>
                <button onClick={handleLogout} className="flex items-center gap-1 cursor-pointer sm:text-base"><LogOut className="sm:size-5.5" /> {t("logout")}</button>
            </div>
        </header>
    )
}
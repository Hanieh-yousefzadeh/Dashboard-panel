"use client"

import { navigation } from "@/data/navigation"
import { useState, useEffect } from "react"
import { stateType } from "@/lib/store"
import { usePathname } from "next/navigation"
import { useSelector } from "react-redux"
import { CircleUserRound } from "lucide-react"
import Link from "next/link"



export default function SideBar() {
    const pathName = usePathname()
    const user = useSelector((state: stateType) => state.auth.user)
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return <p className="p-8">Loading...</p>;
    }

    if (!user) {
        return null
    }

    const menu = navigation[user.role]
    return (
        <aside className=" flex min-h-153 w-64 shrink-0 flex-col border-r-2 border-[#7a3ffa2d] p-4  ">
            <div className="flex items-center pl-1 pb-8 gap-1">
                <CircleUserRound className="text-[#5d16f76f] size-9" />
                <h2 className=" font-bold">{user.role} Dashboard </h2>
            </div>
            <div className="">
                {menu.map((item) => {
                    const Icon = item.icon
                    const isActive = pathName === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-md px-3 py-2 text-base mb-1 ${isActive ? "text-[#7a3ffa] bg-[#7a3ffa1a]"
                                : " hover:text-[#7a3ffa] hover:bg-[#7a3ffa1a]"
                                }`}
                        >
                            <Icon size={20} />
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
            </div>
        </aside>
    )
}
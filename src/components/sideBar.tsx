"use client"

import { navigation } from "@/data/navigation"
import { useState ,useEffect } from "react"
import { stateType } from "@/lib/store"
import { usePathname } from "next/navigation"
import { useSelector } from "react-redux"
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
        <aside>
            <h2>Hello {user.name}</h2>
            <div>
                {menu.map((item) => {
                    const Icon = item.icon
                    const isActive = pathName === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm  ${isActive ? "text-red-700"
                                : " hover:text-red-700"
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
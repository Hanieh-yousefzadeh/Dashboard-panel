"use client"

import { useRouter } from "next/navigation"
import { useState ,useEffect } from "react"
import { dispatchType, stateType } from "@/lib/store"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "@/redux/authSlice"




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
        <header className="flex">
            <h1>Dashboard</h1>
            <h2>hello{user?.name}</h2>
            <p>{user?.role}</p>
            <button onClick={handleLougout}>Logout</button>
        </header>
    )
}
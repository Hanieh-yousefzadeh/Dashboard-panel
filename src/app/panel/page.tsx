"use client";

import { useDispatch, useSelector } from "react-redux";
import { stateType ,dispatchType } from "@/lib/store";
import { useState, useEffect } from "react";
import { logout } from "@/redux/authSlice";
import {useRouter} from "next/navigation"

export default function DashboardPage() {
    const user = useSelector((state: stateType) => state.auth.user)
    const dispatch = useDispatch<dispatchType>()
    const router = useRouter()

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    function handleLougout() {
        dispatch(logout());
        router.replace("/");
    }

    if (!mounted) {
        return <p className="p-8">Loading...</p>;
    }

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold"> Dashboard </h1>
            <p className="mt-4"> welcome {user?.name} </p>
            <p> Role: {user?.role} </p>

            <button onClick={handleLougout}>Logout</button>

        </main>
    );
}
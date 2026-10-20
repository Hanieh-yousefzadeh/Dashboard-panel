"use client";

import {  useSelector } from "react-redux";
import { stateType} from "@/lib/store";
import { useState, useEffect } from "react";

export default function DashboardPage() {
    const user = useSelector((state: stateType) => state.auth.user)


    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return <p className="p-8">Loading...</p>;
    }

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold"> Dashboard </h1>
            <p className="mt-4"> welcome {user?.name} </p>
            <p> Role: {user?.role} </p>

        </main>
    );
}
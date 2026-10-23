"use client";

import { useSelector } from "react-redux";
import { stateType } from "@/lib/store";
import { useState, useEffect } from "react";
import AdminDashboard from "@/components/admin-dashbord"

export default function DashboardPage() {
    const user = useSelector((state: stateType) => state.auth.user)
    if (!user) {
        return null;
    }

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return <p className="p-8">Loading...</p>;
    }
 if (user.role === "Admin") {
    return <AdminDashboard />;
  }

  if (user.role === "Vendor") {
    return (
      <div>
        <h1 className="text-2xl font-bold"> Seller Dashboard</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">User Dashboard</h1>
     
    </div>
  );
}

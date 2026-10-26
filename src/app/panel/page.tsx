"use client";

import { useSelector } from "react-redux";
import { stateType } from "@/lib/store";
import { useState, useEffect } from "react";
import AdminDashboard from "@/components/admin-dashbord"
import VendorDashboard from "@/components/vendorDshbord";
import UserDashboard from "@/components/userDshboard";

export default function DashboardPage() {
  const user = useSelector((state: stateType) => state.auth.user)

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <p className="sm:p-8">Loading...</p>;
  }
  if (!user) {
    return null;
  }


  if (user.role === "Admin") {
    return <AdminDashboard />;
  }

  if (user.role === "Vendor") {
    return (
      <VendorDashboard />
    );
  }

  return (
    <UserDashboard />
  );
}

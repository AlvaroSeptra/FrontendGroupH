"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

const SellerDashboardPage = () => {
  const router = useRouter();

  return (
    <ProtectedRoute requiredRole="seller">
      <div>
        <h1>Seller Dashboard</h1>
        tes
        {/* Your dashboard content here */}
      </div>
    </ProtectedRoute>
  );
};

export default SellerDashboardPage;

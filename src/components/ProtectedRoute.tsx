// components/ProtectedRoute.tsx
import React from "react";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { auth } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!auth.isAuthenticated) {
      router.push("/login");
    }
  }, [auth.isAuthenticated, router]);

  if (!auth.isAuthenticated) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

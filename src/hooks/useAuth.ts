// hooks/useAuth.ts
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const [auth, setAuth] = useState<{
    isAuthenticated: boolean;
    token: string | null;
  }>({
    isAuthenticated: false,
    token: null,
  });
  const router = useRouter();

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setAuth({ isAuthenticated: true, token });
    } else {
      setAuth({ isAuthenticated: false, token: null });
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setAuth({ isAuthenticated: true, token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({ isAuthenticated: false, token: null });
    router.push("/login");
  };

  return { auth, login, logout };
};

export default useAuth;

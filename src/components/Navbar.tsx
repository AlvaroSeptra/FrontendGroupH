"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const disableNavbar =
    pathname.includes("/register") || pathname.includes("/login");

  return (
    <div className={`${disableNavbar && "hidden"} bg-green-800 py-2 px-5`}>
      <h1 className="text-white">Navbar</h1>
      <ul className="justify-end flex ml-5">
        <Link href="/">
          <li
            className={`mr-3 ${
              pathname === "/"
                ? "text-green-500 font-bold"
                : "text-white cursor-pointer"
            }`}
          >
            Home
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`mr-3 ${
              pathname === "/about"
                ? "text-green-500 font-bold"
                : "text-white cursor-pointer"
            }`}
          >
            About
          </li>
        </Link>
        <Link href="/about/profile">
          <li
            className={`mr-3 ${
              pathname === "/about/profile"
                ? "text-green-500 font-bold"
                : "text-white cursor-pointer"
            }`}
          >
            Profile
          </li>
        </Link>
        <Link href="/login">
          <li
            className={`mr-3 ${
              pathname === "/login"
                ? "text-green-500 font-bold"
                : "text-white cursor-pointer"
            }`}
          >
            <button>Login</button>
          </li>
        </Link>
        <li>
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => useRouter().push("/login")}
          >
            Sign in
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

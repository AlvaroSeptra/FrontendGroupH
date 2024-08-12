import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar>
        <div className="fixed top-10 left-0 z-10 h-screen w-60 bg-gray-800">
          <ul className="text-white px-5 py-5">
            <li>Home</li>
          </ul>
        </div>
      </Navbar>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;

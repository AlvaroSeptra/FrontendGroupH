import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< Updated upstream
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
=======
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
>>>>>>> Stashed changes
import { CartProvider } from "@/components/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REVOU Group H Amsterdam",
  description: "final group project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <CartProvider>
          <main>{children}</main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import SessionProvider from "./SessionProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My E-Commerce",
  description: "wallet emptier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
          <Footer />
        </SessionProvider>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      </body>
    </html>
  );
}

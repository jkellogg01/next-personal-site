import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Nav from "@/components/Nav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Joshua Kellogg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-slate-950 text-amber-50">
        <div className="flex flex-row justify-center items-start p-2 lg:p-8 gap-4">
          <div className="flex flex-col gap-4">
            <Link
              className="bg-slate-800 p-4 rounded-xl text-end hover:bg-slate-700 transition-colors duration-200"
              href="/"
            >
              <h1 className="text-amber-200 font-sans text-3xl font-bold">
                Joshua Kellogg
              </h1>
              <h3 className="text-amber-100 text-xl font-semibold">
                Full-Stack Developer
              </h3>
            </Link>
            <Nav />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}

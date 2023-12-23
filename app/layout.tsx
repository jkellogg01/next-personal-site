import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Nav from "@/components/Nav";

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
        <div className="flex flex-col sm:flex-row justify-center items-start p-2 lg:p-8 gap-4">
          <div className="flex flex-col gap-4 max-sm:w-full">
            <Nav />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}

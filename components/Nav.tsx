"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  name: string;
  url?: string;
};

export default function Nav() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      name: "Projects",
    },
    {
      name: "Essays",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <div className="bg-slate-800 p-2 rounded-xl sm:text-end flex flex-row justify-between">
        <Link
          className="hover:bg-slate-700 p-2 rounded-lg transition-colors duration-200"
          href="/"
        >
          <h1 className="text-amber-200 sm:text-3xl font-bold block">
            Joshua
            <br className="max-sm:hidden lg:hidden" /> Kellogg
          </h1>
          <h3 className="text-amber-100 sm:text-xl font-semibold block">
            Full-Stack
            <br className="max-sm:hidden lg:hidden" /> Developer
          </h3>
        </Link>
        <button
          className="sm:hidden bg-slate-700 p-2 rounded-lg"
          onClick={(e) => {
            e.stopPropagation();
            setDrawer(true);
          }}
        >
          menu
        </button>
      </div>
      <nav
        className={
          drawer
            ? "bg-slate-800 p-2 sm:static sm:rounded-xl text-end text-lg " +
              "fixed max-sm:top-0 max-sm:right-0 max-sm:min-h-screen max-sm:w-1/3 z-20"
            : "bg-slate-800 p-2 hidden sm:block sm:rounded-xl text-end text-lg"
        }
      >
        {navItems.map(({ name, url }, index) => {
          return pathname === url ? (
            <div
              key={index}
              className="p-2 bg-slate-900 text-amber-300 underline rounded-lg"
            >
              {name}
            </div>
          ) : (
            <Link
              key={index}
              className="block p-2 hover:bg-slate-700 hover:text-amber-200 rounded-lg transition-colors duration-200"
              href={url ? url : "/under-construction"}
              onClick={() => setDrawer(false)}
            >
              {name}
            </Link>
          );
        })}
      </nav>
      <div
        className={
          drawer
            ? "sm:hidden fixed top-0 bottom-0 left-0 right-0 bg-slate-950 z-10 opacity-50 cursor-pointer"
            : "hidden"
        }
        onClick={() => setDrawer(false)}
      ></div>
    </>
  );
}

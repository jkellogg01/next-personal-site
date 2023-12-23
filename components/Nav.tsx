"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    },
  ];

  return (
    <nav className="bg-slate-800 p-2 rounded-xl text-end text-lg">
      {navItems.map(({ name, url }, index) => {
        return pathname === url ? (
          <Link
            key={index}
            className="block p-2 bg-slate-900 text-amber-300 underline rounded-lg cursor-default"
            href={url}
          >
            {name}
          </Link>
        ) : (
          <Link
            key={index}
            className="block p-2 hover:bg-slate-700 hover:text-amber-200 rounded-lg transition-colors duration-200"
            href={url ? url : "/under-construction"}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}

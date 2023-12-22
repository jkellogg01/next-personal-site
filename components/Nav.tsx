import Link from "next/link";

type NavItem = {
  name: string;
  url?: string;
};

export default function Nav() {
  const navItems: NavItem[] = [
    {
      name: "Projects",
      url: "/projects",
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
      {navItems.map(({ name, url }, index) => (
        <Link
          key={index}
          className="block p-2 hover:bg-slate-700 hover:text-amber-200 rounded-lg transition-colors duration-200"
          href={url ? url : "/"}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}

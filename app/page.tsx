import Link from "next/link";

type NavCard = {
  name: string;
  url?: string;
  desc: string;
};

export default function Index() {
  const navCards: NavCard[] = [
    {
      name: "Projects",
      desc: "Some of the projects I've worked on recently",
    },
    {
      name: "Essays",
      desc: "Assorted thoughts. Like a blog without the implication of regular maintenance.",
    },
    {
      name: "Contact",
      desc: "Interested in working together on your next project? Reach out!",
    },
  ];

  return (
    <div className="flex flex-col gap-4 max-w-prose">
      <div className="bg-slate-800 p-4 rounded-xl">
        <h2 className="text-2xl text-amber-200 font-semibold">Profile</h2>
        <p>
          My name is Joshua Kellogg, and I'm a full-stack web developer from
          Denver, Colorado.
        </p>
        <p>
          In the fall of 2023 I completed a 12-week bootcamp that taught me a
          wide variety of web development skills. In The time since, I've been
          working on a variety of projects. Most recently, I've been using{" "}
          <a
            href="https://nextjs.org/"
            className="text-amber-100 underline"
            target="_blank"
          >
            Next.js
          </a>{" "}
          to build my personal site (the one you're looking at now), as well as
          working through{" "}
          <a
            href="https://craftinginterpreters.com/"
            className="text-amber-100 underline"
            target="_blank"
          >
            Bob Nystrom's Crafting Interpreters
          </a>
          , which has been a really fun and interesting experience.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {navCards.map(({ name, url, desc }, index) => (
          <Link
            key={index}
            className="bg-slate-800 p-4 rounded-xl hover:bg-slate-700 transition-colors duration-200"
            href={url ? url : "/under-construction"}
          >
            <h2 className="text-amber-200 text-xl font-semibold">
              {name}
              {" ->"}
            </h2>
            <p>{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

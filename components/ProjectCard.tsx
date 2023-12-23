export type ProjLink = {
  name: string;
  url: string;
};

export default function ProjectCard({
  children,
  title,
  image,
  links,
}: {
  children: React.ReactNode;
  title: string;
  image?: string;
  links?: ProjLink[];
}) {
  return (
    <div className="bg-slate-800 rounded-xl flex flex-row">
      <img className="object-cover rounded-l-xl" src={image} />
      <div className="p-4 w-full h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl text-amber-200 font-semibold">{title}</h2>
          <p>{children}</p>
        </div>
        <div className="flex flex-row gap-2 pt-2 items-end justify-end">
          {links?.map(({ name, url }, index) => (
            <a
              className="p-2 bg-amber-200 text-slate-900 rounded-lg hover:bg-amber-300"
              key={index}
              href={url}
              target="_blank"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

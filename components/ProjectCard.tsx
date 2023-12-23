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
      <img className="bg-red-500 object-cover rounded-l-xl" src={image} />
      <div className="p-4 w-full">
        <h2 className="text-2xl text-amber-200 font-semibold">{title}</h2>
        <p>{children}</p>
        <div className="flex flex-row gap-2 pt-2 items-center justify-end">
          {links?.map(({ name, url }, index) => (
            <a
              className="p-2 bg-amber-200 text-slate-900 rounded-lg hover:bg-amber-300"
              key={index}
              href={url}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

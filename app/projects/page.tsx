type ShowProject = {
	title: string;
	desc?: string;
	img?: string;
	links: ProjLink[];
};

type ProjLink = {
	name: string;
	url: string;
};

export default function Projects() {
	const projects: ShowProject[] = [
		{
			title: "Sunny",
			desc: "A CLI-based weather API client",
			links: [
				{
					name: "Repo",
					url: "https://github.com/jkellogg01/sunny",
				},
			],
		},
		{
			title: "Snif",
			desc: "A full-stack dating app for dogs & dog owners.",
			links: [
				{
					name: "Repo",
					url: "https://github.com/nlad218/dog-dating-app",
				},
				{
					name: "Deployed",
					url: "https://stormy-mesa-49272-df30e734d644.herokuapp.com/",
				},
			],
		},
	];

	return (
		<div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-start sm:grid sm:grid-cols-2 max-sm:w-full max-w-prose gap-4">
			{projects.map(({ title, links, desc, img }, index) => (
				<ProjectCard key={index} title={title} links={links} image={img}>
					{desc}
				</ProjectCard>
			))}
		</div>
	);
}

function ProjectCard({
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

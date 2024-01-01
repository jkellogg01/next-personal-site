import ProjectCard from "@/components/ProjectCard";
import { ProjLink } from "@/components/ProjectCard";

type ShowProject = {
  title: string;
  desc?: string;
  img?: string;
  links: ProjLink[];
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

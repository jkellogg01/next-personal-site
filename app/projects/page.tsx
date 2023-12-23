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
      title: "Example Project",
      links: [
        {
          name: "Repo",
          url: "#",
        },
      ],
      desc: "This is an example project card",
    },
    {
      title: "Example Project",
      links: [
        {
          name: "Repo",
          url: "#",
        },
      ],
      desc: "This is an example project card",
    },
    {
      title: "Example Project",
      links: [
        {
          name: "Repo",
          url: "#",
        },
      ],
      desc: "This is an example project card",
    },
    {
      title: "Example Project",
      links: [
        {
          name: "Repo",
          url: "#",
        },
      ],
      desc: "This is an example project card",
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:w-full max-w-prose gap-4">
      {projects.map(({ title, links, desc, img }, index) => (
        <ProjectCard
          key={index}
          title={title}
          links={links}
          image={img}
        >
          {desc}
        </ProjectCard>
      ))}
    </div>
  );
}

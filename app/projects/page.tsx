import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="grid grid-cols-2 sm:w-full max-w-prose gap-4">
      <ProjectCard
        title="Example Project"
        links={[
          {
            name: "Repo",
            url: "#",
          },
        ]}
      >
        This is an example project card
      </ProjectCard>
      <ProjectCard
        title="Example Project"
        links={[
          {
            name: "Repo",
            url: "#",
          },
        ]}
      >
        This is an example project card
      </ProjectCard>
    </div>
  );
}

import { projects } from "@/constants";
import ProjectCard from "./project-card";

function Project() {
  return (
    <div className="w-full pt-6 md:pt-8 lg:pt-10">
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-10">
        Projects.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Project;

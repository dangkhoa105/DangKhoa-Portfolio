import { projects } from "@/constants";
import Reveal from "../reveal";
import ProjectCard from "./project-card";

function Project() {
  return (
    <div className="w-full pt-6 md:pt-8 lg:pt-10">
      <Reveal direction="right" distance={18}>
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-10">
          Projects.
        </h1>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            revealDelay={index * 75}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;

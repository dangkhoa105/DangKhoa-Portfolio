import { techStacks, tools } from "@/constants";
import ServiceCard from "./service-card";
import { useAbout } from "./useAbout";

function About() {
  const { age, experienceTime } = useAbout();

  return (
    <div className="w-full h-screen pt-20">
      <h1 className="text-6xl font-bold">Overview.</h1>
      <div className="flex flex-col gap-y-2 md:gap-y-4">
        <p>Hi everybody, I&apos;m {age} years old</p>
        <p>
          I graduated from{" "}
          <a
            href="https://www.uit.edu.vn/"
            target="_blank"
            className="underline text-accent-1"
          >
            Information of Technology
          </a>
          , with major is Software Engineer.
        </p>
        <p>
          Hello! I&apos;m a Mobile and Frontend Developer with {experienceTime}{" "}
          years of experience, specializing in building high-quality mobile and
          web applications.
        </p>
        <p>
          I mainly work with React Native for cross-platform mobile development
          and ReactJS for responsive, dynamic web interfaces. Over the years, I
          have created scalable, user-friendly apps that deliver great
          performance and engaging user experiences.
        </p>
        <p>
          I&apos;m passionate about clean code, thoughtful UI/UX, and modern
          technologies like TypeScript and Tailwind CSS. My goal is to craft
          solutions that not only meet technical requirements but also provide
          real value to users.
        </p>
        <p>
          I&apos;m always excited to learn, grow, and contribute to innovative
          projects that make a difference. Feel free to explore my work below!
        </p>
      </div>
      <ServiceCard title="Tech Stacks" listServices={techStacks} />
      <ServiceCard title="Tools" listServices={tools} />
    </div>
  );
}

export default About;

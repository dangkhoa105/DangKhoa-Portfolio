"use client";
import { techStacks, tools } from "@/constants";
import { useLoadSectionAnimation } from "@/hooks/useFadeAnimation";
import ServiceCard from "./service-card";
import { useAbout } from "./useAbout";

function About() {
  const { age, experienceTime } = useAbout();
  const { containerRef } = useLoadSectionAnimation({
    section: "about-section",
  });

  return (
    <div
      className="w-full min-h-screen p-4 md:p-6 lg:p-8 transition-opacity duration-500 opacity-0"
      ref={containerRef}
    >
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-10">
        Overview.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
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
            Hello! I&apos;m a Mobile and Frontend Developer with{" "}
            {experienceTime} years of experience, specializing in building
            high-quality mobile and web applications.
          </p>
          <p>
            I mainly work with React Native for cross-platform mobile
            development and ReactJS for responsive, dynamic web interfaces. Over
            the years, I have created scalable, user-friendly apps that deliver
            great performance and engaging user experiences.
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
        <div className="flex flex-col gap-y-8">
          <ServiceCard title="Tech Stacks" listServices={techStacks} />
          <ServiceCard title="Tools" listServices={tools} />
        </div>
      </div>
    </div>
  );
}

export default About;

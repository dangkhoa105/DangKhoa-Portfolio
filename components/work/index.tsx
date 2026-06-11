"use client";
import { useLoadSectionAnimation } from "@/hooks/useFadeAnimation";
import Project from "../project";
import Reveal from "../reveal";
import VerticalLine from "./vertical-line";

function Work() {
  const { ref, revealClassName, revealStyle } = useLoadSectionAnimation({
    threshold: 0.12,
  });

  return (
    <section
      id="work-section"
      className={`w-full min-h-screen p-4 md:p-6 lg:p-8 ${revealClassName}`}
      ref={ref}
      style={revealStyle}
    >
      <Reveal direction="right" distance={18}>
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-10">
          Work.
        </h1>
      </Reveal>
      <VerticalLine />
      <Project />
    </section>
  );
}

export default Work;

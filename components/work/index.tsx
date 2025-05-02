"use client";
import { useLoadSectionAnimation } from "@/hooks/useFadeAnimation";

function Work() {
  const { containerRef } = useLoadSectionAnimation({
    section: "work-section",
  });

  return (
    <section id="work-section">
      <div
        className="w-full min-h-screen p-4 md:p-6 lg:p-8 transition-opacity duration-500 opacity-0"
        ref={containerRef}
      >
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-10">
          Work.
        </h1>
      </div>
    </section>
  );
}

export default Work;

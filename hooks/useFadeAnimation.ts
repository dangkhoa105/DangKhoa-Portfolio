import { useEffect, useRef } from "react";

interface Props {
  section:
    | "hero-section"
    | "about-section"
    | "work-section"
    | "contact-section";
}

export const useLoadSectionAnimation = ({ section }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById(section);
      if (!target || !containerRef.current) return;

      const { top, bottom } = target.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      const isInView =
        top <= windowHeight * 0.85 && bottom >= windowHeight * 0.25;

      containerRef.current!.style.opacity = isInView ? "1" : "0";
    };

    const onScroll = () => requestAnimationFrame(handleScroll);

    document.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [section]);

  return {
    containerRef,
  };
};

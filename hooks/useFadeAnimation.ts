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
      if (!containerRef.current) return;

      const sections = document.querySelectorAll<HTMLElement>("section");

      sections.forEach(sec => {
        const { top, bottom, height } = sec.getBoundingClientRect();

        if (top <= height / 4 && bottom >= height / 4) {
          containerRef.current!.style.opacity = sec.id === section ? "1" : "0";
        }
      });
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

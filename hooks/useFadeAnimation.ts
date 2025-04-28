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
      const aboutSectionId = section;

      sections.forEach(section => {
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= 100 && bottom >= 100) {
          if (containerRef.current) {
            containerRef.current.style.opacity =
              section.id === aboutSectionId ? "1" : "0";
          }
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

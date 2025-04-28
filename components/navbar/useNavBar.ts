"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

interface NavInfoProps {
  positionX: number;
  positionY: number;
  width: number;
}

export const useNavBar = () => {
  const navRef = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const [navInfo, setNavInfo] = useState<NavInfoProps>({
    positionX: 0,
    positionY: 0,
    width: 0,
  });

  const setNavInfoSafe = useCallback((newInfo: NavInfoProps) => {
    setNavInfo(prev => {
      if (
        prev.positionX !== newInfo.positionX ||
        prev.positionY !== newInfo.positionY ||
        prev.width !== newInfo.width
      ) {
        return newInfo;
      }
      return prev;
    });
  }, []);

  const handleSetNavInfo = useCallback(
    (id: string) => {
      const current = navRef.current[id];
      if (current) {
        const rect = current.getBoundingClientRect();
        setNavInfoSafe({
          positionX: rect.x,
          positionY: rect.y + rect.height + 8,
          width: rect.width,
        });
      } else {
        const fallback =
          navRef.current["about-section"]?.getBoundingClientRect();
        setNavInfoSafe({
          positionX: 0,
          positionY: (fallback?.y ?? 0) + (fallback?.height ?? 0) + 8,
          width: 0,
        });
      }
    },
    [setNavInfoSafe]
  );

  const handleScrollToId = useCallback((id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, []);

  const handleClickNavItem = useCallback(
    (id: string) => {
      handleSetNavInfo(id);
      handleScrollToId(id);
    },
    [handleSetNavInfo, handleScrollToId]
  );

  useLayoutEffect(() => {
    handleClickNavItem("hero-section");
  }, [handleClickNavItem]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = document.querySelectorAll<HTMLElement>("section");
          let foundSection = "";

          sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              foundSection = section.id;
            }
          });

          handleSetNavInfo(foundSection || "hero-section");
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleSetNavInfo]);

  return {
    navRef,
    navInfo,
    handleClickNavItem,
  };
};

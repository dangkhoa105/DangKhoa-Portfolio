"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface RevealOptions<T extends HTMLElement = HTMLDivElement> {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  direction?: RevealDirection;
  distance?: number;
}

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
};

export const useRevealAnimation = <T extends HTMLElement = HTMLDivElement>({
  once = true,
  threshold = 0.18,
  rootMargin = "0px 0px -8% 0px",
  delay = 0,
  direction = "up",
  distance = 20,
}: RevealOptions<T> = {}) => {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        setIsInView(visible);

        if (visible && once) {
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, prefersReducedMotion, rootMargin, threshold]);

  const axisDistance =
    prefersReducedMotion || direction === "none" ? 0 : distance;
  const hiddenTransform = {
    up: `translate3d(0, ${axisDistance}px, 0)`,
    down: `translate3d(0, -${axisDistance}px, 0)`,
    left: `translate3d(${axisDistance}px, 0, 0)`,
    right: `translate3d(-${axisDistance}px, 0, 0)`,
    none: "translate3d(0, 0, 0)",
  }[direction];

  return {
    ref,
    isInView,
    revealStyle: {
      "--reveal-delay": `${delay}ms`,
      "--reveal-transform": hiddenTransform,
    } as CSSProperties,
    revealClassName: isInView ? "reveal reveal-visible" : "reveal",
  };
};

export const useLoadSectionAnimation = useRevealAnimation;

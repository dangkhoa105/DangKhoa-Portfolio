"use client";

import { useRevealAnimation } from "@/hooks/useFadeAnimation";
import { type HTMLAttributes, type ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  direction?: RevealDirection;
  distance?: number;
  once?: boolean;
  threshold?: number;
}

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 18,
  once = true,
  threshold = 0.16,
  style,
  ...props
}: Props) {
  const { ref, revealClassName, revealStyle } = useRevealAnimation({
    delay,
    direction,
    distance,
    once,
    threshold,
  });

  return (
    <div
      ref={ref}
      className={`${revealClassName} ${className}`.trim()}
      style={{
        ...revealStyle,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default Reveal;

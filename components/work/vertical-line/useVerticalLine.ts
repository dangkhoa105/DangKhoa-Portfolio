import { useRef } from "react";

export const useVerticalLine = () => {
  const elementRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  return {
    elementRef,
  };
};

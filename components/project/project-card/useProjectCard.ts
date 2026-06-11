import { useEffect, useRef, useState } from "react";

export const useProjectCard = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const isTiltEnabled = (e: React.PointerEvent) => {
    return e.pointerType === "mouse" && window.matchMedia("(hover: hover)").matches;
  };

  const resetTilt = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    if (boxRef.current) {
      boxRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
      boxRef.current.style.willChange = "auto";
    }
  };

  const updateTilt = () => {
    const box = boxRef.current;
    const rect = rectRef.current;
    if (!box || !rect) return;

    const x = pointerRef.current.x - rect.left;
    const y = pointerRef.current.y - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxRotate = 8;

    const rotateX = ((y - centerY) / centerY) * maxRotate;
    const rotateY = ((x - centerX) / centerX) * maxRotate;

    box.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    frameRef.current = null;
  };

  const handlePointerEnter = (e: React.PointerEvent) => {
    if (!isTiltEnabled(e) || !boxRef.current) return;

    rectRef.current = boxRef.current.getBoundingClientRect();
    boxRef.current.style.willChange = "transform";
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isTiltEnabled(e)) return;

    pointerRef.current = {
      x: e.clientX,
      y: e.clientY,
    };

    if (!rectRef.current && boxRef.current) {
      rectRef.current = boxRef.current.getBoundingClientRect();
    }

    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(updateTilt);
    }
  };

  const handlePointerLeave = () => resetTilt();

  const handleOpenDetailModal = () => {
    setIsShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseDetailModal = () => {
    setIsShowModal(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    return () => {
      resetTilt();
      document.body.style.overflow = "";
    };
  }, []);

  return {
    boxRef,
    isShowModal,
    handlePointerEnter,
    handlePointerMove,
    handlePointerLeave,
    handleOpenDetailModal,
    handleCloseDetailModal,
  };
};

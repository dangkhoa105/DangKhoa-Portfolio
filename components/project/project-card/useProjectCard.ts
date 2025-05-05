import { useRef, useState } from "react";

export const useProjectCard = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const box = boxRef.current;
    if (!box) return;

    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left; // x relative to box
    const y = e.clientY - rect.top; // y relative to box
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 25;
    const rotateY = ((x - centerX) / centerX) * 25;

    box.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (boxRef.current) {
      boxRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  const handleOpenDetailModal = () => {
    setIsShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseDetailModal = () => {
    setIsShowModal(false);
    document.body.style.overflow = "";
  };

  return {
    boxRef,
    isShowModal,
    handleMouseMove,
    handleMouseLeave,
    handleOpenDetailModal,
    handleCloseDetailModal,
  };
};

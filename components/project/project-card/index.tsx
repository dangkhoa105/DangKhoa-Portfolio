"use client";
import { Project } from "@/constants";
import { ANDROID, IOS, WEB } from "@/public/images";
import Image from "next/image";
import DetailModal from "../detail-modal";
import "./styles.css";
import { useProjectCard } from "./useProjectCard";

interface Props {
  project: Project;
}

function ProjectCard({ project }: Props) {
  const {
    boxRef,
    isShowModal,
    handleMouseMove,
    handleMouseLeave,
    handleOpenDetailModal,
    handleCloseDetailModal,
  } = useProjectCard();

  return (
    <>
      <div
        ref={boxRef}
        className="project-card flex flex-col rounded-xl overflow-hidden transition-transform duration-75 ease bg-border p-3 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleOpenDetailModal}
      >
        <div
          className="thumbnail mb-4 bg-white relative"
          style={
            { "--bg-url": `url(${project.thumbnail})` } as React.CSSProperties
          }
        >
          <div className="absolute right-0 flex gap-2 p-2">
            {!!project.references?.android && (
              <a
                href={project.references?.android}
                target="_blank"
                className="bg-gray-500/50 rounded p-0.5 shadow-2xl"
              >
                <Image src={ANDROID} alt="android" width={20} height={20} />
              </a>
            )}
            {!!project.references?.ios && (
              <a
                href={project.references?.ios}
                target="_blank"
                className="bg-gray-500/50 rounded p-0.5 shadow-2xl"
              >
                <Image src={IOS} alt="ios" width={20} height={20} />
              </a>
            )}
            {!!project.references?.web && (
              <a
                href={project.references?.web}
                target="_blank"
                className="bg-gray-500/50 rounded p-0.5 shadow-2xl"
              >
                <Image src={WEB} alt="web" width={20} height={20} />
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <h1 className="flex flex-1 text-lg font-bold">{project.title}</h1>
          <p>{project.descriptions.slice(0, 50)}...</p>
          <div className="flex flex-wrap gap-x-2">
            {project.domain.map((dom, index) => (
              <p
                key={dom}
                className={`text-sm ${
                  index % 2 === 0 ? "text-accent-1" : "text-accent-2"
                }`}
              >
                #{dom}
              </p>
            ))}
          </div>
        </div>
      </div>
      <DetailModal
        isShowPopup={isShowModal}
        project={project}
        handleClosePopup={handleCloseDetailModal}
      />
    </>
  );
}

export default ProjectCard;

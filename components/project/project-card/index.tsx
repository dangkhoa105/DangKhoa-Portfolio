"use client";
import { Project } from "@/constants";
import { ANDROID, IOS, WEB } from "@/public/images";
import Image from "next/image";
import { type CSSProperties } from "react";
import Reveal from "../../reveal";
import DetailModal from "../detail-modal";
import Domains from "../domains";
import "./styles.css";
import { useProjectCard } from "./useProjectCard";

interface Props {
  project: Project;
  revealDelay?: number;
}

function ProjectCard({ project, revealDelay = 0 }: Props) {
  const {
    boxRef,
    isShowModal,
    handlePointerEnter,
    handlePointerMove,
    handlePointerLeave,
    handleOpenDetailModal,
    handleCloseDetailModal,
  } = useProjectCard();

  return (
    <>
      <Reveal delay={revealDelay} distance={18}>
        <div
          ref={boxRef}
          className="project-card flex flex-col rounded-xl overflow-hidden transition-transform duration-150 ease-out bg-border p-3 cursor-pointer"
          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          onClick={handleOpenDetailModal}
        >
          <div
            className="thumbnail mb-4 bg-white relative"
            style={{ "--bg-url": `url(${project.thumbnail})` } as CSSProperties}
          >
            <div className="absolute right-0 flex gap-2 p-2">
              {!!project.references?.android && (
                <a
                  href={project.references?.android}
                  target="_blank"
                  className="bg-gray-500/50 rounded p-0.5 shadow-2xl"
                  onClick={event => event.stopPropagation()}
                >
                  <Image src={ANDROID} alt="android" width={20} height={20} />
                </a>
              )}
              {!!project.references?.ios && (
                <a
                  href={project.references?.ios}
                  target="_blank"
                  className="bg-gray-500/50 rounded p-0.5 shadow-2xl"
                  onClick={event => event.stopPropagation()}
                >
                  <Image src={IOS} alt="ios" width={20} height={20} />
                </a>
              )}
              {!!project.references?.web && (
                <a
                  href={project.references?.web}
                  target="_blank"
                  className="bg-gray-500/50 rounded p-0.5 shadow-2xl"
                  onClick={event => event.stopPropagation()}
                >
                  <Image src={WEB} alt="web" width={20} height={20} />
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-4">
            <h1 className="flex flex-1 text-lg font-bold">{project.title}</h1>
            <p>{project.descriptions.slice(0, 50)}...</p>
            <Domains domains={project.domain} />
          </div>
        </div>
      </Reveal>
      <DetailModal
        isShowPopup={isShowModal}
        project={project}
        handleClosePopup={handleCloseDetailModal}
      />
    </>
  );
}

export default ProjectCard;

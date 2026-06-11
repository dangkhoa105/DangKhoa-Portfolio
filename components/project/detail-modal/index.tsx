"use client";

import { Project } from "@/constants";
import { ANDROID, CLOSE, GROUP, IOS, WEB } from "@/public/images";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Domains from "../domains";
import "./styles.css";

interface Props {
  isShowPopup: boolean;
  project: Project;
  handleClosePopup: () => void;
}

function DetailModal({ isShowPopup, project, handleClosePopup }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isShowPopup) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isShowPopup]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence initial={false}>
      {isShowPopup ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] bg-black/70 p-4 md:p-8 flex items-center justify-center"
          onClick={handleClosePopup}
        >
          <motion.div
            initial={{ y: 32, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 32, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-[1100px] max-h-[85dvh] bg-text text-primary rounded-xl overflow-y-auto p-4 md:p-6 lg:p-8"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-text pb-4">
              <div className="flex justify-between items-start gap-4">
                <h1 className="flex-1 text-4xl md:text-6xl lg:text-7xl font-bold">
                  {project.title}
                </h1>

                <button
                  type="button"
                  className="shrink-0 rounded-full cursor-pointer"
                  onClick={handleClosePopup}
                >
                  <Image src={CLOSE} alt="close-icon" width={32} height={32} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col pt-4 gap-10 text-sm md:text-base lg:text-lg">
              {/* Links, Domains, Members */}
              <div className="flex flex-col-reverse md:flex-row md:items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-x-6">
                  <Domains domains={project.domain} />

                  <div className="flex items-center text-sm gap-x-2 px-2 py-1 border-2 border-dashed border-primary rounded-lg">
                    {project.member}
                    <Image
                      src={GROUP}
                      alt="group-icon"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>

                {!!project.references && (
                  <div className="flex gap-2">
                    {!!project.references?.android && (
                      <a
                        href={project.references.android}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white rounded p-0.5 shadow-2xl"
                      >
                        <Image
                          src={ANDROID}
                          alt="android"
                          width={20}
                          height={20}
                        />
                      </a>
                    )}

                    {!!project.references?.ios && (
                      <a
                        href={project.references.ios}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white rounded p-0.5 shadow-2xl"
                      >
                        <Image src={IOS} alt="ios" width={20} height={20} />
                      </a>
                    )}

                    {!!project.references?.web && (
                      <a
                        href={project.references.web}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white rounded p-0.5 shadow-2xl"
                      >
                        <Image src={WEB} alt="web" width={20} height={20} />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Information */}
              <div className="flex flex-col md:flex-row gap-10">
                <p className="flex-1">{project.descriptions}</p>

                <div className="md:w-[280px] shrink-0">
                  <p className="font-bold">Tech Stack</p>
                  <ul>
                    {project.technologies.map(tech => (
                      <li key={tech}>- {tech}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <p className="font-bold">Responsibilities</p>
                <ul>
                  {project.responsibilities.map(res => (
                    <li key={res}>- {res}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

export default DetailModal;

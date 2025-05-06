import { Project } from "@/constants";
import { ANDROID, CLOSE, GROUP, IOS, WEB } from "@/public/images";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Domains from "../domains";
import "./styles.css";

interface Props {
  isShowPopup: boolean;
  project: Project;
  handleClosePopup: () => void;
}

function DetailModal({ isShowPopup, project, handleClosePopup }: Props) {
  return (
    <AnimatePresence initial={false}>
      {isShowPopup ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/70 p-6 md:p-8 lg:p-10 z-20"
          onClick={handleClosePopup}
        >
          <motion.div
            initial={{ y: 32 }}
            animate={{ y: 0 }}
            exit={{ y: 32 }}
            transition={{ duration: 0.5 }}
            className="size-full bg-text text-primary rounded-xl z-20 overflow-y-auto gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8  pt-0 md:pt-0 lg:pt-0"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky inset-0 py-2 md:py-4 lg:py-6 z-10 bg-text">
              <div className="flex justify-between items-start gap-4">
                <h1 className="flex flex-1 text-5xl md:text-6xl lg:text-8xl font-bold">
                  {project.title}
                </h1>
                <button
                  className="rounded-full cursor-pointer"
                  onClick={handleClosePopup}
                >
                  <Image src={CLOSE} alt="close-icon" width={32} height={32} />
                </button>
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-col pt-4 px-4 md:px-6 lg:px-30 gap-10 text-sm md:text-md lg:text-lg">
              {/* Links, Domains, Members */}
              <div className="flex flex-col-reverse md:flex-row md:items-center gap-x-6 gap-y-1">
                <div className="flex items-center gap-x-6">
                  <Domains domains={project.domain} />
                  <div className="flex items-center text-sm gap-x-2 px-2 py-1 border-2 border-dashed border-primary rounded-lg">
                    {project.member}{" "}
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
                        href={project.references?.android}
                        target="_blank"
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
                        href={project.references?.ios}
                        target="_blank"
                        className="bg-white rounded p-0.5 shadow-2xl"
                      >
                        <Image src={IOS} alt="ios" width={20} height={20} />
                      </a>
                    )}
                    {!!project.references?.web && (
                      <a
                        href={project.references?.web}
                        target="_blank"
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
                <div>
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
    </AnimatePresence>
  );
}

export default DetailModal;

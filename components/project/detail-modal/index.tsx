import { Project } from "@/constants";
import { CLOSE } from "@/public/images";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

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
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/30 z-20"
          onClick={handleClosePopup}
        >
          <div className="fixed top-1/2 translate-x-1/2 -translate-y-1/2 w-1/2 bg-white z-20">
            <div className="w-full flex justify-end">
              <button
                className="m-4 mb-8 rounded-full p-2 bg-text cursor-pointer"
                onClick={handleClosePopup}
              >
                <Image src={CLOSE} alt="close-icon" width={32} height={32} />
              </button>
            </div>
            <div>{project.title}</div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default DetailModal;

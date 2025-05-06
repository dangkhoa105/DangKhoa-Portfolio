"use client";
import { navLinks } from "@/constants";
import { CLOSE, LOGO } from "@/public/images";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useNavBar } from "./useNavBar";

function Navbar() {
  const {
    navRef,
    navInfo,
    isShowPopup,
    handleClickNavItem,
    handleOpenPopup,
    handleClosePopup,
  } = useNavBar();

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 bg-transparent">
      <div
        className="flex items-center gap-x-4 font-bold text-xl mr-8 cursor-pointer"
        onClick={() => handleClickNavItem("hero-section")}
      >
        <Image src={LOGO} alt="logo" height={40} />
        <p className="">
          Dang Khoa
          <span className="sm:block hidden text-sm">
            Mobile & Frontend Development
          </span>
        </p>
      </div>
      <ul className="hidden md:flex md:gap-x-10 lg:gap-x-20">
        {navLinks.map(link => (
          <li
            key={link.id}
            ref={el => {
              navRef.current[link.id] = el;
            }}
            className="cursor-pointer"
            onClick={() => handleClickNavItem(link.id)}
          >
            {link.label}
          </li>
        ))}
        <div
          className="absolute top-0 h-0.5 bg-primary md:bg-text transition-all duration-700 ease-in-out"
          style={{
            width: navInfo.width,
            left: navInfo.positionX,
            top: navInfo.positionY,
          }}
        />
      </ul>
      <button className="md:hidden cursor-pointer" onClick={handleOpenPopup}>
        <div className="w-10 h-0.5 bg-text mb-2" />
        <div className="w-5 h-0.5 bg-text" />
      </button>
      <AnimatePresence initial={false}>
        {isShowPopup ? (
          <motion.div
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-text"
          >
            <div className="w-full flex justify-end">
              <button
                className="m-4 mb-8 rounded-full p-2 bg-text cursor-pointer"
                onClick={handleClosePopup}
              >
                <Image src={CLOSE} alt="close-icon" width={32} height={32} />
              </button>
            </div>
            <ul className="flex flex-col gap-4 p-4">
              {[
                {
                  id: "hero-section",
                  label: "Home",
                },
                ...navLinks,
              ].map(link => (
                <li
                  key={link.id}
                  ref={el => {
                    navRef.current[link.id] = el;
                  }}
                  className="cursor-pointer text-primary text-2xl font-bold"
                  onClick={() => handleClickNavItem(link.id)}
                >
                  {link.label}
                </li>
              ))}
              {!isShowPopup && (
                <div
                  className={`absolute top-0 h-0.5 bg-text transition-all duration-700 ease-in-out`}
                  style={{
                    width: navInfo.width,
                    left: navInfo.positionX,
                    top: navInfo.positionY,
                  }}
                />
              )}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

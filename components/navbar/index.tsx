"use client";
import { navLinks } from "@/constants";
import { LOGO } from "@/public/images";
import Image from "next/image";
import { useNavBar } from "./useNavBar";

function Navbar() {
  const { navRef, navInfo, handleClickNavItem } = useNavBar();

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 bg-transparent">
      <div
        className="flex items-center gap-x-4 font-bold text-xl mr-8 cursor-pointer"
        onClick={() => handleClickNavItem("hero-section")}
      >
        <Image src={LOGO} alt="logo" height={40} objectFit="contain" />
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
          className="absolute top-0 h-0.5 bg-text transition-all duration-700 ease-in-out"
          style={{
            width: navInfo.width,
            left: navInfo.positionX,
            top: navInfo.positionY,
          }}
        />
      </ul>
    </nav>
  );
}

export default Navbar;

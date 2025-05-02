"use client";
import { motion } from "motion/react";
import AstronautCanvas from "../canvas/astronaut";
import SkyCanvas from "../canvas/sky";

function Hero() {
  return (
    <section id="hero-section" className="relative flex w-full h-screen">
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col gap-y-2 md:gap-y-4">
          <p className="text-xs md:text-xl ml-2 md:ml-4 lg:ml-8">
            Hi, I&apos;m
          </p>
          <p className="text-5xl md:text-6xl lg:text-8xl font-bold">
            Dang<span className="pl-2 md:pl-4">Khoa</span>
          </p>
          <p className="text-xs md:text-xl mr-2 md:mr-4 lg:mr-8 self-end text-right">
            Mobile & Frontend <br className="inline lg:hidden" />
            <span className="hidden lg:inline">| </span>Development
          </p>
        </div>
      </div>

      <SkyCanvas />
      <AstronautCanvas />

      <motion.div className="flex absolute bottom-0 left-1/2 -translate-y-1/2 w-8 h-12 bg-transparent border-4 rounded-2xl items-center justify-center">
        <motion.div
          className="w-[4px] h-3 bg-white rounded-md"
          animate={{ y: [4, -4, 4] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}

export default Hero;

"use client";
import { useLoadSectionAnimation } from "@/hooks/useFadeAnimation";
import AstronautCanvas from "../canvas/astronaut";
import SkyCanvas from "../canvas/sky";

function Contact() {
  const { containerRef } = useLoadSectionAnimation({
    section: "contact-section",
  });

  return (
    <section
      ref={containerRef}
      id="contact-section"
      className="relative flex flex-col w-full h-screen p-4 md:p-6 lg:p-8 transition-opacity duration-500 opacity-0"
    >
      <SkyCanvas />
      <AstronautCanvas />

      <div className="flex flex-1 justify-center items-center">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-10 text-center">
          Let&apos;s work
          <br />
          <span>Together</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 align-top gap-4 md:gap-8 z-30">
        <div className="flex flex-col flex-1 md:place-self-center wrap-break-word gap-y-2">
          <p className="uppercase text-lg mb-6">Contact</p>
          <a href="tel:+84914080804">+84914080804</a>
          <a href="mailto:dangkhoa.dk9@gmail.com">dangkhoa.dk9@gmail.com</a>
        </div>
        <div className="flex flex-col md:place-self-center items-end md:items-baseline wrap-break-word gap-y-2">
          <p className="uppercase text-lg mb-6">My Space</p>
          <a href="https://github.com/dangkhoa105" target="_blank">
            Github
          </a>
          <a href="https://www.linkedin.com/in/dangkhoa105/" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

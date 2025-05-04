import { Experience } from "@/constants";
import Image from "next/image";
import React, {
  forwardRef,
  RefObject,
  useImperativeHandle,
  useRef,
} from "react";
import "./styles.css";

interface Props {
  element: Experience;
  index: number;
  elementRefs: RefObject<{
    [key: string]: HTMLDivElement | null;
  }>;
}

const Element = forwardRef<HTMLDivElement, Props>(({ element, index }, ref) => {
  const divRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => divRef.current!);

  return (
    <div
      ref={divRef}
      className={`flex flex-col ${
        index % 2 === 0 ? "items-start" : "items-end"
      }`}
    >
      <div
        className={`${
          index % 2 === 0 ? "element-left" : "element-right"
        } flex flex-col relative p-4 bg-border rounded mt-4 md:mt-8 gap-3`}
      >
        <p className="font-black">{element.title}</p>
        <div className="flex flex-col gap-1">
          <a
            href={element.companyLink}
            target="_blank"
            className="text-xs text-accent-1"
          >
            {element.companyName}
          </a>
          <a
            href={element.hiringLink}
            target="_blank"
            className="text-xs text-accent-1"
          >
            Career
          </a>
        </div>
        <ul className="text-[10px] md:text-sm list-disc pl-4">
          {!!element.description &&
            element.description.map((desc, idx) => <li key={idx}>{desc}</li>)}
        </ul>
        <div
          className={`absolute top-4 size-1 md:size-2 bg-accent-3 rotate-45 rounded-[1px] -z-10 ${
            index % 2 ? "-left-0.5 md:-left-1" : "-right-0.5 md:-right-1"
          }`}
        />
        <div
          className={`absolute top-2 md:top-1 lg:top-0 size-5 md:size-7 lg:size-10 rounded-full border z-50 overflow-hidden ${
            index % 2
              ? "-left-6.5 md:-left-9.5 lg:-left-13"
              : "-right-7.5 md:-right-10 lg:-right-14"
          }`}
        >
          <Image
            src={element.logo}
            alt="logo"
            fill
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
});

Element.displayName = "Element";

export default React.memo(Element);

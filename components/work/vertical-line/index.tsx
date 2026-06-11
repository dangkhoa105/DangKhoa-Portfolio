import Reveal from "@/components/reveal";
import { experiences } from "@/constants";
import Element from "./element";
import { useVerticalLine } from "./useVerticalLine";

function VerticalLine() {
  const { elementRef } = useVerticalLine();

  return (
    <div className="flex flex-col relative pb-4 md:pb-6 lg:pb-8 justify-center">
      {experiences.map((item, index) => (
        <Reveal
          key={item.companyName}
          className="w-full"
          delay={index * 90}
          direction={index % 2 === 0 ? "right" : "left"}
          distance={18}
        >
          <Element
            ref={el => {
              elementRef.current[index] = el;
            }}
            element={item}
            index={index}
            elementRefs={elementRef}
          />
        </Reveal>
      ))}
      <div className="w-1 top-0 absolute left-1/2 right-1/2 translate-x-1/2 h-full bg-text rounded -z-40" />
    </div>
  );
}

export default VerticalLine;

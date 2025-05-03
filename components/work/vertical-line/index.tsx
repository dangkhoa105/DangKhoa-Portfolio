import { experiences } from "@/constants";
import Element from "./element";
import { useVerticalLine } from "./useVerticalLine";

function VerticalLine() {
  const { elementRef } = useVerticalLine();

  return (
    <div className="flex flex-col relative pb-4 md:pb-6 lg:pb-8 justify-center">
      {experiences.map((item, index) => (
        <Element
          key={item.companyName}
          ref={el => {
            elementRef.current[index] = el;
          }}
          element={item}
          index={index}
          elementRefs={elementRef}
        />
      ))}
      <div className="w-1 top-0 absolute left-1/2 right-1/2 translate-x-1/2 h-full bg-text rounded" />
    </div>
  );
}

export default VerticalLine;

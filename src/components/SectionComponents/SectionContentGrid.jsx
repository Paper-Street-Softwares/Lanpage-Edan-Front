import { Children } from "react";

export default function SectionContentGrid({ children }) {
  const childrenArray = Children.toArray(children);

  return (
    <div className="flex flex-wrap w-full h-auto">
      {childrenArray.map((child, index) => (
        <div key={index} className="w-full sm:w-1/2 px-6 mb-12">
          {child}
        </div>
      ))}
    </div>
  );
}

import { Children } from "react";

export default function SectionContent({ children }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="flex flex-wrap justify-between w-full h-auto">
      {childrenArray}
    </div>
  );
}

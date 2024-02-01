import { Children } from "react";

export default function SectionContent({ children }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="flex flex-wrap justify-between items-start w-full h-auto opacity-0 animate-fade-in">
      {childrenArray}
    </div>
  );
}

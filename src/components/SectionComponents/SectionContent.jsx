import { Children } from "react";

export default function SectionContent({ children }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="flex flex-wrap items-start justify-around w-full h-auto opacity-0 animate-fade-in tablet2:justify-between">
      {childrenArray}
    </div>
  );
}

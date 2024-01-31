import { Children } from "react";

export default function SectionContent({ children }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="bg-blue-100 flex flex-wrap justify-between w-full h-auto opacity-0 animate-fade-in">
      {childrenArray}
    </div>
  );
}

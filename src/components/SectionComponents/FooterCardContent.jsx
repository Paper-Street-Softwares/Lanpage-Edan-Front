import { Children } from "react";

export default function FooterCardContent({ children }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="w-64 text-sm font-light text-white bg-red-700 font-poppins">
      {childrenArray}
    </div>
  );
}

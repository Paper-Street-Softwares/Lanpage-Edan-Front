import { Children } from "react";

export default function FooterCardContent({ children }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="w-64 font-light text-white text-10px font-poppins lg:w-64 md:w-48 md:text-10px lg:text-xs">
      {childrenArray}
    </div>
  );
}

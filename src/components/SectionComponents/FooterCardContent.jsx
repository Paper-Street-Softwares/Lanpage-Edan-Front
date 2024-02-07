import { Children } from "react";

export default function FooterCardContent({ children }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="w-64 mb-10 font-light text-white text-10px font-poppins lg:w-64 tablet2:w-48 tablet2:text-10px lg:text-xs">
      {childrenArray}
    </div>
  );
}

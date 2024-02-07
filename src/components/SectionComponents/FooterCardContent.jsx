import { Children } from "react";

export default function FooterCardContent({ children }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="w-full mb-10 font-light text-center text-white text-xxs font-poppins phone3:text-left desktop1:w-64 tablet2:w-48 tablet2:text-xxs desktop1:text-xs">
      {childrenArray}
    </div>
  );
}

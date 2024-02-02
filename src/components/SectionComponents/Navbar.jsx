import { Children } from "react";

export default function Navbar({ children }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="justify-center h-auto mx-auto my-4 opacity-0 content animate-fade-in">
      <div className="flex items-center">{childrenArray}</div>
    </div>
  );
}

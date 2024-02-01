import { Children } from "react";

export default function Navbar({ children }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="content justify-center my-4 mx-auto h-auto opacity-0 animate-fade-in">
      <div className="flex items-center">{childrenArray}</div>
    </div>
  );
}

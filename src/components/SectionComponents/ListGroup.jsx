import { useState, useEffect } from "react";
import ListGroupItem from "./ListGroupItem";

export default function ListGroup() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul
      className={`flex items-center justify-end gap-8 w-full h-auto font-bold text-sm font-poppins ${
        scrolling
          ? "text-black transition-color duration-500"
          : "text-white transition-color duration-500"
      }`}
    >
      <ListGroupItem text="início" />
      <ListGroupItem text="sobre nós" />
      <ListGroupItem text="serviços" />
      <ListGroupItem text="links" />
      <ListGroupItem text="certidões" />
      <ListGroupItem text="contato" />
    </ul>
  );
}

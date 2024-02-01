import React, { useState, useEffect } from "react";
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
      className={`flex justify-between font-poppins ${
        scrolling
          ? "text-black transition-color duration-500"
          : "text-white transition-color duration-500"
      }`}
    >
      <ListGroupItem id="home" text="início" />
      <ListGroupItem id="about" text="sobre nós" />
      <ListGroupItem id="services" text="serviços" />
      <ListGroupItem id="links" text="links" />
      <ListGroupItem id="contact" text="contato" />
    </ul>
  );
}

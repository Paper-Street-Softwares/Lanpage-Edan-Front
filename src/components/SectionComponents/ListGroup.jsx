import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
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
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-100}
        className="cursor-pointer"
      >
        <ListGroupItem text="início" />
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-100}
        className="cursor-pointer"
      >
        <ListGroupItem text="sobre nós" />
      </Link>
      <Link
        to="services"
        smooth={true}
        duration={500}
        offset={-100}
        className="cursor-pointer"
      >
        <ListGroupItem text="serviços" />
      </Link>
      <Link
        to="links"
        smooth={true}
        duration={500}
        offset={-100}
        className="cursor-pointer"
      >
        <ListGroupItem text="links" />
      </Link>
      <Link
        to="certificates"
        smooth={true}
        duration={500}
        offset={-100}
        className="cursor-pointer"
      >
        <ListGroupItem text="certidões" />
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-170}
        className="cursor-pointer"
      >
        <ListGroupItem text="contato" />
      </Link>
    </ul>
  );
}

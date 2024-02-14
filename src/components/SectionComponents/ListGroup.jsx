import { useState, useEffect } from "react";
import ListGroupItem from "./ListGroupItem";
import { Link as ScrollLink } from "react-scroll";

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
      <ScrollLink
        to="home"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
      >
        <ListGroupItem text="início" />
      </ScrollLink>
      <ScrollLink
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
      >
        <ListGroupItem text="sobre nós" />
      </ScrollLink>
      <ScrollLink
        to="services"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
      >
        <ListGroupItem text="serviços" />
      </ScrollLink>
      <ScrollLink
        to="links"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
      >
        <ListGroupItem text="links" />
      </ScrollLink>
      <ScrollLink
        to="certificates"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
      >
        <ListGroupItem text="certidões" />
      </ScrollLink>
      <ScrollLink
        to="contact"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-170}
        duration={800}
      >
        <ListGroupItem text="contato" />
      </ScrollLink>
    </ul>
  );
}

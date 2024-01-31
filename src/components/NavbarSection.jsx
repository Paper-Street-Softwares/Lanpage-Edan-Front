import React, { useState, useEffect } from "react";
import SectionContent from "../components/SectionComponents/SectionContent";
import Navbar from "./SectionComponents/Navbar";
import Logo from "../style/assets/images/Logo.png";

export default function NavbarSection() {
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
    <div className="content">
      <div
        className={`fixed full ${
          scrolling
            ? "bg-white border-b-4 border-mediumgreen transition-bg duration-300"
            : ""
        }`}
      >
        <SectionContent>
          <Navbar>
            <div className="w-1/5 mr-10">
              <div className="item-center">
                <img src={Logo} alt="Logo EDAN" />
              </div>
            </div>
            <div className="w-4/5 ml-32 items-center">
              <div className="w-auto">
                <ul
                  className={`flex justify-between font-poppins ${
                    scrolling
                      ? "text-black transition-color duration-300"
                      : "text-white transition-color duration-300"
                  }`}
                >
                  <li>
                    <a href="#inicio">INÍCIO</a>
                  </li>
                  <li>
                    <a href="#sobre">SOBRE</a>
                  </li>
                  <li>
                    <a href="#servicos">SERVIÇOS</a>
                  </li>
                  <li>
                    <a href="#links">LINKS</a>
                  </li>
                  <li>
                    <a href="#contatos">CONTATOS</a>
                  </li>
                </ul>
              </div>
            </div>
          </Navbar>
        </SectionContent>
      </div>
    </div>
  );
}

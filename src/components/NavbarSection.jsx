import React, { useState, useEffect } from "react";
import SectionContent from "../components/SectionComponents/SectionContent";
import Navbar from "./SectionComponents/Navbar";
import Logo from "../style/assets/images/Logo.png";
import ListGroup from "./SectionComponents/ListGroup";
import Sidebar from "./SectionComponents/Sidebar";

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
            <div className="items-center w-4/5 ml-32">
              <div className="w-auto">
                <ListGroup />
              </div>
            </div>
          </Navbar>
        </SectionContent>
        <Sidebar />
      </div>
    </div>
  );
}

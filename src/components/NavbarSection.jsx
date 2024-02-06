import React, { useState, useEffect } from "react";
import Navbar from "./SectionComponents/Navbar";
import Logo from "../style/assets/images/Logo.png";
import ListGroup from "./SectionComponents/ListGroup";

export default function NavbarSection() {
  const [scrolling, setScrolling] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
        <Navbar>
          <div className="w-1/5 mr-14">
            <div className="item-center">
              <img src={Logo} alt="Logo EDAN" />
            </div>
          </div>
          <div className="items-center w-4/5 ml-32">
            <button className="block md:hidden" onClick={toggleSidebar}>
              menu
            </button>
            <div className={`md:flex ${sidebarOpen ? "block" : "hidden"}`}>
              <ul className="gap-4 md:flex">
                <ListGroup />
              </ul>
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
}

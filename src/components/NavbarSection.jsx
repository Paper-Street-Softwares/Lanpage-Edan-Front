import React, { useState, useEffect } from "react";
import Navbar from "./SectionComponents/Navbar";
import Logo from "../style/assets/images/Logo.png";
import ListGroup from "./SectionComponents/ListGroup";
import Sidebar from "./SectionComponents/Sidebar";
import { Menu, X } from "lucide-react";

export default function NavbarSection() {
  const [scrolling, setScrolling] = useState(false);
  const [showListGroup, setShowListGroup] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [showSidebarContent, setShowSidebarContent] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setShowMenuIcon(!showMenuIcon);
    setShowSidebarContent(!showSidebarContent);
  };

  const handleResize = () => {
    if (window.innerWidth <= 435) {
      setShowListGroup(false);
    } else {
      setShowListGroup(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="content">
      <div
        className={`fixed w-full bg-white bg-opacity-0 ${
          scrolling
            ? "bg-opacity-100 shadow-lg bg-transition-opacity duration-1000"
            : ""
        }`}
      >
        <Navbar>
          <img src={Logo} alt="Logo Edan" className="absolute left-0 h-12 " />
          <button
            onClick={toggleSidebar}
            className="absolute right-0 mr-4 -top-4 tablet1:hidden"
          >
            {showMenuIcon ? (
              <Menu
                className={`w-8 h-8 ${scrolling ? "text-black" : "text-white"}`}
              />
            ) : (
              <X
                className={`w-8 h-8 ${scrolling ? "text-black" : "text-white"}`}
              />
            )}
          </button>
          {showListGroup ? <ListGroup /> : null}
        </Navbar>
        <div
          className={`animate-slide-down ${showSidebar ? "block" : "hidden"}`}
        >
          {showSidebar ? <Sidebar showSidebar={showSidebarContent} /> : null}
        </div>
      </div>
    </div>
  );
}

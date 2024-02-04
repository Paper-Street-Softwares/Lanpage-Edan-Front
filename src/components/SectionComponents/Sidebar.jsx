import React, { useState } from "react";

export default function Sidebar() {
  const [showSublistServices, setShowSublistServices] = useState(false);
  const [showSublistLinks, setShowSublistLinks] = useState(false);

  const toggleSublistServices = () => {
    setShowSublistServices(!showSublistServices);
    setShowSublistLinks(false);
  };

  const toggleSublistLinks = () => {
    setShowSublistLinks(!showSublistLinks);
    setShowSublistServices(false);
  };

  return (
    <div className="flex h-screen overflow-hidden text-black bg-white">
      <div className="relative">
        <div
          className={`flex justify-center w-64 p-4 bg-white font-poppins relative ${
            showSublistServices || showSublistLinks ? "mb-16" : ""
          }`}
        >
          <ul className="text-center text-black">
            <li className="mb-2">
              <a href="home" className="hover:text-green-300">
                Início
              </a>
            </li>
            <li className="mb-2">
              <a href="about" className="hover:text-green-300">
                Sobre Nós
              </a>
            </li>
            <li className="relative mb-2" onClick={toggleSublistServices}>
              <span className="cursor-pointer hover:text-green-300">
                Serviços
              </span>
              {showSublistServices && (
                <ul className="relative left-0 p-4 text-black bg-white top-full">
                  <li className="mb-2">
                    <a href="service1" className="hover:text-green-300">
                      Serviço 1123123123
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="service2" className="hover:text-green-300">
                      Serviço 2
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative mb-2" onClick={toggleSublistLinks}>
              <span className="cursor-pointer hover:text-green-300">Links</span>
              {showSublistLinks && (
                <ul className="relative left-0 p-4 text-black bg-white top-full">
                  <li className="mb-2">
                    <a href="link1" className="hover:text-green-300">
                      Link 1
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="link2" className="hover:text-green-300">
                      Link 2
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <a href="contact" className="hover:text-green-300">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

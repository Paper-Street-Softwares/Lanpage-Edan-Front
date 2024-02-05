// FloatingWhatsappButton.js
import React, { useState, useEffect } from "react";
import whatsappGif from "../style/assets/icons/floatingElements/whatsappGif.gif";

const FloatingWhatsappButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openWhatsappLink = () => {
    window.open("https://wa.me/5573999612263", "_blank");
  };

  return (
    <button
      className={`${
        isVisible ? "block animate-fade-in" : "hidden"
      } fixed bottom-4 right-4 p-4 text-white rounded-full focus:outline-none transition`}
      onClick={openWhatsappLink}
    >
      <img className="w-20" src={whatsappGif} alt="Floating WhatsApp Button" />
    </button>
  );
};

export default FloatingWhatsappButton;

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
    window.open("https://wa.me/5573999612263", "_blank", "noopener");
  };

  return (
    <button
      className={`${
        isVisible ? "block animate-fade-in" : "hidden"
      } fixed bottom-2 right-3 p-4 text-white rounded-full focus:outline-none transition`}
      onClick={openWhatsappLink}
    >
      <img className="w-16" src={whatsappGif} alt="Floating WhatsApp Button" />
    </button>
  );
};

export default FloatingWhatsappButton;

import React, { useState, useEffect } from "react";
import whatsappGif from "../style/assets/icons/floatingElements/whatsappGif.gif";
import Modal from "./SectionComponents/Modal";

const FloatingWhatsappButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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

  return (
    <button
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-2 right-3 p-4 text-white rounded-full focus:outline-none transition`}
      onClick={() => setOpenModal(!openModal)}
    >
      <img className="w-16" src={whatsappGif} alt="Floating WhatsApp Button" />
      <Modal isOpen={openModal} setCloseModal={setOpenModal} />
    </button>
  );
};

export default FloatingWhatsappButton;

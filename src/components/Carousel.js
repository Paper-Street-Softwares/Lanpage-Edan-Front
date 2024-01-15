import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../style/css/componentsStyle/Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    require("../style/assets/images/slider1.png"),
    require("../style/assets/images/slider2.png"),
    require("../style/assets/images/slider3.png"),
  ];
  const texts = ["Texto 1", "Texto 2", "Texto 3"];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextClick, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, handleNextClick]);

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <div className="maskLayout-Carousel" />
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <div className="text-overlay">
          <p>{texts[currentIndex]}</p>
          <div className="buttons">
            <button id="btnAbout">Sobre</button>
            <button id="btnCareer">Carreira</button>
          </div>
        </div>
      </div>
      <div className="carousel-navigation">
        <button onClick={handlePrevClick}>
          <FaArrowLeft />
        </button>
        <button onClick={handleNextClick}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

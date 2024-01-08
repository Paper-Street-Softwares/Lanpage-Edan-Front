import "../style/css/componentsStyle/carrousel.css";
import "../controllers/Slider";
import img1 from "../images/carrossel/cloud1.jpg";
import img2 from "../images/carrossel/cloud2.jpg";
import img3 from "../images/carrossel/cloud3.jpg";
import ButtonSlide from "./ButtonSlide";
import React, { useState } from "react";

import { MdArrowForwardIos } from "react-icons/md";

function Carrousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  return (
    <div className="wrapper-slider">
      <ButtonSlide onNext={handleNextSlide} onPrev={handlePrevSlide} />
      <div className="wrapper-images">
        <div className={`slider ${currentSlide === 0 ? "on" : ""}`}>
          <h1>TEXT1</h1>
          <img src={img1} alt="cloud1" />
        </div>

        <div className={`slider ${currentSlide === 1 ? "on" : ""}`}>
          <h1>TEXT2</h1>
          <img src={img2} alt="cloud2" />
        </div>

        <div className={`slider ${currentSlide === 2 ? "on" : ""}`}>
          <h1>TEXT3</h1>
          <img src={img3} alt="cloud3" />
        </div>
      </div>
    </div>
  );
}

export default Carrousel;

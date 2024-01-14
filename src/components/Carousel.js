import React, { useState, useEffect } from "react";
import "../style/css/componentsStyle/Carousel.css";
import Image1 from "../style/assets/images/image1.jpg";
import Image2 from "../style/assets/images/image2.jpg";
import Image3 from "../style/assets/images/image3.jpg";
import Image4 from "../style/assets/images/image4.jpg";
import Image5 from "../style/assets/images/image5.jpg";

function Carrousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [Image1, Image2, Image3, Image4, Image5];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="wrapper-Slider">
      <div className="container-slider">
        <img src={images[currentImage]} alt={`Imagem ${currentImage + 1}`} />
        <button onClick={prevImage}>AVANÇAR</button>
        <button onClick={nextImage}>VOLTAR</button>
      </div>
    </div>
  );
}

export default Carrousel;

import React, { useState, useEffect } from "react";
import "../style/css/componentsStyle/Carousel.css";
import Image1 from "../style/assets/images/image1.jpg";
import Image2 from "../style/assets/images/image2.jpg";
import Image3 from "../style/assets/images/image3.jpg";
import Image4 from "../style/assets/images/image4.jpg";
import Image5 from "../style/assets/images/image5.jpg";

const carouselData = [
  {
    image: Image1,
    text: "TEXTO EXEMPLO DA IMAGEM 1",
    buttons: [
      { label: "Sobre", action: () => console.log("Sobre clicado") },
      {
        label: "Carreira",
        action: () => console.log("Carreira clicado"),
      },
    ],
  },
  {
    image: Image2,
    text: "TEXTO EXEMPLO DA IMAGEM 2",
    buttons: [
      { label: "Sobre", action: () => console.log("Sobre clicado") },
      {
        label: "Carreira",
        action: () => console.log("Carreira clicado"),
      },
    ],
  },
  {
    image: Image3,
    text: "TEXTO EXEMPLO DA IMAGEM 3",
    buttons: [
      { label: "Sobre", action: () => console.log("Sobre clicado") },
      {
        label: "Carreira",
        action: () => console.log("Carreira clicado"),
      },
    ],
  },
  {
    image: Image4,
    text: "TEXTO EXEMPLO DA IMAGEM 4",
    buttons: [
      { label: "Sobre", action: () => console.log("Sobre clicado") },
      {
        label: "Carreira",
        action: () => console.log("Carreira clicado"),
      },
    ],
  },
  {
    image: Image5,
    text: "TEXTO EXEMPLO DA IMAGEM 5",
    buttons: [
      { label: "Sobre", action: () => console.log("Sobre clicado") },
      {
        label: "Carreira",
        action: () => console.log("Carreira clicado"),
      },
    ],
  },
];

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
      <div className="container-Slider">
        <div className="imageContainer-Slider">
          <div className="maskLayer-Slider">
            <img
              src={images[currentImage]}
              alt={`Imagem ${currentImage + 1}`}
              className="transparent-image"
            />
          </div>
          <div className="image-text">
            {carouselData[currentImage].text}
            <div className="button-container">
              {carouselData[currentImage].buttons.map((button, index) => (
                <button
                  key={index}
                  className="button-BelowText"
                  onClick={button.action}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
          <button className="button-Carousel" onClick={prevImage}>
            VOLTAR
          </button>
          <button className="button-Carousel" onClick={nextImage}>
            AVANÇAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;

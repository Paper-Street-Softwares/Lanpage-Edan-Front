import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgOfficeGreenBackground from "../../style/assets/images/BackgroundImage.png";
import avatar1 from "../../style/assets/images/testemunhos/avatar.png";
import { PlayIcon, PauseIcon } from "@heroicons/react/outline";

export default function ParallaxSectionWithContent() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay) {
        slider && slider.slickNext();
      }
    }, 7000); // Intervalo ajustado para 7 segundos
    return () => clearInterval(interval);
  }, [autoplay, slider]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 7000, // Velocidade de autoplay ajustada para 7 segundos
    afterChange: (current) => setSliderIndex(current),
  };

  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };

  const nextSlide = () => {
    slider.slickNext();
  };

  const prevSlide = () => {
    slider.slickPrev();
  };

  return (
    <div
      className="relative mt-12 bg-center bg-cover tablet2:mt-28 content"
      style={{
        backgroundImage: `url(${imgOfficeGreenBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <Slider
        className="py-8"
        {...settings}
        ref={(slider) => setSlider(slider)}
      >
        <div>
          <div className="flex flex-col items-center justify-center w-full font-poppins text-paragraph3 phone3:text-paragraph4 tablet1:text-paragraph5">
            <div className="flex flex-col phone3:w-[80%] my-[10%] tablet2:my-[5%] text-center items-center text-quinary">
              <div>
                <p>
                  "A Edan Contabilidade é demais! Eles cuidam da minha empresa
                  com maestria total. Estou super satisfeito e recomendo muito!"
                </p>
                <img
                  alt="Foto de perfil"
                  className="rounded-full w-[15%] mx-auto my-[5%] phone3:w-[20%] phone3:my-[7%] tablet1:w-[10%] tablet1:my-[3%]"
                  src={avatar1}
                />
                <h1 className="font-medium text-paragraph4 phone3:text-paragraph5">
                  Nome da Pessoa
                </h1>
                <p className="text-paragraph2 phone3:text-paragraph3">
                  Função da Pessoa
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center w-full font-poppins text-paragraph3 phone3:text-paragraph4 tablet1:text-paragraph5">
            <div className="flex flex-col phone3:w-[80%] my-[10%] tablet2:my-[5%] text-center items-center text-quinary">
              <div>
                <p>
                  "A Edan Contabilidade é demais! Eles cuidam da minha empresa
                  com maestria total. Estou super satisfeito e recomendo muito!"
                </p>
                <img
                  alt="Foto de perfil"
                  className="rounded-full w-[15%] mx-auto my-[5%] phone3:w-[20%] phone3:my-[7%] tablet1:w-[10%] tablet1:my-[3%]"
                  src={avatar1}
                />
                <h1 className="font-medium text-paragraph4 phone3:text-paragraph5">
                  Nome da Pessoa
                </h1>
                <p className="text-paragraph2 phone3:text-paragraph3">
                  Função da Pessoa
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center w-full font-poppins text-paragraph3 phone3:text-paragraph4 tablet1:text-paragraph5">
            <div className="flex flex-col phone3:w-[80%] my-[10%] tablet2:my-[5%] text-center items-center text-quinary">
              <div>
                <p>
                  "A Edan Contabilidade é demais! Eles cuidam da minha empresa
                  com maestria total. Estou super satisfeito e recomendo muito!"
                </p>
                <img
                  alt="Foto de perfil"
                  className="rounded-full w-[15%] mx-auto my-[5%] phone3:w-[20%] phone3:my-[7%] tablet1:w-[10%] tablet1:my-[3%]"
                  src={avatar1}
                />
                <h1 className="font-medium text-paragraph4 phone3:text-paragraph5">
                  Nome da Pessoa
                </h1>
                <p className="text-paragraph2 phone3:text-paragraph3">
                  Função da Pessoa
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="bottom-0 left-0 w-full py-2">
        <div className="flex items-center justify-center text-white">
          <button className="mx-2" onClick={toggleAutoplay}>
            {autoplay ? (
              <PauseIcon className="w-10 h-10" />
            ) : (
              <PlayIcon className="w-10 h-10" />
            )}
          </button>
          <div className="flex items-center justify-center my-8">
            <div className="w-3/4 h-6 bg-white rounded-full">
              <div
                className="h-full bg-white rounded-full"
                style={{
                  width: `${(sliderIndex + 1) * (100 / settings.slidesToShow)}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

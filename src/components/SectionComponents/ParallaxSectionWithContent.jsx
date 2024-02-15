import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgOfficeGreenBackground from "../../style/assets/images/paralaxe/paralaxeBg1.jpg";
import avatar1 from "../../style/assets/images/testemunhos/avatar.png";
import avatar2 from "../../style/assets/images/testemunhos/avatar2.png";
import avatar3 from "../../style/assets/images/testemunhos/avatar3.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

export default function ParallaxSectionWithContent() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [slider, setSlider] = useState(null);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay) {
        slider && slider.slickNext();
      }
    }, 7000);
    setTimer(interval);
    return () => clearInterval(interval);
  }, [autoplay, slider]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 7000,
    afterChange: (current) => setSliderIndex(current),
    beforeChange: () => {
      clearInterval(timer);
      const newInterval = setInterval(() => {
        if (autoplay) {
          slider && slider.slickNext();
        }
      }, 7000);
      setTimer(newInterval);
    },
  };

  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
    if (!autoplay) {
      const newInterval = setInterval(() => {
        if (autoplay) {
          slider && slider.slickNext();
        }
      }, 7000);
      setTimer(newInterval);
    } else {
      clearInterval(timer);
    }
  };

  const nextSlide = () => {
    slider && slider.slickNext();
  };

  const prevSlide = () => {
    slider && slider.slickPrev();
  };

  return (
    <div
      className="relative bg-center bg-cover content"
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
            <div className="flex flex-col phone3:w-[80%] mt-[10%] tablet2:mt-[5%] text-center items-center text-quinary">
              <div>
                <p>
                  "A Edan Contabilidade resolve tudo, sabe? Desde que começamos
                  a trabalhar juntos, nossa empresa só cresce. Valeu, pessoal!"
                </p>
                <img
                  alt="Foto de perfil"
                  className="rounded-full w-[15%] mx-auto my-[5%] phone3:w-[20%] phone3:my-[7%] tablet1:w-[10%] tablet1:my-[3%]"
                  src={avatar1}
                />
                <h1 className="font-medium text-paragraph4 phone3:text-paragraph5">
                  Abraão Sampaio
                </h1>
                <p className="text-paragraph2 phone3:text-paragraph3">
                  Cliente há 12 anos
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center w-full font-poppins text-paragraph3 phone3:text-paragraph4 tablet1:text-paragraph5">
            <div className="flex flex-col phone3:w-[80%] mt-[10%] tablet2:mt-[5%] text-center items-center text-quinary">
              <div>
                <p>
                  "A equipe da Edan Contabilidade é incrível! Eles nos deram
                  suporte desde o início e nos ajudaram a economizar dinheiro.
                  Recomendo de olho fechado!"
                </p>
                <img
                  alt="Foto de perfil"
                  className="rounded-full w-[15%] mx-auto my-[5%] phone3:w-[20%] phone3:my-[7%] tablet1:w-[10%] tablet1:my-[3%]"
                  src={avatar2}
                />
                <h1 className="font-medium text-paragraph4 phone3:text-paragraph5">
                  Madalena Almeida
                </h1>
                <p className="text-paragraph2 phone3:text-paragraph3">
                  Cliente há 9 anos
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center w-full font-poppins text-paragraph3 phone3:text-paragraph4 tablet1:text-paragraph5">
            <div className="flex flex-col phone3:w-[80%] mt-[10%] tablet2:mt-[5%] text-center items-center text-quinary">
              <div>
                <p>
                  "A Edan Contabilidade é tipo aquele amigo que sempre salva a
                  pátria! Com eles, nossas finanças tão tinindo, e a gente só
                  tem a agradecer. Valeu, Edan!"
                </p>
                <img
                  alt="Foto de perfil"
                  className="rounded-full w-[15%] mx-auto my-[5%] phone3:w-[20%] phone3:my-[7%] tablet1:w-[10%] tablet1:my-[3%]"
                  src={avatar3}
                />
                <h1 className="font-medium text-paragraph4 phone3:text-paragraph5">
                  Ivan Coelho
                </h1>
                <p className="text-paragraph2 phone3:text-paragraph3">
                  Cliente há 16 anos
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="bottom-0 left-0 w-full mb-[10%] tablet2:mb-[5%]">
        <div className="flex items-center justify-center text-white">
          <button className="mx-2" onClick={prevSlide}>
            <ChevronLeftIcon className="w-10 h-10" />
          </button>
          <button className="mx-2" onClick={toggleAutoplay}>
            {autoplay ? (
              <p className="font-bold">PARAR</p>
            ) : (
              <p className="font-bold">CONTINUAR</p>
            )}
          </button>
          <button className="mx-2" onClick={nextSlide}>
            <ChevronRightIcon className="w-10 h-10" />
          </button>
          <div className="flex items-center justify-center mb-8">
            <div className="w-3/4 h-6 bg-white rounded-full">
              <div
                className="h-full bg-white rounded-full"
                style={{
                  width: `${
                    (sliderIndex + 1) * (100 / settings.slidesToShow)
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

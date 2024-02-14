import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgOfficeGreenBackground from "../../style/assets/images/BackgroundImage.png";
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
      className="relative mt-12 bg-center bg-cover tablet2:mt-16 content"
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
                  "A Edan Contabilidade é demais! Eles cuidam da minha empresa
                  com maestria total. Estou super satisfeito e recomendo muito!"
                </p>
                <img
                  alt="Foto de perfil"
                  className="rounded-full w-[15%] mx-auto my-[5%] phone3:w-[20%] phone3:my-[7%] tablet1:w-[10%] tablet1:my-[3%]"
                  src={avatar1}
                />
                <h1 className="font-medium text-paragraph4 phone3:text-paragraph5">
                  Carlos Adans
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
            <div className="flex flex-col phone3:w-[80%] mt-[10%] tablet2:mt-[5%] text-center items-center text-quinary">
              <div>
                <p>
                  "Estou extremamente satisfeita com os serviços da Edan
                  Contabilidade. Profissionalismo, dedicação e competência são
                  marcas registradas desta empresa."
                </p>
                <img
                  alt="Foto de perfil"
                  className="rounded-full w-[15%] mx-auto my-[5%] phone3:w-[20%] phone3:my-[7%] tablet1:w-[10%] tablet1:my-[3%]"
                  src={avatar2}
                />
                <h1 className="font-medium text-paragraph4 phone3:text-paragraph5">
                  Ilca Adans
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
            <div className="flex flex-col phone3:w-[80%] mt-[10%] tablet2:mt-[5%] text-center items-center text-quinary">
              <div>
                <p>
                  "A equipe da Edan Contabilidade tem sido fundamental para o
                  sucesso do meu negócio. Recomendo a todos que buscam serviços
                  contábeis de qualidade."
                </p>
                <img
                  alt="Foto de perfil"
                  className="rounded-full w-[15%] mx-auto my-[5%] phone3:w-[20%] phone3:my-[7%] tablet1:w-[10%] tablet1:my-[3%]"
                  src={avatar3}
                />
                <h1 className="font-medium text-paragraph4 phone3:text-paragraph5">
                  Gael Adans
                </h1>
                <p className="text-paragraph2 phone3:text-paragraph3">
                  Função da Pessoa
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

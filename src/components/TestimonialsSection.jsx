import React, { useState, useEffect } from "react";
import imgOfficeGreenBackground from "../style/assets/images/BackgroundImage.png";
import avatar from "../style/assets/images/testemunhos/avatar.png";
import avatar2 from "../style/assets/images/testemunhos/avatar2.png";
import avatar3 from "../style/assets/images/testemunhos/avatar3.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const depoimentos = [
  {
    texto:
      "A Edan Contabilidade é demais! Eles cuidam da minha empresa com maestria total. Estou super satisfeito e recomendo muito!",
    nome: "Ivan Coelho",
    empresa: "Auto Posto Pontal",
    imagem: avatar,
  },
  {
    texto:
      "Estou extremamente satisfeita com os serviços da Edan Contabilidade. Profissionalismo, dedicação e competência são marcas registradas desta empresa.",
    nome: "Maria Silva",
    empresa: "Loja Express",
    imagem: avatar2,
  },
  {
    texto:
      "A equipe da Edan Contabilidade tem sido fundamental para o sucesso do meu negócio. Recomendo a todos que buscam serviços contábeis de qualidade.",
    nome: "João Santos",
    empresa: "Médico Autônomo",
    imagem: avatar3,
  },
];

export default function ParallaxSectionWithContent() {
  const [currentDepoimentoIndex, setCurrentDepoimentoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentDepoimentoIndex(
          (prevIndex) => (prevIndex + 1) % depoimentos.length
        );
        setIsTransitioning(false);
      });
    }, 2500000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrevClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentDepoimentoIndex(
        (prevIndex) => (prevIndex - 1 + depoimentos.length) % depoimentos.length
      );
      setIsTransitioning(false);
    });
  };

  const handleNextClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentDepoimentoIndex(
        (prevIndex) => (prevIndex + 1) % depoimentos.length
      );
      setIsTransitioning(false);
    });
  };

  return (
    <div
      className="relative mt-12 overflow-y-hidden bg-center bg-cover tablet2:mt-28 content"
      style={{
        height: "400px",
        backgroundImage: `url(${imgOfficeGreenBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        overflowX: "hidden",
      }}
      id="contact"
    >
      <div className="flex flex-col items-center justify-center w-full font-poppins text-paragraph3 phone3:text-paragraph4">
        <div className="flex flex-col phone3:w-[80%] my-[10%] text-center items-center text-quinary">
          <div
            className={`flex-grow ${
              isTransitioning ? "slideOutToLeft" : "slideInFromRight"
            }`}
          >
            <p>"{depoimentos[currentDepoimentoIndex].texto}"</p>
            <img
              alt="Foto de perfil"
              className="rounded-full w-[15%] mx-auto my-[5%] phone3:w-[7%] phone3:my-[3%]"
              src={depoimentos[currentDepoimentoIndex].imagem}
            />
            <h1 className="font-medium">
              {depoimentos[currentDepoimentoIndex].nome}
            </h1>
            <p className="text-paragraph1 phone3:text-paragraph2">
              {depoimentos[currentDepoimentoIndex].empresa}
            </p>
          </div>
          <div className="flex flex-grow mt-6 transform text-quinary">
            <div className="mx-4" onClick={handlePrevClick}>
              <ChevronLeft />
            </div>
            <div className="mx-4" onClick={handleNextClick}>
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

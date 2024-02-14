import React, { useState, useEffect, useRef } from "react";
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
  const intervalRef = useRef(null);

  useEffect(() => {
    const iniciarReproducaoAutomatica = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentDepoimentoIndex(
          (prevIndex) => (prevIndex + 1) % depoimentos.length
        );
        setIsTransitioning(false);
      }, 700);
    };

    intervalRef.current = setInterval(iniciarReproducaoAutomatica, 7000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handlePrevClick = () => {
    clearInterval(intervalRef.current); // Limpar qualquer temporizador ativo

    setIsTransitioning(true); // Indicar transição

    // Calcular o novo índice do depoimento
    const newIndex =
      (currentDepoimentoIndex - 1 + depoimentos.length) % depoimentos.length;

    // Lidar com a volta ao início se estiver no final
    if (newIndex === depoimentos.length - 1) {
      setCurrentDepoimentoIndex(0); // Mudar para o primeiro depoimento
    } else {
      setCurrentDepoimentoIndex(newIndex); // Definir para o depoimento anterior
    }

    setIsTransitioning(false); // Atualizar o estado de transição

    // Reiniciar o temporizador de transição automática se desejado
    if (intervalRef.current) {
      // Verificar se o intervalo existe
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentDepoimentoIndex(
          (prevIndex) => (prevIndex + 1) % depoimentos.length
        );
      }, 7000); // Substituir pelo intervalo desejado
    }
  };

  const handleNextClick = () => {
    clearInterval(intervalRef.current);
    setIsTransitioning(true);

    // No need for separate update function if logic is simple
    const newIndex = (currentDepoimentoIndex + 1) % depoimentos.length;
    setCurrentDepoimentoIndex(newIndex);

    setIsTransitioning(false);

    // Restart automatic transition timer if desired
    if (intervalRef.current) {
      // Check if interval exists
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        // Replace with your preferred automatic transition logic
        setCurrentDepoimentoIndex(
          (prevIndex) => (prevIndex + 1) % depoimentos.length
        );
      }, 7000); // Replace with your desired interval
    }
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
            <button className="mx-4" onClick={handlePrevClick}>
              <ChevronLeft />
            </button>
            <button className="mx-4" onClick={handleNextClick}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

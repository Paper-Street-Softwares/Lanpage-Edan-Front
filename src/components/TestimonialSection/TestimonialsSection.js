import React from "react";
import TestimonialsList from "./TestimonialsList";

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      author: "João Almeida",
      text: "Estou extremamente satisfeito com a experiência que tive ao escolher os serviços/produtos desta empresa. A qualidade excepcional e o atendimento ao cliente impecável superaram todas as minhas expectativas. Recomendo sem hesitação e continuarei sendo um cliente fiel. Obrigado por superar as minhas expectativas!",
      company: "ABC Ltda.",
    },
    {
      author: "Roberto Malta",
      text: "Simplesmente perfeitos no que fazem!",
      company: "XYZ Corporação",
    },
  ];

  return (
    <div className="testimonials-section">
      <h1>O que nossos clientes dizem sobre</h1>
      <TestimonialsList testimonials={testimonialsData} />
    </div>
  );
};

export default TestimonialsSection;

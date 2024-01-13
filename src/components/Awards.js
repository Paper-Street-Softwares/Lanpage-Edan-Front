import "../style/css/componentsStyle/awards.css";
import "../style/css/structure-global.css";
import AwardCard from "../components/AwardsCards";

const Awards = () => {
  const awardsData = [
    {
      title: "Prêmio Esqueça Tudo",
      year: 2021,
      description: "Apenas esqueça",
    },
    {
      title: "Melhor Empresa para Esquecer Tudo",
      year: 2022,
      description: "Eleita a melhor empresa de esquecimento do ano.",
    },
    {
      title: "Prêmio Forget Everything",
      year: 2023,
      description: "Destaque no esquecimento dos negócios.",
    },
    {
      title: "Prêmio Apocalipse Anual",
      year: 2024,
      description: "Aqui sua empresa desaparece num piscar de olhos!",
    },
  ];

  return (
    <div className="wrapper-Awards">
      <div className="container-Awards">
        <div className="title-Awards">
          <h1>Prêmios</h1>
        </div>
        <div className="card-Awards">
          {awardsData.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;

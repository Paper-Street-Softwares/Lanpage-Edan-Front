import imgOfficeGreenBackground from "../style/assets/images/BackgroundImage.png";
import imgIcon from "../style/assets/icons/footer/calendarIcon.png";
import ResultsCard from "../components/SectionComponents/ResultsCard";

export default function ResultsSection() {
  return (
    <div
      className="mt-12 bg-center bg-cover tablet2:mt-12 content"
      style={{
        backgroundImage: `url(${imgOfficeGreenBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <div className="w-full py-[5%]">
        <h1 className="flex flex-col items-center tablet1:flex-row tablet1:justify-between tablet1:flex-wrap desktop1:flex-nowrap">
          <ResultsCard
            img={imgIcon}
            number="40"
            text="Anos de serviços prestados"
          />
          <ResultsCard
            img={imgIcon}
            number="+ de 1500"
            text="Empresas abertas anualmente."
          />
          <ResultsCard
            img={imgIcon}
            number="+ de 1000"
            text="Impostos de Renda feitos anualmente."
          />
          <ResultsCard
            img={imgIcon}
            number="+ de 200"
            text="Empresas atendidas mensalmente."
          />
        </h1>
      </div>
    </div>
  );
}

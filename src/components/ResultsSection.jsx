import imgOfficeGreenBackground from "../style/assets/images/BackgroundImage.png";
import imgIcon from "../style/assets/icons/footer/calendarIcon.png";
import ResultsCard from "../components/SectionComponents/ResultsCard";

export default function ResultsSection() {
  return (
    <div
      className="mt-12 bg-center bg-cover tablet2:mt-28 content"
      style={{
        backgroundImage: `url(${imgOfficeGreenBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <div className="w-full py-[5%]">
        <h1 className="flex flex-col items-center phone3:flex-row phone3:justify-between phone3:flex-wrap tablet2:flex-nowrap">
          <ResultsCard img={imgIcon} number="185" text="Anos de empresa" />
          <ResultsCard
            img={imgIcon}
            number="185"
            text="Algum número que a empresa mostre."
          />
          <ResultsCard
            img={imgIcon}
            number="185"
            text="Algum número muito maior que a empresa mostre."
          />
          <ResultsCard
            img={imgIcon}
            number="185"
            text="Algum número que a empresa mostre que a empresa."
          />
        </h1>
      </div>
    </div>
  );
}

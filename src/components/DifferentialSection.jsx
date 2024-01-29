import ImgAndTitleCard from "./SectionComponents/ImgAndTitleCard";
import SectionHeader from "./SectionComponents/SectionHeader";

export default function DifferentialSection() {
  return (
    <div className="content">
      <SectionHeader
        sectionHeaderTitleFirst="Principais portais e tabelas"
        sectionHeaderTitleSecond="em um click"
        sectionHeaderDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney."
      />
      <ImgAndTitleCard
        img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
        imgDescription="Teste Icon"
        title="Exemplo de link exemplo"
      />
    </div>
  );
}

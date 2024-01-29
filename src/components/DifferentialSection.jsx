import ImgAndTitleCard from "./SectionComponents/ImgAndTitleCard";
import SectionContent from "./SectionComponents/SectionContent";
import SectionHeader from "./SectionComponents/SectionHeader";

export default function DifferentialSection() {
  return (
    <div className="content">
      <SectionHeader
        sectionHeaderTitleFirst="Principais portais e tabelas"
        sectionHeaderTitleSecond="em um click"
        sectionHeaderDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney."
      />
      <SectionContent>
        {[
          <ImgAndTitleCard
            key={1}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Exemplo de link exemplo"
            link="#"
          />,
          <ImgAndTitleCard
            key={2}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Exemplo de link exemplo"
            link="#"
          />,
          <ImgAndTitleCard
            key={3}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Exemplo de link exemplo"
            link="#"
          />,
          <ImgAndTitleCard
            key={4}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Exemplo de link exemplo"
            link="#"
          />,
          <ImgAndTitleCard
            key={5}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Exemplo de link exemplo"
            link="#"
          />,
          <ImgAndTitleCard
            key={6}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Exemplo de link exemplo"
            link="#"
          />,
          <ImgAndTitleCard
            key={7}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Exemplo de link exemplo"
            link="#"
          />,
          <ImgAndTitleCard
            key={8}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Exemplo de link exemplo"
            link="#"
          />,
        ]}
      </SectionContent>
    </div>
  );
}

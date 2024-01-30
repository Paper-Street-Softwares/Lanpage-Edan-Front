import SectionHeader from "../components/SectionComponents/SectionHeader";
import ImgAndTitleCard from "./SectionComponents/ImgAndTitleCard";
import SectionContent from "./SectionComponents/SectionContent";

export default function DifferentialSection() {
  return (
    <div className="content">
      <SectionHeader
        sectionHeaderTitleFirst="A Edan tem tudo que"
        sectionHeaderTitleSecond="sua empresa precisa"
        sectionHeaderDescription="Não apenas contabilizamos números, construímos caminhos para o seu sucesso financeiro. Nossos diferenciais vão além da simples prestação de serviços contábeis."
      />
      <SectionContent>
        {[
          <ImgAndTitleCard
            key={1}
            img={""}
            imgDescription="Ícone "
            title="Título"
          />,
        ]}
      </SectionContent>
    </div>
  );
}

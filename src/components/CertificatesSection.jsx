import SectionContent from "./SectionComponents/SectionContent";
import SectionHeader from "./SectionComponents/SectionHeader";

export default function CertificatesSection() {
  return (
    <div className="content">
      <SectionHeader
        sectionHeaderTitleFirst="Todas as certidões que"
        sectionHeaderTitleSecond="sua empresa precisa"
        sectionHeaderDescription="A Edan Contabilidade simplifica seu dia a dia com links diretos em nosso site para retirada ágil das certidões negativas essenciais. Praticidade e eficiência para o sucesso contínuo do seu negócio."
      />
      <SectionContent>{[]}</SectionContent>
    </div>
  );
}

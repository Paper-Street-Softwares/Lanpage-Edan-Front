import SectionHeader from "../components/SectionComponents/SectionHeader";
import SectionContent from "./SectionComponents/SectionContent";
import StandardServiceCard from "./SectionComponents/StandardServiceCard";

export default function ServicesSection() {
  return (
    <div className="content">
      <SectionHeader
        sectionHeaderTitleFirst="Nossos Serviços"
        sectionHeaderDescription="Confira nossas soluções personalizadas para o seu negócio."
      />
      <SectionContent>{[<StandardServiceCard />]}</SectionContent>
    </div>
  );
}

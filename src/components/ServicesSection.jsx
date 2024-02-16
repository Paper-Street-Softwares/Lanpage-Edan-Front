import SectionHeader from "../components/SectionComponents/SectionHeader";
import SectionContent from "./SectionComponents/SectionContent";
import StandardServiceCard from "./SectionComponents/StandardServiceCard";

import imgAbertura from "../style/assets/icons/servicos/abertura.png";
import imgBaixa from "../style/assets/icons/servicos/baixaDeEmpresa.png";
import imgDecore from "../style/assets/icons/servicos/decore.png";
import imgImpostoRenda from "../style/assets/icons/servicos/impostoDeRenda.png";
import imgITR from "../style/assets/icons/servicos/itr.png";

export default function ServicesSection() {
  return (
    <div className="content" id="services">
      <SectionHeader
        sectionHeaderTitleFirst="Nossos Serviços"
        sectionHeaderDescription="Explore o potencial do seu negócio com nossos serviços contábeis especializados."
      />
      <SectionContent>
        {[
          <StandardServiceCard
            key={1}
            icon={imgAbertura}
            iconAlt="Ícone Abertura"
            title="Abertura de Empresas"
            description="Descomplique o processo de abertura da sua empresa!"
          />,
          <StandardServiceCard
            key={2}
            icon={imgBaixa}
            iconAlt="Ícone Baixa"
            title="Baixa de Empresas"
            description="Conte conosco para fechar seu negócio com excelência!"
          />,
          <StandardServiceCard
            key={3}
            icon={imgDecore}
            iconAlt="Ícone Decore"
            title="DECORE"
            description="Emitimos comprovação de renda para autônomos e empresários"
          />,
          <StandardServiceCard
            key={4}
            icon={imgImpostoRenda}
            iconAlt="Ícone Imposto de Renda"
            title="Imposto de Renda"
            description="Faça sua declaração de Imposto de Renda conosco."
          />,
          <StandardServiceCard
            key={5}
            icon={imgITR}
            iconAlt="Ícone ITR"
            title="Declaração de ITR"
            description="Sua declaração de ITR de forma simplificada."
          />,
        ]}
      </SectionContent>
    </div>
  );
}

import SectionHeader from "../components/SectionComponents/SectionHeader";
import ImgAndTitleCard from "./SectionComponents/ImgAndTitleCard";
import SectionContent from "./SectionComponents/SectionContent";
import imgPortal from "../style/assets/icons/diferenciais/portalDoCliente.png";
import imgExperiencia from "../style/assets/icons/diferenciais/experiencia.png";
import imgAtendimento from "../style/assets/icons/diferenciais/atendimento.png";
import imgTomadaDecisoes from "../style/assets/icons/diferenciais/tomadaDeDecisoes.png";
import imgExpertise from "../style/assets/icons/diferenciais/expertise.png";
import imgTecnologia from "../style/assets/icons/diferenciais/tecnologia.png";
import imgSegurança from "../style/assets/icons/diferenciais/seguranca.png";
import imgConfianca from "../style/assets/icons/diferenciais/confianca.png";

export default function DifferentialSection() {
  return (
    <div className="content">
      <SectionHeader
        sectionHeaderTitleFirst="A Edan tem tudo que"
        sectionHeaderTitleSecond="sua empresa precisa"
        sectionHeaderDescription="Nossos diferenciais vão além da simples prestação de serviços contábeis."
      />
      <SectionContent>
        {[
          <ImgAndTitleCard
            key={1}
            img={imgPortal}
            imgDescription="Ícone Portal do Cliente"
            title="Portal do Cliente"
          />,
          <ImgAndTitleCard
            key={2}
            img={imgExperiencia}
            imgDescription="Ícone Experiência"
            title="Experiência e Credibilidade"
          />,
          <ImgAndTitleCard
            key={3}
            img={imgAtendimento}
            imgDescription="Ícone Atendimento"
            title="Atendimento Qualificado"
          />,
          <ImgAndTitleCard
            key={4}
            img={imgTomadaDecisoes}
            imgDescription="Ícone Tomada de Decisões"
            title="Ajuda na tomada de decisões"
          />,
          <ImgAndTitleCard
            key={5}
            img={imgExpertise}
            imgDescription="Ícone Expertise"
            title="Expertise na área"
          />,
          <ImgAndTitleCard
            key={6}
            img={imgTecnologia}
            imgDescription="Ícone Tecnologia"
            title="Tecnologia e Otimização"
          />,
          <ImgAndTitleCard
            key={7}
            img={imgSegurança}
            imgDescription="Ícone Segurança"
            title="Segurança"
          />,
          <ImgAndTitleCard
            key={8}
            img={imgConfianca}
            imgDescription="Ícone Confiança"
            title="Confiança"
          />,
        ]}
      </SectionContent>
    </div>
  );
}

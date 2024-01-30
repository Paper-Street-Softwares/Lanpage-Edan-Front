import ImgAndTitleCard from "./SectionComponents/ImgAndTitleCard";
import SectionContent from "./SectionComponents/SectionContent";
import SectionHeader from "./SectionComponents/SectionHeader";

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
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Portal do cliente"
          />,
          <ImgAndTitleCard
            key={2}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Experiência e Credibilidade"
          />,
          <ImgAndTitleCard
            key={3}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Atendimento qualificado aos clientes"
          />,
          <ImgAndTitleCard
            key={4}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Ajuda na tomada de decisões estratégicas"
          />,
          <ImgAndTitleCard
            key={5}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Expertise"
          />,
          <ImgAndTitleCard
            key={6}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Tecnologia e otimização"
          />,
          <ImgAndTitleCard
            key={7}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Segurança"
          />,
          <ImgAndTitleCard
            key={8}
            img="https://cdn-icons-png.flaticon.com/128/6422/6422213.png"
            imgDescription="Teste Icon"
            title="Confiança"
          />,
        ]}
      </SectionContent>
    </div>
  );
}

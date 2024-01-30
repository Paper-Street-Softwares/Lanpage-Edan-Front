import React from "react";
import Brasil from "../style/assets/images/MapaBrasil.png";
import Awards from "../style/assets/images/AwardsEDAN.png";
import SectionHeader from "./SectionComponents/SectionHeader";
import SectionContent from "./SectionComponents/SectionContent";
import SectionTextAndImages from "./SectionComponents/SectionTextAndImages";

export default function AboutSection() {
  return (
    <div className="content bg-cinzabg">
      <SectionHeader
        sectionHeaderTitleFirst="Sobre a"
        sectionHeaderTitleSecond="EDAN Contabilidade"
      />
      <SectionContent>
        {[
          <SectionTextAndImages
            key={1}
            sectionTextAndImagesTitleFirst="O escritório mais premiado"
            sectionTextAndImagesDescription="Nesses 40 anos de existência a EDAN CONTABILIDADE tem primado pela excelência no atendimento, controle e eficácia nas obrigações civis de pessoas físicas e jurídicas. se destacando e sendo contemplada com premiações e destaques."
            sectionTextAndImagesSubscription="2019 a 2021 - Destaque Regional.
            2013 a 2018 - Prêmio Empresarial.
            2012- Prêmio Empresarial
            Qualidade Profissional da Bahia.
            "
          />,
          <SectionTextAndImages
            key={2}
            sectionTextAndImagesImg={Awards}
            imgDescription="Premiações da EDAN"
            applyBorder={true}
          />,
          <SectionTextAndImages
            key={3}
            sectionTextAndImagesTitleFirst="A EDAN atende em todo Brasil?"
            sectionTextAndImagesDescription="A Edan é uma empresa de contabilidade completa que atende a todas as cidades do Brasil, mantendo as finanças organizadas e em ordem."
            sectionTextAndImagesImg={Brasil}
            imgDescription="Mapa do Brasil"
          />,
          <SectionTextAndImages
            key={4}
            sectionTextAndImagesTitleFirst="Onde nos encontrar?"
            iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.0757758120135!2d-39.03699242413275!3d-14.821004699742826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7390a5df4a80977%3A0x283de9a3dd4420ba!2sEdan%20Contabilidade!5e0!3m2!1spt-BR!2sbr!4v1706639137858!5m2!1spt-BR!2sbr"
          />,
        ]}
      </SectionContent>
    </div>
  );
}

import React from "react";
import Brasil from "../style/assets/images/MapaBrasil.png";
import Awards from "../style/assets/images/AwardsEDAN.png";
import SectionHeader from "./SectionComponents/SectionHeader";
import SectionContent from "./SectionComponents/SectionContent";
import SectionTextAndImages from "./SectionComponents/SectionTextAndImages";
import MotionDivLeftToRight from "./SectionComponents/MotionDivLeftToRight";
import MotionDivRightToLeft from "./SectionComponents/MotionDivRightToLeft";

export default function AboutSection() {
  return (
    <div className="content bg-quinary" id="about">
      <SectionHeader
        sectionHeaderTitleFirst="Sobre a"
        sectionHeaderTitleSecond="Edan Contabilidade"
        sectionHeaderDescription="Conheça um pouco da nossa história."
      />
      <div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <SectionContent>
            <MotionDivLeftToRight>
              <SectionTextAndImages
                sectionTextAndImagesTitleFirst="O escritório mais premiado"
                sectionTextAndImagesDescription="Nesses 40 anos de existência a Edan Contabilidade tem primado pela
            excelência no atendimento, controle e eficácia nas obrigações civis
            de pessoas físicas e jurídicas. se destacando e sendo contemplada
            com premiações e destaques."
                sectionTextAndImagesSubscription={
                  <>
                    2019 a 2021 - Destaque Regional.
                    <br />
                    2013 a 2018 - Prêmio Empresarial.
                    <br />
                    2012 - Prêmio Empresarial Qualidade Profissional da Bahia.
                  </>
                }
              />
            </MotionDivLeftToRight>
          </SectionContent>
          <SectionContent>
            <MotionDivRightToLeft>
              <SectionTextAndImages
                sectionTextAndImagesImg={Awards}
                imgDescription="Premiações EDAN"
                applyBorder={true}
              />
            </MotionDivRightToLeft>
          </SectionContent>
          <MotionDivLeftToRight>
            <div className="flex flex-wrap justify-between w-full h-auto mt-4 mb-10">
              <h1 className="text-xl font-semibold font-poppins text-secondary">
                A Edan atende em todo brasil?
              </h1>
              <div className="grid grid-cols-2 -mt-4">
                <p className="text-sm font-poppins text-quaternary">
                  É importante escolher serviços contábeis confiáveis, conhecer
                  a qualidade e abrangência dos serviços oferecidos antes de
                  contratá-los. A Edan é uma empresa de contabilidade completa
                  que atende a todas as cidades do Brasil, mantendo as finanças
                  organizadas e em ordem.
                </p>
                <img src={Brasil} alt="Mapa do Brasil" />
              </div>
            </div>
          </MotionDivLeftToRight>
          <MotionDivRightToLeft>
            <div className="flex flex-wrap justify-between w-full h-auto mt-4">
              <h1 className="mb-8 text-xl font-semibold font-poppins text-secondary">
                Onde nos encontrar?
              </h1>
              <div className="w-full mb-8 border-b-8 border-primary">
                <iframe
                  className="w-full"
                  title="GoogleMaps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.0757758120135!2d-39.03699242413275!3d-14.821004699742826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7390a5df4a80977%3A0x283de9a3dd4420ba!2sEdan%20Contabilidade!5e0!3m2!1spt-BR!2sbr!4v1706652415211!5m2!1spt-BR!2sbr"
                  height="300"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </MotionDivRightToLeft>
        </div>
      </div>
    </div>
  );
}

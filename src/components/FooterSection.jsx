import HonrizontalIconAndText from "./SectionComponents/HorizontalIconAndText";
import SectionContent from "./SectionComponents/SectionContent";
import imgHome from "../style/assets/icons/footer/homeIcon.png";
import imgWhatsapp from "../style/assets/icons/footer/whatsappIcon.png";
import imgCalendar from "../style/assets/icons/footer/calendarIcon.png";
import imgLogo from "../style/assets/images/Logo.png";
import imgInstagram from "../style/assets/icons/footer/instagramIcon.png";

export default function FooterSection() {
  return (
    <div className="full bg-darkgreen h-auto p-8 ">
      <div>
        <div className="content">
          <SectionContent>
            <div className="w-64 font-poppins font-light text-sm text-white">
              <div className="h-12 mb-4">
                <img className="h-12" src={imgLogo} />
              </div>
              <div>
                <HonrizontalIconAndText
                  icon={imgHome}
                  textLine1="Av. Lótus, 23 - Nelson Costa"
                />
                <HonrizontalIconAndText
                  icon={imgWhatsapp}
                  textLine1="(73) 9.9118-7930"
                />
                <HonrizontalIconAndText
                  icon={imgCalendar}
                  textLine1="Segunda a Quinta, 08h às 18h"
                  textLine2="Sexta-feira, 08 às 17h"
                />
              </div>
            </div>
            <div className="w-64 font-poppins text-sm text-white">
              <div className="h-12  text-2xl font-medium mb-4 ">Sobre</div>
              <div className="mb-4 font-light">
                A Edan Contabilidade tem uma equipe de profissionais treinados e
                capacitados para atender com primazia todas as demandas nas
                áreas de departamento pessoal, fiscal e contábil.
              </div>
              <div>
                <HonrizontalIconAndText icon={imgInstagram} />
              </div>
            </div>
            <div className="w-64 font-poppins text-sm text-white">
              <div className="h-12 text-2xl font-medium mb-4">Navegação</div>
              <div className="h-auto flex flex-row justify-between">
                <div>
                  <div className="mb-4">Início</div>
                  <div className="mb-4"> Serviços</div>
                  <div className="mb-4">Aplicativo</div>
                  <div className="mb-4">Links Úteis</div>
                </div>
                <div>
                  <div className="mb-4">Sobre nós</div>
                  <div className="mb-4">Certidões</div>
                  <div className="mb-4">Depoimentos</div>
                </div>
              </div>
            </div>
          </SectionContent>
        </div>
      </div>
    </div>
  );
}

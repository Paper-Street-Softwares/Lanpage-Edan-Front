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
            <div className="bg-red-500 w-64 font-poppins text-sm text-white">
              <div className="bg-red-500 h-12 mb-4">
                <img className="h-12" src={imgLogo} />
              </div>
              <div className="bg-blue-700 h-auto">
                <HonrizontalIconAndText
                  icon={imgHome}
                  textLine1="Av. Lótus, 23 - Nelson Costa, Ilhéus - BA, 45656-000"
                />
                <HonrizontalIconAndText
                  icon={imgWhatsapp}
                  textLine1="(73) 9.9118-7930"
                />
                <HonrizontalIconAndText
                  icon={imgCalendar}
                  textLine1="Segunda a Quinta, 08h às 18h"
                  textLine2="Sexta, 08 às 17h"
                />
              </div>
            </div>
            <div className="bg-green-500 w-64 font-poppins text-sm text-white">
              <div className="bg-red-500 h-12  text-2xl font-medium mb-4 ">
                Sobre
              </div>
              <div className="bg-blue-700 mb-4">
                A Edan Contabilidade tem uma equipe de profissionais treinados e
                capacitados para atender com primazia todas as demandas nas
                áreas de departamento pessoal, fiscal e contábil.
              </div>
              <div>
                <HonrizontalIconAndText icon={imgInstagram} />
              </div>
            </div>
            <div className="bg-blue-500 w-64 font-poppins text-sm text-white">
              <div className="bg-red-500 h-12 text-2xl font-medium mb-4">
                Navegação
              </div>
              <div className="bg-blue-700 h-auto flex flex-row justify-between">
                <div>
                  <div className="mb-1">Início</div>
                  <div className="mb-1"> Serviços</div>
                  <div className="mb-1">Aplicativo</div>
                  <div className="mb-1">Links Úteis</div>
                </div>
                <div>
                  <div className="mb-1">Sobre nós</div>
                  <div className="mb-1">Certidões</div>
                  <div className="mb-1">Depoimentos</div>
                </div>
              </div>
            </div>
          </SectionContent>
        </div>
      </div>
    </div>
  );
}

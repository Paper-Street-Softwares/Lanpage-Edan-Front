import HonrizontalIconAndText from "./SectionComponents/HorizontalIconAndText";
import SectionContent from "./SectionComponents/SectionContent";
import imgHome from "../style/assets/icons/footer/homeIcon.png";
import imgWhatsapp from "../style/assets/icons/footer/whatsappIcon.png";
import imgCalendar from "../style/assets/icons/footer/calendarIcon.png";
import imgLogo from "../style/assets/images/Logo.png";
import imgInstagram from "../style/assets/icons/footer/instagramIcon.png";

export default function FooterSection() {
  return (
    <div className="h-auto p-8 full bg-darkgreen ">
      <div>
        <div className="content">
          <SectionContent>
            <div className="w-64 text-sm font-light text-white font-poppins">
              <div className="h-12 mb-10">
                <img alt="Logo Edan" className="h-12" src={imgLogo} />
              </div>
              <div className="flex flex-col justify-between h-40">
                <HonrizontalIconAndText
                  img={imgHome}
                  imgAlt="Ícone Home"
                  text="Av. Lótus, 23 - Nelson Costa, Ilhéus - BA, CEP 45656-000. Nelson Costa, Ilhéus - BA, CEP 45656-000."
                />
                <HonrizontalIconAndText
                  img={imgWhatsapp}
                  imgAlt="Ícone Whatsapp"
                  text="(73) 9.9961-2263"
                />
                <HonrizontalIconAndText
                  img={imgCalendar}
                  imgAlt="Ícone Calendário"
                  text="Seg. a Quinta, das 08h às 18h."
                  textLine2="Sexta-feira, das 08 às 17h."
                  textLine3="Sábado, fechado."
                  textLine4="Domingo, fechado."
                />
              </div>
            </div>
            <div className="w-64 text-sm text-white font-poppins">
              <div className="h-12 mb-10 text-2xl font-medium ">Sobre</div>
              <div className="mb-4 font-light">
                A Edan Contabilidade tem uma equipe de profissionais treinados e
                capacitados para atender com primazia todas as demandas nas
                áreas de departamento pessoal, fiscal e contábil.
              </div>
              <div className="w-44">
                <a
                  target="_blank"
                  href="https://www.instagram.com/edancontabilidade/#"
                >
                  <HonrizontalIconAndText
                    img={imgInstagram}
                    alt="Ícone Instagram"
                    text="Siga-nos no instagram!"
                  />
                </a>
              </div>
            </div>
            <div className="w-64 text-sm text-white font-poppins">
              <div className="h-12 mb-10 text-2xl font-medium">Navegação</div>
              <div className="flex flex-row justify-between h-auto">
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

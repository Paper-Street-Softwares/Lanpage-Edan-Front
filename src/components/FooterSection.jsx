import HonrizontalIconAndText from "./SectionComponents/HorizontalIconAndText";
import SectionContent from "./SectionComponents/SectionContent";
import imgHome from "../style/assets/icons/footer/homeIcon.png";
import imgWhatsapp from "../style/assets/icons/footer/whatsappIcon.png";
import imgCalendar from "../style/assets/icons/footer/calendarIcon.png";
import imgLogo from "../style/assets/images/Logo.png";
import imgInstagram from "../style/assets/icons/footer/instagramIcon.png";
import imgFacebook from "../style/assets/icons/footer/facebookIcon.png";

export default function FooterSection() {
  return (
    <div className="h-auto p-8 full bg-darkgreen ">
      <div>
        <div className="content">
          <SectionContent>
            <div className="w-64 text-sm font-light text-white font-poppins">
              <div className="h-12 mb-6">
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
              <div className="flex flex-col justify-center h-12 mb-6 text-2xl font-bold">
                SOBRE
              </div>
              <div className="mb-4 text-xs font-light">
                A Edan Contabilidade tem uma equipe de profissionais treinados e
                capacitados para atender com primazia todas as demandas nas
                áreas de departamento pessoal, fiscal e contábil.
              </div>
              <div className="flex flex-col justify-between h-12 w-52">
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
                <a
                  target="_blank"
                  href="https://www.facebook.com/EdanContabilidade/?locale=pt_BR"
                >
                  <HonrizontalIconAndText
                    img={imgFacebook}
                    alt="Ícone Facebook"
                    text="Curta a Edan no Facebook!"
                  />
                </a>
              </div>
            </div>
            <div className="w-64 text-sm text-white font-poppins">
              <div className="flex flex-col justify-center h-12 mb-6 text-2xl font-bold">
                NAVEGAÇÃO
              </div>
              <div className="flex flex-row justify-between h-auto text-xs font-bold">
                <div>
                  <div className="mb-4">
                    <a href="#">INÍCIO</a>
                  </div>
                  <div className="mb-4">
                    <a href="#">SERVIÇOS</a>
                  </div>
                  <div className="mb-4">
                    <a href="#">APLICATIVO</a>
                  </div>
                  <div className="mb-4">
                    <a href="#">LINKS ÚTEIS</a>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <a href="#">SOBRE NÓS</a>
                  </div>
                  <div className="mb-4">
                    <a href="#">CERTIDÕES</a>
                  </div>
                  <div className="mb-4">
                    <a href="#">DEPOIMENTOS</a>
                  </div>
                </div>
              </div>
            </div>
          </SectionContent>
        </div>
      </div>
    </div>
  );
}

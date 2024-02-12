import SectionContent from "./SectionComponents/SectionContent";
import imgEdilson from "../style/assets/images/contato-via-whatsapp/edilson.png";
import imgOfficeGreenBackground from "../style/assets/images/BackgroundImage.png";
import WhatsAppIcon from "../style/assets/icons/WhatsAppIcon.png";

export default function WppSection() {
  return (
    <div
      className="mt-12 bg-center bg-cover tablet2:mt-28 content"
      style={{
        backgroundImage: `url(${imgOfficeGreenBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <SectionContent>
        <div className="w-full">
          <div className="flex flex-row items-end justify-between ">
            <div className="flex flex-col justify-end h-28">
              <h1 className="text-center text-white text-paragraph1 font-poppins">
                Contate-nos através do <strong>Whatsapp</strong>
              </h1>
              <div className="flex flex-row items-center justify-center h-14 tablet2:w-72">
                <a
                  href="#"
                  className="flex flex-row items-center justify-around w-[95%] h-[80%] transition rounded-lg bg-primary hover:bg-secondary"
                >
                  <img
                    src={WhatsAppIcon}
                    className="w-[30%] mx-[8%]"
                    alt="WhatsApp Icon"
                  ></img>
                  <p className="text-white text-paragraph2">
                    Solicitar contato
                  </p>
                </a>
              </div>
            </div>
            <img className="w-20 " alt="Foto Edilson" src={imgEdilson} />
          </div>
        </div>
      </SectionContent>
    </div>
  );
}

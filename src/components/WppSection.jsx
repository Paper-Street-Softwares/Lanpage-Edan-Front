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
          <div className="flex flex-row items-end justify-between h-28">
            <div className="flex flex-col w-full justify-evenly items-left h-28">
              <h1 className="text-left text-white bg-blue-700 text-paragraph1 max-w-32 font-poppins">
                Contate-nos através do <strong>Whatsapp</strong>
              </h1>
              <div className="flex flex-col justify-center bg-red-500 max-w-32 items-left h-14 tablet2:w-72">
                <a
                  href="#"
                  className="flex flex-row px-1 justify-around items-center w-full max-w-32 h-[80%] transition rounded-lg bg-primary hover:bg-secondary"
                >
                  <img
                    src={WhatsAppIcon}
                    className="h-[45%]"
                    alt="WhatsApp Icon"
                  ></img>
                  <p className="font-bold text-white text-paragraph1">
                    Solicitar Contato
                  </p>
                </a>
              </div>
            </div>
            <img
              className="w-[45%] max-w-28"
              alt="Foto Edilson"
              src={imgEdilson}
            />
          </div>
        </div>
      </SectionContent>
    </div>
  );
}

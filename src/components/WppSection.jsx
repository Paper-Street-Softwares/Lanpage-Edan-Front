import SectionContent from "./SectionComponents/SectionContent";
import imgEdilson from "../style/assets/images/contato-via-whatsapp/edilson.png";
import imgOfficeGreenBackground from "../style/assets/images/BackgroundImage.png";
import WhatsAppIcon from "../style/assets/icons/WhatsAppIcon.png";

export default function WppSection() {
  return (
    <div
      className="mt-12 phone1:mt-[15%] phone2:mt-[20%] phone3:mt-[20%] bg-center bg-cover tablet2:mt-28 content"
      style={{
        backgroundImage: `url(${imgOfficeGreenBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <SectionContent>
        <div className="w-full">
          <div className="flex flex-row items-end justify-between h-28 phone1:h-40 phone3:h-48">
            <div className="flex flex-col w-full justify-evenly items-left h-28 phone1:h-40 phone3:h-48">
              <h1 className="text-left text-white text-paragraph1 phone1:text-paragraph4 phone3:text-paragraph5 max-w-32 font-poppins">
                Contate-nos através do <strong>Whatsapp</strong>
              </h1>
              <a
                href="#"
                className="flex flex-row items-center justify-around w-[90%] h-8 phone1:h-12 px-1 transition rounded-lg max-w-32 phone3:max-w-none phone3:w-[90%] bg-primary hover:bg-secondary"
              >
                <img
                  src={WhatsAppIcon}
                  className="h-[45%]"
                  alt="WhatsApp Icon"
                ></img>
                <p className="text-white text-paragraph1 phone1:text-paragraph3 phone3:text-paragraph5">
                  Clique aqui
                </p>
              </a>
            </div>
            <img
              className="w-[45%] max-w-28 phone1:w-[50%] phone1:max-w-none"
              alt="Foto Edilson"
              src={imgEdilson}
            />
          </div>
        </div>
      </SectionContent>
    </div>
  );
}

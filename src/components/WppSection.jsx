import SectionContent from "./SectionComponents/SectionContent";
import imgEdilson from "../style/assets/images/contato-via-whatsapp/edilson.png";
import imgOfficeGreenBackground from "../style/assets/images/BackgroundImage.png";
import WhatsAppIcon from "../style/assets/icons/WhatsAppIcon.png";

export default function WppSection() {
  return (
    <div
      className="mt-8 bg-fixed md:mt-28 content"
      style={{ backgroundImage: `url(${imgOfficeGreenBackground})` }}
      id="contact"
    >
      <SectionContent>
        <div className="w-full h-56 md:h-52">
          <div className="flex flex-row items-end justify-between h-52">
            <div className="bg-grenn-200">
              <div className="flex flex-col justify-around h-52">
                <h1 className="text-xl text-center text-white font-poppins md:text-2xl lg:text-3xl ">
                  Contate-nos através do <strong>Whatsapp</strong>
                </h1>
                <button className="bg-green-400 w-72">
                  <div className="flex justify-center">
                    <a
                      href="#"
                      className="flex items-center w-full h-16 px-4 py-2 text-xl text-white bg-lightgreen hover:bg-green-800"
                    >
                      <img
                        src={WhatsAppIcon}
                        className="w-20 h-20 mr-4"
                        alt="WhatsApp Icon"
                      ></img>
                      Solicitar contato
                    </a>
                  </div>
                </button>
              </div>
            </div>
            <div>
              <img
                className="w-80 md:w-60"
                alt="Foto Edilson"
                src={imgEdilson}
              />
            </div>
          </div>
        </div>
      </SectionContent>
    </div>
  );
}

import SectionContent from "./SectionComponents/SectionContent";
import imgEdilson from "../style/assets/images/contato-via-whatsapp/edilson.png";
import imgOfficeGreenBackground from "../style/assets/images/BackgroundImage.png";
import WhatsAppIcon from "../style/assets/icons/WhatsAppIcon.png";

export default function WppSection() {
  return (
    <div
      className="mt-12 bg-fixed tablet2:mt-28 content"
      style={{ backgroundImage: `url(${imgOfficeGreenBackground})` }}
      id="contact"
    >
      <SectionContent>
        <div className="w-full h-42 tablet2:h-52">
          <div className="flex flex-row items-end justify-between h-52">
            <div>
              <div className="flex flex-col justify-around h-52">
                <h1 className="text-xl text-center text-white font-poppins tablet2:text-3xl tablet2:text-left desktop1:text-4xl ">
                  Contate-nos através do <strong>Whatsapp</strong>
                </h1>

                <div className="flex tablet2:w-72">
                  <a
                    href="#"
                    className="flex flex-row items-center justify-around w-full h-16 phone1:p-3 rounded-xl bg-primary hover:bg-green-800"
                  >
                    <img
                      src={WhatsAppIcon}
                      className="w-8 mx-2 phone1:mx-5 phone1:w-10 tablet2:w-20"
                      alt="WhatsApp Icon"
                    ></img>
                    <p className="text-sm text-white tablet2:text-xl">
                      Solicitar contato
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <img
              className="w-48 tablet2:w-60"
              alt="Foto Edilson"
              src={imgEdilson}
            />
          </div>
        </div>
      </SectionContent>
    </div>
  );
}

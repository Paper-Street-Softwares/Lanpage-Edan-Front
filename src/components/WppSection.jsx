import SectionContent from "./SectionComponents/SectionContent";
import imgEdilson from "../style/assets/images/contato-via-whatsapp/edilson.png";
import imgOfficeGreenBackground from "../style/assets/images/BackgroundImage.png";
import WhatsAppIcon from "../style/assets/icons/WhatsAppIcon.png";

export default function WppSection() {
  return (
    <div
      className="mt-12 bg-fixed md:mt-28 content"
      style={{ backgroundImage: `url(${imgOfficeGreenBackground})` }}
      id="contact"
    >
      <SectionContent>
        <div className="w-full h-42 md:h-52">
          <div className="flex flex-row items-end justify-between h-52">
            <div>
              <div className="flex flex-col justify-around h-52">
                <h1 className="text-xl text-center text-white font-poppins md:text-3xl md:text-left lg:text-4xl ">
                  Contate-nos através do <strong>Whatsapp</strong>
                </h1>

                <div className="flex md:w-72">
                  <a
                    href="#"
                    className="flex flex-row items-center justify-around w-full h-16 xs:p-3 rounded-xl bg-lightgreen hover:bg-green-800"
                  >
                    <img
                      src={WhatsAppIcon}
                      className="w-8 mx-2 xs:mx-0 xs:w-10 md:w-20"
                      alt="WhatsApp Icon"
                    ></img>
                    <p className="text-sm text-white md:text-xl">
                      Solicitar contato
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <img className="w-48 md:w-60" alt="Foto Edilson" src={imgEdilson} />
          </div>
        </div>
      </SectionContent>
    </div>
  );
}

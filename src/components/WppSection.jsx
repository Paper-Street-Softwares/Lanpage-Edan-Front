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
        <div className="w-full bg-green-800 h-42 md:h-52">
          <div className="flex flex-row items-end justify-between bg-blue-800 h-52">
            <div className="bg-green-400">
              <div className="flex flex-col justify-around bg-yellow-500 h-52">
                <h1 className="text-xl text-center text-white bg-pink-500 font-poppins md:text-3xl md:text-left lg:text-4xl ">
                  Contate-nos através do <strong>Whatsapp</strong>
                </h1>
                <button className="w-full md:w-72">
                  <div className="flex justify-center">
                    <a
                      href="#"
                      className="flex items-center justify-around w-full h-16 text-xl text-white rounded-lg bg-lightgreen hover:bg-green-800"
                    >
                      <img
                        src={WhatsAppIcon}
                        className="w-8 mx-2 bg-blue-400 md:w-20 md:mr-4"
                        alt="WhatsApp Icon"
                      ></img>
                      <p className="mx-2 text-sm bg-yellow-300 md:text-lg">
                        Solicitar contato
                      </p>
                    </a>
                  </div>
                </button>
              </div>
            </div>
            <img className="w-48 md:w-60" alt="Foto Edilson" src={imgEdilson} />
          </div>
        </div>
      </SectionContent>
    </div>
  );
}

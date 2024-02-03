import SectionContent from "./SectionComponents/SectionContent";
import imgEdilson from "../style/assets/images/contato-via-whatsapp/edilson.png";
import bgParalax from "../style/assets/images/contato-via-whatsapp/bgParalax.jpg";
import WhatsAppIcon from "../style/assets/icons/WhatsAppIcon.png";

export default function WppSection() {
  return (
    <div
      className="bg-fixed bg-red-100 mt-28 content"
      style={{ backgroundImage: `url(${bgParalax})` }}
      id="contact"
    >
      <SectionContent>
        <div className="w-full h-52">
          <div className="flex flex-row items-end justify-between h-52">
            <div className="bg-grenn-200">
              <div className="flex flex-col justify-around h-52">
                <h1 className="text-3xl text-white font-poppins">
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
                      />
                      Solicitar contato
                    </a>
                  </div>
                </button>
              </div>
            </div>
            <div>
              <img className="h-64" alt="Foto Edilson" src={imgEdilson} />
            </div>
          </div>
        </div>
      </SectionContent>
    </div>
  );
}

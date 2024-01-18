import Logo from "../style/assets/images/Logo.png";
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaSignal,
  FaClock,
} from "react-icons/fa";

function FooterPage() {
  return (
    <div className="bg-wallpaper">
      <div className="column-3 flex w-4/5 mx-auto">
        <div className="flex flex-col flex-1 mt-10">
          <img src={Logo} alt="Logo EDAN" className="max-w-40 " />

          <div className="flex my-2 mt-8">
            <IoHome className="my-2 text-2xl text-lime-100" />
            <span className="ml-2 text-lime-100 font-poppins">
              Av. Lótus, 23 - Nelson Costa,
              <br /> Ilhéus - BA, 45656-000
            </span>
          </div>

          <div className="flex items-center my-2">
            <FaPhoneAlt className="my-2 text-2xl text-lime-100 " />
            <span className="ml-2 text-lime-100 font-poppins">
              (73) 9 9961-2263
            </span>
          </div>

          <div className="flex items-center my-2">
            <FaClock className="my-2 text-2xl text-lime-100" />
            <div className="flex flex-col">
              <span className="ml-2 text-lime-100 font-poppins">
                Horário de funcionamento:
                <br />
                das 08h às 18h
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <h1 className="text-lime-100 text-2xl font-bold font-poppins mt-10 font-poppins">
            SOBRE
          </h1>
          <div className="pr-8 my-10">
            <p className="text-left text-lime-100 font-poppins mt-3">
              Na EDAN, estamos comprometidos com a excelência e inovação. Somos
              mais do que uma empresa, somos seu parceiro de confiança para
              alcançar o sucesso. Descubra soluções personalizadas, qualidade
              excepcional e uma abordagem moderna para impulsionar seus
              objetivos. Junte-se a nós na jornada para o sucesso.
            </p>
          </div>
          <div className="flex space-x-4 my-6">
            <FaFacebook className="text-lime-100 hover:text-green-300 text-2xl" />
            <FaTwitter className="text-lime-100 hover:text-green-300 text-2xl" />
            <FaLinkedinIn className="text-lime-100 hover:text-green-300 text-2xl" />
            <FaInstagram className="text-lime-100 hover:text-green-300 text-2xl" />
            <FaSignal className="text-lime-100 hover:text-green-300 text-2xl" />
          </div>
        </div>

        <div className="flex flex-col ml-10">
          <h1 className="text-lime-100 text-2xl font-bold font-poppins mt-10 font-poppins">
            NAVEGAÇÃO
          </h1>

          <div className="flex flex-row mt-10">
            <div className="flex flex-col mr-15">
              <a
                href="#"
                className="text-lime-100 hover:text-green-300 text-lg font-semibold my-2 font-poppins"
              >
                Início
              </a>
              <a
                href="#"
                className="text-lime-100 hover:text-green-300 text-lg font-semibold my-2 font-poppins"
              >
                Sobre
              </a>
              <a
                href="#"
                className="text-lime-100 hover:text-green-300 text-lg font-semibold my-2 font-poppins"
              >
                Serviço
              </a>
              <a
                href="#"
                className="text-lime-100 hover:text-green-300 text-lg font-semibold my-2 font-poppins"
              >
                Depoimentos
              </a>
            </div>

            <div className="flex flex-col ml-7 justify-end">
              <a
                href="#"
                className="text-lime-100 hover:text-green-300 text-lg font-semibold my-2 font-poppins"
              >
                Preços
              </a>
              <a
                href="#"
                className="text-lime-100 hover:text-green-300 text-lg font-semibold my-2 font-poppins"
              >
                Galeria
              </a>
              <a
                href="#"
                className="text-lime-100 hover:text-green-300 text-lg font-semibold my-2 font-poppins"
              >
                Contatos
              </a>
              <a
                href="#"
                className="text-lime-100 hover:text-green-300 text-lg font-semibold my-2 font-poppins"
              >
                Projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;

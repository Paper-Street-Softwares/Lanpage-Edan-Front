import "../style/css/componentsStyle/footerpage.css";
import Logo from "../style/assets/images/Logo.png";
import {
  FaFacebook,
  FaHome,
  FaPhoneAlt,
  FaRegClock,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaSignal,
} from "react-icons/fa";

function FooterPage() {
  return (
    <div className="wrapper-FooterPage">
      <div className="container-FooterPage">

        <div className="footerItem-FooterPage">
          <div id="logoinfos-Footer">
          <div className="logo-FooterPage">
            <img src={Logo} alt="Logo EDAN" />
          </div>
          <div className="infos-FooterPage">
            <div className="address-FooterPage">
              <FaHome />
              <p>Rua 123, Centro, Cidade Velha</p>
            </div>
            <div className="phone-FooterPage">
              <FaPhoneAlt />
              <p>+55 1234 1234</p>
            </div>
            <div className="service-FooterPage">
              <FaRegClock />
              <p>8am - 6pm</p>
            </div>
            </div>
          </div>
        </div>
        
        <div id="titleMidle-sobre" className="footerItem-FooterPage">
          <div className="titleMiddle-FooterPage">
            <h1>SOBRE</h1>
          </div>
          <br />
          <div className="span-FooterPage">
            <p>
              Na [Nome da Empresa], estamos comprometidos com a excelência e
              inovação. Somos mais do que uma empresa, somos seu parceiro de
              confiança para alcançar o sucesso. Descubra soluções
              personalizadas, qualidade excepcional e uma abordagem moderna para
              impulsionar seus objetivos. Junte-se a nós na jornada para o
              sucesso.
            </p>
          </div>
          <br />
          <div className="icons-FooterPage">
            <FaFacebook className="iconFooterPage" />
            <FaTwitter className="iconFooterPage" />
            <FaLinkedinIn className="iconFooterPage" />
            <FaInstagram className="iconFooterPage" />
            <FaSignal className="iconFooterPage" />
          </div>
        </div>
        <div className="footerItem-FooterPage">
          <div className="titleRighter-FooterPage">
            <h1>NAVEGAÇÃO</h1>
          </div>
          <br />
          <div className="links-FooterPage">
            <ul className="list-FooterPage">
              <div className="columns-FooterPage">
                <div className="col-1">
                  <li className="item-FooterPage">
                    <button>
                      <a href="/">INÍCIO</a>
                    </button>
                  </li>
                  <li className="item-FooterPage">
                    <button>
                      <a href="/src/components/About.js">SOBRE NÓS</a>
                    </button>
                  </li>
                  <li className="item-FooterPage">
                    <button>
                      <a href="/src/components/OurService.js">SERVIÇOS</a>
                    </button>
                  </li>
                </div>
                <div className="col-2">
                  <li className="item-FooterPage">
                    <button>
                      <a href="/src/components/UsefullLinks.js">LINKS</a>
                    </button>
                  </li>
                  <li className="item-FooterPage">
                    <button>
                      <a href="/src/components/About.js">CONTATO</a>
                    </button>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;

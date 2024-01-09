import "../style/css/componentsStyle/footerpage.css";
import Logo from "../style/assets/images/EdanLogo.png";
import { FaHome, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import {
  FaFacebook,
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
          <div className="logo-FooterPage">
            <img src={Logo} alt="Logo EDAN" />
          </div>
          <div className="infos-FooterPage">
            <div className="address-FooterPage">
              <FaHome />
              <p>esqueça tudo</p>
            </div>
            <div className="phone-FooterPage">
              <FaPhoneAlt />
              <p>73 9999 9999</p>
            </div>
            <div className="service-FooterPage">
              <FaRegClock />
              <p>8:00 às 18:00</p>
            </div>
          </div>
        </div>
        <div className="footerItem-FooterPage">
          <div className="titleMiddle-FooterPage">
            <h1>SOBRE</h1>
          </div>
          <br />
          <div className="span-FooterPage">
            <span>
              esqueça tudo esqueça tudo esqueça tudo esqueça tudo esqueça tudo
              esqueça tudo esqueça tudo esqueça tudo esqueça tudo esqueça tudo
            </span>
          </div>
          <br />
          <div className="icons-FooterPage">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaSignal />
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
                    <button href="/">
                      <a>INÍCIO</a>
                    </button>
                  </li>
                  <li className="item-FooterPage">
                    <button href="/src/components/About.js">
                      <a>SOBRE NÓS</a>
                    </button>
                  </li>
                  <li className="item-FooterPage">
                    <button href="/src/components/OurService.js">
                      <a>SERVIÇOS</a>
                    </button>
                  </li>
                </div>
                <div className="col-2">
                  <li className="item-FooterPage">
                    <button href="/src/components/UsefullLinks.js">
                      <a>LINKS</a>
                    </button>
                  </li>
                  <li className="item-FooterPage">
                    <button href="/src/components/About.js">
                      <a>CONTATO</a>
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

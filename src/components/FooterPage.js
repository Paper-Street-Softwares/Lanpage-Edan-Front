import "../style/css/componentsStyle/footerpage.css";
import Logo from "../style/assets/images/EdanLogo.png";
import { FaHome, FaPhoneAlt, FaRegClock } from "react-icons/fa";

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
              <p>Endereço esqueça tudo</p>
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
        <div className="footerItem-FooterPage">CONTEUDO 2</div>
        <div className="footerItem-FooterPage">CONTEUDO 3</div>
      </div>
    </div>
  );
}

export default FooterPage;

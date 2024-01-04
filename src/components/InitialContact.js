import "../style/css/componentsStyle/initialContact.css";
import {
  FaEnvelope,
  FaPhoneVolume,
  FaLanguage,
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function InitialContact() {
  return (
    <div className="wrapper-InicialContact">
      <div className="container">
        <div className="mail-phone">
          <div className="mail">
            <FaEnvelope />
            <h5>support@consulting.com</h5>
          </div>
          <div className="phone">
            <FaPhoneVolume />
            <h5>+123 4567 889</h5>
          </div>
        </div>
        <div className="icons">
          <FaLanguage />
          <FaFacebook />
          <FaTwitter />
          <FaGooglePlusG />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}

export default InitialContact;

import { Component } from "react";
import "../../style/css/componentsStyle/initialContact.css";
import {
  FaEnvelope,
  FaPhoneVolume,
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

class InitialContact extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="wrapper-InicialContact">
        <div className="container-InitialContact">
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
          <div className="icons-InitialContact">
            <FaFacebook />
            <FaTwitter />
            <FaGooglePlusG />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
        <div className="mobile" onClick={this.handleClick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <div className="buttonsCascade-InitialContact">
          <ul
            id="navbar"
            className={this.state.clicked ? "#navbar active" : "#navbar"}
          >
            <li>
              <a>INÍCIO</a>
            </li>
            <li>
              <a>SOBRE NÓS</a>
            </li>
            <li>
              <a>SERVIÇOS</a>
            </li>
            <li>
              <a>LINKS</a>
            </li>
            <li>
              <a>CONTATO</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default InitialContact;

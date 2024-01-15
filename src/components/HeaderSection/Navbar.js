import "../../style/css/componentsStyle/navbar.css";
import Logo from "../../style/assets/images/Logo.png";
import { Component } from "react";

class Navbar extends Component() {
  state={clicked: false}
  return (
    <div className="wrapper-Navbar">
      <div className="container-Navbar">
        <div className="logo-Navbar">
          <img src={Logo} alt="Logo da Empresa" />
        </div>
        <div className="buttonsCascade-Navbar">
          <ul className="list">
            <li className="item">
              <button href="/">
                <a>INÍCIO</a>
              </button>
            </li>
            <li className="item">
              <button href="/src/components/About.js">
                <a>SOBRE NÓS</a>
              </button>
            </li>
            <li className="item">
              <button href="/src/components/OurService.js">
                <a>SERVIÇOS</a>
              </button>
            </li>
            <li className="item">
              <button href="/src/components/UsefullLinks.js">
                <a>LINKS</a>
              </button>
            </li>
            <li className="item">
              <button href="/src/components/About.js">
                <a>CONTATO</a>
              </button>
            </li>
          </ul>
        </div>
        <div id="mobile">
          <i
            id="bars"
            className={this.state.clicked ? "fa fas-times" : "fa fas-bars"}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import "../../style/css/componentsStyle/navbar.css";
import Logo from "../../style/assets/images/Logo.png";
import { Component } from "react";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="wrapper-Navbar">
        <div className="container-Navbar">
          <div className="logo-Navbar">
            <img src={Logo} alt="Logo da Empresa" />
          </div>
          <div className="buttonsCascade-Navbar">
            <ul
              id="list-Navbar"
              className={
                this.state.clicked ? "#list-Navbar active" : "#list-Navbar"
              }
            >
              <li className="item">
                <button>
                  <a href="/">INÍCIO</a>
                </button>
              </li>
              <li className="item">
                <button>
                  <a href="/src/components/About.js">SOBRE NÓS</a>
                </button>
              </li>
              <li className="item">
                <button>
                  <a href="/src/components/OurService.js">SERVIÇOS</a>
                </button>
              </li>
              <li className="item">
                <button href="/src/components/UsefullLinks.js">
                  <a href="/src/components/UsefullLinks.js">LINKS</a>
                </button>
              </li>
              <li className="item">
                <button href="/src/components/About.js">
                  <a href="/src/components/About.js">CONTATO</a>
                </button>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bars"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

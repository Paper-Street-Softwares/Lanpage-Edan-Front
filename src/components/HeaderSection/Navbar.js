import "../../style/css/componentsStyle/navbar.css";
import Logo from "../../style/assets/images/Logo.png";
import { Component } from "react";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState((prevState) => {
      return { clicked: !prevState.clicked };
    });
  };

  render() {
    return (
      <div className="wrapper-Navbar">
        <div className="container-Navbar">
          <div className="logo-Navbar">
            <img src={Logo} alt="Logo da Empresa" />
          </div>
          <div className="buttonsCascade-Navbar">
            <ul id="list-Navbar" className={this.state.clicked ? "active" : ""}>
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
                <button>
                  <a href="/src/components/UsefullLinks.js">LINKS</a>
                </button>
              </li>
              <li className="item">
                <button>
                  <a href="/src/components/About.js">CONTATO</a>
                </button>
              </li>
            </ul>
          </div>
          <div
            id="mobile"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
          >
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

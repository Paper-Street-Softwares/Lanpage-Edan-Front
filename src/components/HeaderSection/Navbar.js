import "../../style/css/componentsStyle/navbar.css";
import Logo from "../../style/assets/images/Logo.png";
import { Component } from "react";

class Navbar extends Component {
  state = { clicked: false, showServicesMenu: false, showLinksMenu: false };

  handleClick = () => {
    this.setState((prevState) => {
      return { clicked: !prevState.clicked };
    });
  };

  handleServicesClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        showServicesMenu: !prevState.showServicesMenu,
        showLinksMenu: false,
      };
    });
  };

  handleLinksClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        showLinksMenu: !prevState.showLinksMenu,
        showServicesMenu: false,
      };
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
                  <span onClick={this.handleServicesClick}>
                    SERVIÇOS
                    <i className="fas fa-chevron-down" />
                  </span>
                </button>
                {this.state.showServicesMenu && (
                  <ul className="submenu">
                    <li>
                      <a href="/src/components/Service1.js">Serviço 1</a>
                    </li>
                    <li>
                      <a href="/src/components/Service2.js">Serviço 2</a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="item">
                <button>
                  <span onClick={this.handleLinksClick}>
                    LINKS
                    <i className="fas fa-chevron-down" />
                  </span>
                </button>
                {this.state.showLinksMenu && (
                  <ul className="submenu">
                    <li>
                      <a href="/src/components/Link1.js">Link 1</a>
                    </li>
                    <li>
                      <a href="/src/components/Link2.js">Link 2</a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="item">
                <button>
                  <a href="/src/components/About.js">CONTATO</a>
                </button>
              </li>
            </ul>
          </div>
          <button
            id="mobile"
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
          >
            <i
              id="bars"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;

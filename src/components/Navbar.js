import style from "../style/css/componentsStyle/navbar.css";
import Logo from "../style/assets/images/EdanLogo.png";

function Navbar() {
  return (
    <div className="wrapper-Navbar">
      <div className="container">
        <div className="logo-Navbar">
          <img src={Logo} alt="" />
        </div>
        <div className="buttoncascade-Navbar">
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
              <button href="/src/components/MainContact.js">
                <a>CONTATO</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

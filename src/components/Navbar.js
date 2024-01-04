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
          <button>INÍCIO</button>
          <button>SOBRE NÓS</button>
          <button>SERVIÇOS</button>
          <button>LINKS</button>
          <button>CONTATO</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import InitialContact from "../../components/InitialContact";
import Navbar from "../../components/Navbar";
import "../../style/css/structure-global.css";

function Header() {
  return (
    <div className="header">
      <InitialContact />
      <Navbar />
    </div>
  );
}

export default Header;

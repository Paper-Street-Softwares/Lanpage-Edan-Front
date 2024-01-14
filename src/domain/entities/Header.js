import InitialContact from "../../components/HeaderSection/InitialContact";
import Navbar from "../../components/HeaderSection/Navbar";
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

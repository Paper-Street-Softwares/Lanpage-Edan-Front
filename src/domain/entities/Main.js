import "../../style/css/structure-global.css";
import Carrousel from "../../components/Carrousel";
import OurService from "../../components/OurService";
import About from "../../components/About";
import UsefullLinks from "../../components/UsefullLinks";
import Location from "../../components/Location";
import MainContact from "../../components/MainContact";

function Main() {
  return (
    <div className="mainBody">
      <Carrousel />
      <OurService />
      <About />
      <UsefullLinks />
      <Location />
      <MainContact />
    </div>
  );
}

export default Main;

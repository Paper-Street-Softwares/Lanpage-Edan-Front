import "../../style/css/structure-global.css";
import Carrousel from "../../components/Carrousel";
import OurService from "../../components/OurService";
import About from "../../components/About";
import UsefullLinks from "../../components/UsefullLinks";
import Location from "../../components/Location";
import Awards from "../../components/Awards";
import RecentProjects from "../../components/RecentProjects";
import TestimonialsSection from "../../components/TestimonialsSection";

function Main() {
  return (
    <div className="mainBody">
      <Carrousel />
      <OurService />
      <About />
      <RecentProjects />
      <UsefullLinks />
      <TestimonialsSection />
      <Location />
      <Awards />
    </div>
  );
}

export default Main;

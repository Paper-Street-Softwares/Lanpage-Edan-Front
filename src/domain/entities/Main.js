import "../../style/css/structure-global.css";
import Carousel from "../../components/Carousel";
import OurService from "../../components/OurServicesAndIcons/OurService";
import About from "../../components/About";
import UsefullLinks from "../../components/UsefullLinks";
import Location from "../../components/Location";
import Awards from "../../components/AwardAndCards/Awards";
import RecentProjects from "../../components/RecentProjects";
import TestimonialsSection from "../../components/TestimonialSection/TestimonialsSection";
import ButtonFixedWhatsapp from "../../components/ButtonFixedWhatsapp";
import RightChoice from "../../components/OurServicesAndIcons/RightChoice";
import AboutAndAwards from "../../components/AwardAndCards/AboutAndAwards";

function Main() {
  return (
    <div className="mainBody">
      <ButtonFixedWhatsapp />
      <Carousel />
      <RightChoice />
      <OurService />
      <AboutAndAwards />
      <About />
      <RecentProjects />
      <UsefullLinks />
      <Location />
      <Awards />
    </div>
  );
}

export default Main;

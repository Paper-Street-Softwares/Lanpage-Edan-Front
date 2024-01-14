import "../../style/css/structure-global.css";
import Carousel from "../../components/Carousel";
import OurService from "../../components/OurServicesAndIcons/OurService";
import About from "../../components/About";
import UsefullLinks from "../../components/UsefullLinks";
import Location from "../../components/Location";
import Awards from "../../components/AwardAndCards/Awards";
import RecentProjects from "../../components/RecentProjects";
import TestimonialsSection from "../../components/TestimonialSection/TestimonialsSection";

function Main() {
  return (
    <div className="mainBody">
      <Carousel />
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

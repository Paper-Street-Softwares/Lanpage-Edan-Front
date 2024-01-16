import "../../style/css/structure-global.css";
import Carousel from "../../components/Carousel";
import OurService from "../../components/OurServicesAndIcons/OurService";
import About from "../../components/About";
import ButtonFixedWhatsapp from "../../components/ButtonFixedWhatsapp";
import RightChoice from "../../components/OurServicesAndIcons/RightChoice";
import AboutAndAwards from "../../components/AwardAndCards/AboutAndAwards";
import Testimonial from "../../components/TestimonialSection/Testimonial";

function Main() {
  return (
    <div className="mainBody">
      <ButtonFixedWhatsapp />
      <Carousel />
      <RightChoice />
      <OurService />
      <AboutAndAwards />
      <About />
      <Testimonial />
    </div>
  );
}

export default Main;

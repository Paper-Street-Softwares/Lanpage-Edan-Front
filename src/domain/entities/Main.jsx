import ServicesSection from "../../components/ServicesSection";
import ParallaxSection from "../../components/SectionComponents/ParallaxSection";
import DifferentialSection from "../../components/DifferentialSection";
import AppSection from "../../components/AppSection";
import LinksSection from "../../components/LinksSection";
import AboutSection from "../../components/AboutSection";
import CertificatesSection from "../../components/CertificatesSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import WppSection from "../../components/WppSection";
import imgOfficeGreenBackground from "../../style/assets/images/BackgroundImage.png";

function Main() {
  return (
    <div className="mainBody">
      <ServicesSection />
      <TestimonialsSection />
      <DifferentialSection />
      <AppSection />
      <LinksSection />
      <ParallaxSection img={imgOfficeGreenBackground} />
      <CertificatesSection />
      <WppSection />
      <AboutSection />
    </div>
  );
}

export default Main;

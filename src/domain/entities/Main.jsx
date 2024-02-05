import ServicesSection from "../../components/ServicesSection";
import ParallaxSection from "../../components/SectionComponents/ParallaxSection";
import DifferentialSection from "../../components/DifferentialSection";
import AppSection from "../../components/AppSection";
import LinksSection from "../../components/LinksSection";
import AboutSection from "../../components/AboutSection";
import CertificatesSection from "../../components/CertificatesSection";
import WppSection from "../../components/WppSection";
import imgOfficeGreenBackground from "../../style/assets/images/BackgroundImage.png";
import BackToTopButton from "../../components/BackToTopButton";

function Main() {
  return (
    <div className="mainBody">
      <ServicesSection />
      <ParallaxSection img={imgOfficeGreenBackground} />
      <DifferentialSection />
      <AppSection />
      <LinksSection />
      <ParallaxSection img={imgOfficeGreenBackground} />
      <CertificatesSection />
      <WppSection />
      <AboutSection />
      <BackToTopButton />
    </div>
  );
}

export default Main;

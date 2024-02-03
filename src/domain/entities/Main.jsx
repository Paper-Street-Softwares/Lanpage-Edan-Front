import ServicesSection from "../../components/ServicesSection";
import ParallaxSection from "../../components/SectionComponents/ParallaxSection";
import DifferentialSection from "../../components/DifferentialSection";
import AppSection from "../../components/AppSection";
import LinksSection from "../../components/LinksSection";
import AboutSection from "../../components/AboutSection";
import CertificatesSection from "../../components/CertificatesSection";
import WppSection from "../../components/WppSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import imgBgTop from "../../style/assets/images/paralaxe/bgImg1.jpg";
import imgBgMid from "../../style/assets/images/paralaxe/bgImg2.jpg";
import imgBgBot from "../../style/assets/images/paralaxe/bgImg3.jpg";

function Main() {
  return (
    <div className="mainBody">
      <ServicesSection />
      <ParallaxSection img={imgBgTop} />
      <DifferentialSection />
      <AppSection />
      <LinksSection />
      <ParallaxSection img={imgBgMid} />
      <AboutSection />
      <CertificatesSection />
      <WppSection />
      <TestimonialsSection />
    </div>
  );
}

export default Main;

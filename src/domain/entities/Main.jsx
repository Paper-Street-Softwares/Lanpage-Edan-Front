import ServicesSection from "../../components/ServicesSection";
import ParallaxSection from "../../components/SectionComponents/ParallaxSection";
import DifferentialSection from "../../components/DifferentialSection";
import AppSection from "../../components/AppSection";
import LinksSection from "../../components/LinksSection";
import AboutSection from "../../components/AboutSection";
import CertificatesSection from "../../components/CertificatesSection";
import WppSection from "../../components/WppSection";
import imgBgTop from "../../style/assets/images/paralaxe/bgImg1.jpg";
import imgBgMid from "../../style/assets/images/paralaxe/bgImg2.jpg";

function Main() {
  return (
    <div className="mainBody">
      <ServicesSection />
      <ParallaxSection img={imgBgTop} />
      <DifferentialSection />
      <AppSection />
      <LinksSection />
      <ParallaxSection img={imgBgMid} />
      <CertificatesSection />
      <WppSection />
      <AboutSection />
    </div>
  );
}

export default Main;

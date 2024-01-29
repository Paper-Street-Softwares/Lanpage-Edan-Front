import ServicesSection from "../../components/ServicesSection";
import ParallaxSection from "../../components/ParallaxSection";
import DifferentialSection from "../../components/DifferentialSection";
import AppSection from "../../components/AppSection";
import LinksSection from "../../components/LinksSection";
import AboutSection from "../../components/AboutSection";
import CertificatesSection from "../../components/CertificatesSection";
import WppSection from "../../components/WppSection";
import TestimonialsSection from "../../components/TestimonialsSection";

function Main() {
  return (
    <div className="mainBody">
      <ServicesSection />
      <ParallaxSection />
      <DifferentialSection />
      <AppSection />
      <LinksSection />
      <ParallaxSection />
      <AboutSection />
      <CertificatesSection />
      <WppSection />
      <TestimonialsSection />
    </div>
  );
}

export default Main;

import ServicesSection from "../../components/ServicesSection";
import DifferentialSection from "../../components/DifferentialSection";
import AppSection from "../../components/AppSection";
import LinksSection from "../../components/LinksSection";
import AboutSection from "../../components/AboutSection";
import CertificatesSection from "../../components/CertificatesSection";
import WppSection from "../../components/WppSection";
import BackToTopButton from "../../components/BackToTopButton";
import FloatingWhatsappButton from "../../components/FloatingWhatsappButton";
import TestimonialSection from "../../components/TestimonialsSection";
import ResultsSection from "../../components/ResultsSection";

function Main() {
  return (
    <div className="mainBody">
      <ServicesSection />
      <ResultsSection />
      <DifferentialSection />
      <AppSection />
      <LinksSection />
      <TestimonialSection />
      <CertificatesSection />
      <WppSection />
      <AboutSection />
      <BackToTopButton />
      <FloatingWhatsappButton />
    </div>
  );
}

export default Main;

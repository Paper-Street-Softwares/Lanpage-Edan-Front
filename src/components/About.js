import "../style/css/componentsStyle/about.css";
import CustomizedAccordions from "./ContactSection/CustomizedAccordions";
import WhatsappForm from "./ContactSection/WhatsappForm";

function About() {
  return (
    <div className="wrapper-About">
      <div className="container-About">
        <div className="sectionLeft">
          <div className="titleAbout">
            <h1>PERGUNTAS FREQUENTES</h1>
            <CustomizedAccordions />
          </div>
        </div>
        <div className="sectionRight">
          <WhatsappForm />
        </div>
      </div>
    </div>
  );
}

export default About;

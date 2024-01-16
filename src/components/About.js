import "../style/css/componentsStyle/about.css";
import CustomizedAccordions from "./ContactSection/CustomizedAccordions";
import InputWithIcon from "./ContactSection/InputWithIcon";

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
          <div className="titleAbout">
            <h1>CONTATO</h1>
          </div>
          <InputWithIcon />
        </div>
      </div>
    </div>
  );
}

export default About;

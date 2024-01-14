import "../style/css/componentsStyle/about.css";
import ContactForm from "../components/ContactSection/ContactForm";
import ContactInfo from "../components/ContactSection/ContactInfo";

function About() {
  return (
    <div className="wrapper-About">
      <div className="container-About">
        <div className="sectionLeft">
          <div className="titleAbout">
            <h1>SOBRE A EMPRESA</h1>

            <h4>
              Somos uma empresa líder em consultoria especializada em
              investimentos financeiros
            </h4>
            <br />
          </div>
          <p>
            Com uma reputação consolidada, nossa empresa se destaca como líder
            em consultoria especializada em investimentos financeiros. Contamos
            com uma equipe altamente qualificada de especialistas financeiros
            dedicados a oferecer serviços de excelência aos nossos clientes.
            Nossa abordagem centrada no cliente visa compreender as metas
            financeiras individuais e criar estratégias personalizadas para
            atendê-las. Utilizamos análises de mercado avançadas e informações
            atualizadas para orientar nossas recomendações, sempre priorizando a
            maximização de retornos e a gestão eficaz de riscos. Com um
            compromisso inabalável com a transparência e a ética, estamos
            prontos para liderar nossos clientes em direção ao sucesso
            financeiro duradouro. ‌
          </p>
          <br />
        </div>
        <div className="sectionRight">
          <div className="titleAbout">
            <h1>Faça um orçamento grátis</h1>
          </div>
          <ContactForm />
          <br />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

export default About;

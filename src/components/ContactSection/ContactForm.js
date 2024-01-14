import "../../style/css/componentsStyle/contactus.css";
import "../../style/css/structure-global.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-ContactUs">
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" />
      </div>

      <div className="form-ContactUs">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>

      <div className="form-ContactUs">
        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" />
      </div>

      <div className="form-ContactUs">
        <label htmlFor="site">Site:</label>
        <input type="url" id="site" name="site" />
      </div>

      <div className="form-ContactUs">
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem"></textarea>
      </div>

      <div className="form-ContactUs">
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default ContactForm;

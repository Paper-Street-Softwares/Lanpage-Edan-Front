const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos do formulário */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

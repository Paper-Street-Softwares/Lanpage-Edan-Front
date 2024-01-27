import React, { useState } from "react";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [typeContact, setTypeContact] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    typeContact: "",
    message: "",
  });

  const sendToWhatsapp = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Preencha seu nome.";
    }

    if (!phone) {
      newErrors.phone = "Preencha seu telefone.";
    }

    if (!email) {
      newErrors.email = "Preencha seu e-mail.";
    }

    if (!typeContact) {
      newErrors.typeContact = "Escolha o tipo de contato.";
    }

    if (!message) {
      newErrors.message = "Escreva sua mensagem.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const numeroWhatsapp = "+5571982542995";

    const mensagemWhatsapp = `Nome: ${name} \nTelefone: ${phone} \nEmail: ${email} \nTipo de Contato: ${
      typeContact === "pessoaFisica" ? "Pessoa Física" : "Empresa"
    } \nMensagem: ${message}`;

    const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
      mensagemWhatsapp
    )}`;

    window.location.href = linkWhatsapp;
  };

  return (
    <div className="flex items-center bg-teal-lighter">
      <div className="bg-white w-full rounded shadow-lg p-8 m-4">
        <h1 className="block w-full text-center font-bold uppercase text-grey-darkest mb-6">
          Contato
        </h1>
        <form>
          <div className="flex flex-col mb-2">
            <label className="text-base text-grey-darkest" htmlFor="name">
              Nome:
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest"
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors({ ...errors, name: "" });
              }}
              placeholder="Digite seu nome"
              required
            />
            <div className="text-red-500">{errors.name}</div>
          </div>

          <div className="flex flex-col mb-2">
            <label className="text-base text-grey-darkest" htmlFor="telefone">
              Telefone:
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest"
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setErrors({ ...errors, phone: "" });
              }}
              placeholder="Digite seu telefone"
              required
            />
            <div className="text-red-500">{errors.phone}</div>
          </div>

          <div className="flex flex-col mb-2">
            <label className="text-base text-grey-darkest" htmlFor="email">
              Email:
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest"
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: "" });
              }}
              placeholder="Digite seu email"
              required
            />
            <div className="text-red-500">{errors.email}</div>
          </div>

          <div className="flex flex-col mb-2">
            <label
              className="text-base text-grey-darkest"
              htmlFor="typeContact"
            >
              Tipo de Contato:
            </label>
            <select
              className="border py-2 px-3 text-grey-darkest"
              id="typeContact"
              value={typeContact}
              onChange={(e) => {
                setTypeContact(e.target.value);
                setErrors({ ...errors, typeContact: "" });
              }}
              required
            >
              <option value="">Selecione...</option>
              <option value="pessoaFisica">Pessoa Física</option>
              <option value="empresa">Empresa</option>
            </select>
            <div className="text-red-500">{errors.typeContact}</div>
          </div>

          <div className="flex flex-col mb-2">
            <label className="text-base text-grey-darkest" htmlFor="message">
              Mensagem:
            </label>
            <textarea
              className="border py-2 px-3 text-grey-darkest"
              type="text"
              id="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setErrors({ ...errors, message: "" });
              }}
              placeholder="Digite sua mensagem"
              required
            />
            <div className="text-red-500">{errors.message}</div>
          </div>

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={sendToWhatsapp}
          >
            Enviar para o WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhatsappForm;

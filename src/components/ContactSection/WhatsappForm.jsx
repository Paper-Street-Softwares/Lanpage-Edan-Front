import React, { useState } from "react";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [typeContact, setTypeContact] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");

  const sendToWhatsapp = () => {
    const validationErrors = {};

    if (!validateName(name)) {
      validationErrors.name = "O campo nome é obrigatório";
    }

    if (!validatePhone(phone)) {
      validationErrors.phone = "O campo telefone é obrigatório";
    }

    if (!validateEmail(email)) {
      validationErrors.email = "O campo email é obrigatório";
    }

    if (!validateTypeContact(typeContact)) {
      validationErrors.typeContact = "O campo tipo de contato é obrigatório";
    }

    if (!validateMessage(message)) {
      validationErrors.message = "O campo mensagem é obrigatório";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const numeroWhatsapp = "+5511976564453";

    const mensagemWhatsapp = `Nome: ${name} \nTelefone: ${phone} \nEmail: ${email} \nTipo de Contato: ${
      typeContact === "pessoaFisica" ? "Pessoa Física" : "Empresa"
    } \nMensagem: ${message}`;

    const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
      mensagemWhatsapp
    )}`;

    window.location.href = linkWhatsapp;
  };

  const validateName = (name) => {
    if (!name) {
      return false;
    }
    return true;
  };

  const validatePhone = (phone) => {
    if (!phone) {
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    if (!email) {
      return false;
    }
    return true;
  };

  const validateTypeContact = (typeContact) => {
    if (!typeContact) {
      return false;
    }
    return true;
  };

  const validateMessage = (message) => {
    if (!message) {
      return false;
    }
    return true;
  };

  return (
    <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <h1 className="block w-full text-center uppercase font-bold text-grey-darkest mb-6">
        Entre em contato
      </h1>
      <div className="flex flex-col mb-4">
        <label
          className="tracking-wide text-base text-grey-darkest"
          htmlFor="name"
        >
          Nome:
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest md:mr-2"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          required
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>

      <div className="flex flex-col mb-4">
        <label
          className="tracking-wide text-base text-grey-darkest"
          htmlFor="telefone"
        >
          Telefone:
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest md:mr-2"
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Digite seu telefone"
          required
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>

      <div className="flex flex-col mb-4">
        <label
          className="tracking-wide text-base text-grey-darkest"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest md:mr-2"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          required
        />
        {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
      </div>

      <div className="flex flex-col mb-4">
        <label
          className="tracking-wide text-base text-grey-darkest"
          htmlFor="typeContact"
        >
          Tipo de Contato:
        </label>
        <select
          className="border py-2 px-3 text-grey-darkest md:mr-2"
          id="typeContact"
          value={typeContact}
          onChange={(e) => setTypeContact(e.target.value)}
          required
        >
          <option value="pessoaFisica">Pessoa Física</option>
          <option value="empresa">Empresa</option>
        </select>
        {errors.typeContact && (
          <p className="text-red-500">{errors.typeContact}</p>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label
          className="tracking-wide text-base text-grey-darkest"
          htmlFor="message"
        >
          Mensagem:
        </label>
        <textarea
          className="border py-2 px-3 text-grey-darkest md:mr-2"
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem"
          required
        />
        {errors.message && <p className="text-red-500">{errors.message}</p>}
      </div>

      <div className="flex justify-center">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={sendToWhatsapp}
        >
          Enviar para o WhatsApp
        </button>
      </div>
    </div>
  );
};

export default WhatsappForm;

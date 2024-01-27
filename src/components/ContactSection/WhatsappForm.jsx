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
    const numeroWhatsapp = "+5571982542995";

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
    <div>
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu nome"
        required
      />
      {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}

      <label htmlFor="telefone">Telefone:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Digite seu telefone"
        required
      />
      {errors.phone && <p className="text-red-500 mt-2">{errors.phone}</p>}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email"
        required
      />
      {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}

      <label htmlFor="typeContact">Tipo de Contato:</label>
      <select
        id="typeContact"
        value={typeContact}
        onChange={(e) => setTypeContact(e.target.value)}
        required
      >
        <option value="pessoaFisica">Pessoa Física</option>
        <option value="empresa">Empresa</option>
      </select>
      {errors.typeContact && (
        <p className="text-red-500 mt-2">{errors.typeContact}</p>
      )}

      <label htmlFor="message">Mensagem:</label>
      <input
        type="text"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua mensagem"
        required
      />
      {errors.message && <p className="text-red-500 mt-2">{errors.message}</p>}

      <button onClick={sendToWhatsapp}>Enviar para o WhatsApp</button>
    </div>
  );
};

export default WhatsappForm;

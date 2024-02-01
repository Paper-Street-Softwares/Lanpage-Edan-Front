import React, { useState } from "react";
import WhatsAppIcon from "../../style/assets/icons/WhatsAppIcon.png";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
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

    if (!validateMessage(message)) {
      validationErrors.message = "O campo mensagem é obrigatório";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const numeroWhatsapp = "+5511976564453";

    const mensagemWhatsapp = `Nome: ${name} \nTelefone: ${phone} \nEmail: ${email} \nMensagem: ${message}`;

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
      <h1 className="block w-full text-center uppercase font-bold text-xl text-grey-darkest mb-2">
        Entre em contato agora
      </h1>
      <div className="flex flex-col mb-4">
        <label
          className="tracking-wide text-base text-grey-darkest"
          htmlFor="name"
        >
          Nome:
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          required
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="flex flex-col mb-4">
        <label
          className="tracking-wide text-base text-grey-darkest"
          htmlFor="telefone"
        >
          Telefone:
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest"
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Digite seu telefone"
          required
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div className="flex flex-col mb-4">
        <label
          className="tracking-wide text-base text-grey-darkest"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          required
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-2">{errors.email}</p>
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
          className="border py-2 px-3 text-grey-darkest"
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem"
          required
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      <div className="flex justify-center">
        <button
          className="bg-lightgreen hover:bg-green-800 text-white justify-center items-center text-2xl flex w-full h-16 py-2 px-4"
          onClick={sendToWhatsapp}
        >
          <img
            src={WhatsAppIcon}
            className="w-20 h-20 mr-2 -ml-16"
            alt="WhatsApp Icon"
          />
          Enviar
        </button>
      </div>
    </div>
  );
};

export default WhatsappForm;

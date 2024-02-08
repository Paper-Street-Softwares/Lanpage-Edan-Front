import React, { useState } from "react";
import WhatsAppIcon from "../../style/assets/icons/WhatsAppIcon.png";
import { CiUser, CiPhone, CiMail, CiChat1 } from "react-icons/ci";

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
    const numeroWhatsapp = "+5573999612263";

    const mensagemWhatsapp = `Nome: ${name} \nTelefone: ${phone} \nEmail: ${email} \nMensagem: ${message}`;

    const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
      mensagemWhatsapp
    )}`;

    window.open(linkWhatsapp, "_blank");
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

  const validateMessage = (message) => {
    if (!message) {
      return false;
    }
    return true;
  };

  return (
    <div>
      <h1 className="w-full mb-2 text-xl">Entre em contato agora</h1>
      <div className="mb-5">
        <div className="flex mb-4 text-gray-500">
          <div className="flex items-center justify-center w-12 px-1 bg-white ">
            <CiUser />
          </div>
          <input
            className="w-full px-1 py-2 border-0 rounded-none rounded-tr-none-md rounded-br-none-md"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            required
          />
        </div>
        {errors.name && (
          <p className="-mt-4 -mb-4 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div className="mb-5">
        <div className="flex mb-4 text-gray-500">
          <div className="flex items-center justify-center w-12 px-1 bg-white ">
            <CiPhone />
          </div>
          <input
            className="w-full px-1 py-2 border-0 rounded-none rounded-tr-none-md rounded-br-none-md"
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefone"
            required
          />
        </div>
        {errors.phone && (
          <p className="-mt-4 -mb-4 text-sm text-red-500">{errors.phone}</p>
        )}
      </div>

      <div className="mb-5">
        <div className="flex mb-4 text-gray-500">
          <div className="flex items-center justify-center w-12 px-1 bg-white ">
            <CiMail />
          </div>
          <input
            className="w-full px-1 py-2 border-0 rounded-none rounded-tr-none-md rounded-br-none-md"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
        </div>
        {errors.email && (
          <p className="-mt-4 -mb-4 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div className="mb-5">
        <div className="flex mb-4 text-gray-500">
          <div className="flex justify-center w-12 px-1 bg-white ">
            <CiChat1 className="h-11" />
          </div>
          <textarea
            className="w-full px-1 py-2 border-0 rounded-none rounded-tr-none-md rounded-br-none-md"
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mensagem"
            required
          />
        </div>
        {errors.message && (
          <p className="-mt-4 -mb-4 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <div className="flex justify-center">
        <button
          className="flex items-center w-full h-16 px-4 py-2 text-xl text-white transition rounded-lg bg-primary hover:bg-secondary"
          onClick={sendToWhatsapp}
        >
          <img
            src={WhatsAppIcon}
            className="w-20 h-20 mr-4"
            alt="WhatsApp Icon"
          />
          Solicitar contato
        </button>
      </div>
    </div>
  );
};

export default WhatsappForm;

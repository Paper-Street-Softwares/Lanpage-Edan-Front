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

  const validateName = (name) => !!name;

  const validatePhone = (phone) => {
    const phoneNumberPattern = /^\d+$/;
    return phoneNumberPattern.test(phone);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateMessage = (message) => !!message;

  return (
    <div className="text-paragraph3 phone3:text-paragraph4">
      <h1 className="w-full mb-2 font-medium">Entre em contato agora</h1>
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
          <p className="-mt-2 -mb-1 text-sm text-red-500">{errors.name}</p>
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
            onChange={(e) => {
              const re = /^[0-9\b]+$/;
              if (e.target.value === "" || re.test(e.target.value)) {
                setPhone(e.target.value);
              }
            }}
            placeholder="Telefone"
            inputMode="numeric"
            required
          />
        </div>
        {errors.phone && (
          <p className="-mt-2 -mb-1 text-sm text-red-500">{errors.phone}</p>
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
          <p className="-mt-2 -mb-1 text-sm text-red-500">{errors.email}</p>
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
          <p className="-mt-2 -mb-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <div className="flex justify-center">
        <button
          className="flex items-center w-full px-4 py-2 font-medium text-white transition rounded-lg text-title1 h-14 phone2:h-14 phone3:h18 bg-primary hover:bg-secondary"
          onClick={sendToWhatsapp}
        >
          <img
            src={WhatsAppIcon}
            className="w-16 h-16 mr-4 phone2:w-18 phone2:h-18 phone3:h-18 phone3:w-18 phone3:ml-12 phone2:ml-6 tablet2:ml-1"
            alt="WhatsApp Icon"
          />
          Solicitar contato
        </button>
      </div>
    </div>
  );
};

export default WhatsappForm;

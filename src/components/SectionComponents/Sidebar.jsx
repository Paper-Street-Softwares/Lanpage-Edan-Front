import React, { useState } from "react";

export default function Sidebar() {
  const [showSublistServices, setShowSublistServices] = useState(false);
  const [showSublistLinks, setShowSublistLinks] = useState(false);

  const toggleSublistServices = () => {
    setShowSublistServices(!showSublistServices);
    setShowSublistLinks(false);
  };

  const toggleSublistLinks = () => {
    setShowSublistLinks(!showSublistLinks);
    setShowSublistServices(false);
  };

  return (
    <div className="flex h-screen overflow-hidden text-black bg-white">
      <div className="relative">
        <div
          className={`flex justify-center w-64 p-4 bg-white font-poppins relative ${
            showSublistServices || showSublistLinks ? "mb-16" : ""
          }`}
        >
          <ul className="text-center text-black ">
            <li className="mb-2 font-bold">
              <a href="home" className="hover:text-green-300">
                Início
              </a>
            </li>
            <li className="mb-2 font-bold">
              <a href="about" className="hover:text-green-300">
                Sobre Nós
              </a>
            </li>
            <li className="mb-2 font-bold">
              <a href="services" className="hover:text-green-300">
                Serviços
              </a>
            </li>

            <li className="relative mb-2">
              <button
                className="font-bold cursor-pointer hover:text-green-300"
                onClick={toggleSublistLinks}
              >
                Links
              </button>
              {showSublistLinks && (
                <ul className="relative left-0 p-4 text-sm text-black bg-white top-full">
                  <li className="mb-2">
                    <a href="link1" className="hover:text-green-300">
                      Inscrição Estadual
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="link2" className="hover:text-green-300">
                      Pedido de Viabilidade
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="link2" className="hover:text-green-300">
                      Consultar DBE
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="link2" className="hover:text-green-300">
                      Consulta Optantes Simples
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="link2" className="hover:text-green-300">
                      Pessoa Jurídica
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="link2" className="hover:text-green-300">
                      Pessoa Física
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="link2" className="hover:text-green-300">
                      Acesso e-CAC
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="link2" className="hover:text-green-300">
                      Acesso Gov.Br
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="link2" className="hover:text-green-300">
                      NF Eletrônica
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="link2" className="hover:text-green-300">
                      Cartão CNPJ
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="link2" className="hover:text-green-300">
                      Portal MEI
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="link2" className="hover:text-green-300">
                      Informe de Rendimentos
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative mb-2 ">
              <button
                className="font-bold cursor-pointer hover:text-green-300"
                onClick={toggleSublistServices}
              >
                Certidões
              </button>
              {showSublistServices && (
                <ul className="relative left-0 p-4 text-sm text-black bg-white top-full">
                  <li className="mb-2">
                    <a href="service1" className="hover:text-green-300">
                      CND Receita e Previdência
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="service2" className="hover:text-green-300">
                      CDT Débitos Trabalhistas
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="service2" className="hover:text-green-300">
                      CRF Regularidade do FGTS
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="service2" className="hover:text-green-300">
                      CND Sefaz/Bahia
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="service2" className="hover:text-green-300">
                      CND Prefeitura de Ilhéus/BA
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="service2" className="hover:text-green-300">
                      CND Falência e Concordata
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="service2" className="hover:text-green-300">
                      CND Sefaz/São Paulo
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="service2" className="hover:text-green-300">
                      CND Sefaz/Rio de Janeiro
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2 font-bold">
              <a href="contact" className="hover:text-green-300">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

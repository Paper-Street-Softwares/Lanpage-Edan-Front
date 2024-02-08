import React, { useState } from "react";

export default function Sidebar({ showSidebar }) {
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
    <div
      className={`flex justify-center overflow-hidden text-black  ${
        showSidebar ? "" : "hidden"
      }`}
    >
      <div className="mx-auto">
        <div
          className={`flex h-auto w-80 px-12 py-6 mx-auto bg-white font-poppins ${
            showSublistServices || showSublistLinks ? "mb-16" : ""
          }`}
        >
          <div className="overflow-y-auto">
            <ul className="text-black ">
              <li className="mb-2">
                <a href="home" className="hover:text-green-300">
                  Início
                </a>
              </li>
              <li className="mb-2">
                <a href="about" className="hover:text-green-300">
                  Sobre Nós
                </a>
              </li>
              <li className="mb-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="services"
                  className="hover:text-green-300"
                >
                  Serviços
                </a>
              </li>

              <li className="relative mb-2">
                <button
                  className="cursor-pointer hover:text-green-300"
                  onClick={toggleSublistLinks}
                >
                  Links
                </button>
                {showSublistLinks && (
                  <ul className="relative left-0 p-4 overflow-y-auto text-sm text-black bg-white top-full max-h-48">
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://portal.sefaz.ba.gov.br/scripts/cadastro/cadastroBa/consultaBa.asp"
                        className="hover:text-green-300"
                      >
                        Inscrição Estadual
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://regin.juceb.ba.gov.br/regin.ba/CON_ViabilidadeSelecaoExternoV2.aspx?"
                        className="hover:text-green-300"
                      >
                        Pedido de Viabilidade
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.gov.br/empresas-e-negocios/pt-br/redesim/protocolo-redesim"
                        className="hover:text-green-300"
                      >
                        Consultar DBE
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www8.receita.fazenda.gov.br/SimplesNacional/aplicacoes.aspx?id=22"
                        className="hover:text-green-300"
                      >
                        Consulta Optantes Simples
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://servicos.receita.fazenda.gov.br/Servicos/sicalcweb/default.asp?TipTributo=2&FormaPagto=1"
                        className="hover:text-green-300"
                      >
                        Pessoa Jurídica
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://servicos.receita.fazenda.gov.br/Servicos/sicalcweb/default.asp?TipTributo=1&FormaPagto=1"
                        className="hover:text-green-300"
                      >
                        Pessoa Física
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://cav.receita.fazenda.gov.br/autenticacao/login"
                        className="hover:text-green-300"
                      >
                        Acesso e-CAC
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://sso.acesso.gov.br/login"
                        className="hover:text-green-300"
                      >
                        Acesso Gov.Br
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://ilheus.metropolisweb.com.br:83/metropolisWEB/"
                        className="hover:text-green-300"
                      >
                        NF Eletrônica
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://servicos.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp?cnpj=10949168000100"
                        className="hover:text-green-300"
                      >
                        Cartão CNPJ
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes/atspo/pgmei.app/identificacao"
                        className="hover:text-green-300"
                      >
                        Portal MEI
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://extratoir.inss.gov.br/irpf01/pages/consultarExtratoIR.xhtml"
                        className="hover:text-green-300"
                      >
                        Informe de Rendimentos
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li className="relative mb-2 ">
                <button
                  className="cursor-pointer hover:text-green-300"
                  onClick={toggleSublistServices}
                >
                  Certidões
                </button>
                {showSublistServices && (
                  <ul className="relative left-0 p-4 overflow-y-auto text-sm text-black bg-white top-full max-h-48">
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir"
                        className="hover:text-green-300"
                      >
                        CND Receita e Previdência
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.tst.jus.br/certidao"
                        className="hover:text-green-300"
                      >
                        CDT Débitos Trabalhistas
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf"
                        className="hover:text-green-300"
                      >
                        CRF Regularidade do FGTS
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://sistemas.sefaz.ba.gov.br/sistemas/sigat/Default.Aspx?Modulo=CREDITO&Tela=DocEmissaoCertidaoInternet"
                        className="hover:text-green-300"
                      >
                        CND Sefaz/Bahia
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://ilheus.metropolisweb.com.br:83/metropolisWEB/tributario/emitirCertidaoDebitoPublico.do?metodo=executarListar"
                        className="hover:text-green-300"
                      >
                        CND Prefeitura de Ilhéus/BA
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://esaj.tjba.jus.br/esaj/portal.do?servico=810000"
                        className="hover:text-green-300"
                      >
                        CND Falência e Concordata
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www10.fazenda.sp.gov.br/CertidaoNegativaDeb/Pages/EmissaoCertidaoNegativa.aspx"
                        className="hover:text-green-300"
                      >
                        CND Sefaz/São Paulo
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www4.fazenda.rj.gov.br/certidao-fiscal-web/emitirCertidao.jsf"
                        className="hover:text-green-300"
                      >
                        CND Sefaz/Rio de Janeiro
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="mb-2">
                <a href="contact" className="hover:text-green-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

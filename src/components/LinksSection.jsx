import ImgAndTitleCard from "./SectionComponents/ImgAndTitleCard";
import SectionContent from "./SectionComponents/SectionContent";
import SectionHeader from "./SectionComponents/SectionHeader";
import imgInscricaoEstadual from "../style/assets/images/links-acesso-rápido/sefaz.png";
import imgPedidoViabilidade from "../style/assets/images/links-acesso-rápido/juceb.png";
import imgConsultaDbe from "../style/assets/images/links-acesso-rápido/consultaDbe.png";
import imgConsultaOptanteSimples from "../style/assets/images/links-acesso-rápido/consultaOptantes.png";
import imgDarfReceita from "../style/assets/images/links-acesso-rápido/darfReceitaFederal.png";
import imgEcac from "../style/assets/images/links-acesso-rápido/ecac.png";
import imgGovBr from "../style/assets/images/links-acesso-rápido/govBr.png";
import imgPrefeituraIlheus from "../style/assets/images/links-acesso-rápido/prefeituraIlheus.png";
import imgCartaoCnpj from "../style/assets/images/links-acesso-rápido/cartaoCnpj.png";
import imgMei from "../style/assets/images/links-acesso-rápido/mei.png";
import imgInssInformeRendimentos from "../style/assets/images/links-acesso-rápido/inssInformeDeRendimentos.png";

export default function LinksSection() {
  return (
    <div className="content" id="links">
      <SectionHeader
        sectionHeaderTitleFirst="Principais portais e tabelas"
        sectionHeaderTitleSecond="em um click"
        sectionHeaderDescription="A Edan Contabilidade facilita seu dia a dia com links rápidos em nosso site, proporcionando acesso direto aos principais serviços contábeis. Agilidade ao alcance de um clique, pensando na eficiência do seu negócio."
      />
      <SectionContent>
        {[
          <ImgAndTitleCard
            key={1}
            img={imgInscricaoEstadual}
            imgDescription="Ícone SEFAZ"
            title="Inscrição Estadual"
            link="https://portal.sefaz.ba.gov.br/scripts/cadastro/cadastroBa/consultaBa.asp"
          />,
          <ImgAndTitleCard
            key={2}
            img={imgPedidoViabilidade}
            imgDescription="Ícone Juceb"
            title="Pedido de Viabilidade"
            link="http://regin.juceb.ba.gov.br/regin.ba/CON_ViabilidadeSelecaoExternoV2.aspx?"
          />,
          <ImgAndTitleCard
            key={3}
            img={imgConsultaDbe}
            imgDescription="Ícone Consulta DBE"
            title="Consultar DBE"
            link="https://www.gov.br/empresas-e-negocios/pt-br/redesim/protocolo-redesim"
          />,
          <ImgAndTitleCard
            key={4}
            img={imgConsultaOptanteSimples}
            imgDescription="Ícone Consulta Optantes"
            title="Consulta Optantes Simples"
            link="http://www8.receita.fazenda.gov.br/SimplesNacional/aplicacoes.aspx?id=22"
          />,
          <ImgAndTitleCard
            key={5}
            img={imgDarfReceita}
            imgDescription="Ícone Darf Receita"
            title="Pessoa Jurídica"
            link="http://servicos.receita.fazenda.gov.br/Servicos/sicalcweb/default.asp?TipTributo=2&FormaPagto=1"
          />,
          <ImgAndTitleCard
            key={6}
            img={imgDarfReceita}
            imgDescription="Ícone Darf Receita"
            title="Pessoa Física"
            link="http://servicos.receita.fazenda.gov.br/Servicos/sicalcweb/default.asp?TipTributo=1&FormaPagto=1"
          />,
          <ImgAndTitleCard
            key={7}
            img={imgEcac}
            imgDescription="Ícone ECAC"
            title="Acesso e-CAC"
            link="https://cav.receita.fazenda.gov.br/autenticacao/login"
          />,
          <ImgAndTitleCard
            key={8}
            img={imgGovBr}
            imgDescription="Ícone GovBR"
            title="Acesso Gov.Br"
            link="https://sso.acesso.gov.br/login"
          />,
          <ImgAndTitleCard
            key={9}
            img={imgPrefeituraIlheus}
            imgDescription="Ícone Prefeitura Ilhéus"
            title="NF Eletrônica"
            link="http://ilheus.metropolisweb.com.br:83/metropolisWEB/"
          />,
          <ImgAndTitleCard
            key={10}
            img={imgCartaoCnpj}
            imgDescription="Ícone Cartão CNPJ"
            title="Cartão CNPJ"
            link="https://servicos.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp?cnpj=10949168000100"
          />,
          <ImgAndTitleCard
            key={11}
            img={imgMei}
            imgDescription="Ícone MEI"
            title="Portal MEI"
            link="https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes/atspo/pgmei.app/identificacao"
          />,
          <ImgAndTitleCard
            key={12}
            img={imgInssInformeRendimentos}
            imgDescription="Ícone informe de Rendimentos"
            title="Informe de Rendimentos"
            link="https://extratoir.inss.gov.br/irpf01/pages/consultarExtratoIR.xhtml"
          />,
        ]}
      </SectionContent>
    </div>
  );
}

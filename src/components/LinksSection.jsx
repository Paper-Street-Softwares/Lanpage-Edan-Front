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
    <div className="content">
      <div className="content">
        <SectionHeader
          sectionHeaderTitleFirst="A Edan tem tudo que"
          sectionHeaderTitleSecond="sua empresa precisa"
          sectionHeaderDescription="Não apenas contabilizamos números, construímos caminhos para o seu sucesso financeiro. Nossos diferenciais vão além da simples prestação de serviços contábeis."
        />
        <SectionContent>
          {[
            <ImgAndTitleCard
              key={0}
              img=""
              imgDescription="Ícone "
              title=""
              link="#"
            />,
            <ImgAndTitleCard
              key={1}
              img={imgInscricaoEstadual}
              imgDescription="Ícone SEFAZ"
              title="Inscrição Estadual"
              link="https://portal.sefaz.ba.gov.br/scripts/cadastro/cadastroBa/consultaBa.asp"
            />,
          ]}
        </SectionContent>
      </div>
    </div>
  );
}

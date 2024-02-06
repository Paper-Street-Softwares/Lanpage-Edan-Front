import SectionContent from "./SectionComponents/SectionContent";
import SectionHeader from "./SectionComponents/SectionHeader";
import ImgAndTitleCard from "./SectionComponents/ImgAndTitleCard";
import imgReceitaFederal from "../style/assets/images/certidoes/receitaFederal.png";
import imgTrabalhista from "../style/assets/images/certidoes/certidaoTrabalhista.png";
import imgFGTS from "../style/assets/images/certidoes/fgts.png";
import imgSefaz from "../style/assets/images/certidoes/sefaz.png";
import imgPrefeituraIlheus from "../style/assets/images/certidoes/prefeituraIlheus.png";
import imgFalencia from "../style/assets/images/certidoes/certidaoFalencia.png";
import imgSefazRJ from "../style/assets/images/certidoes/sefazRJ.png";
import imgSefazSP from "../style/assets/images/certidoes/sefazSP.png";

export default function CertificatesSection() {
  return (
    <div className="content" id="certificates">
      <SectionHeader
        sectionHeaderTitleFirst="Todas as certidões que"
        sectionHeaderTitleSecond="sua empresa precisa"
        sectionHeaderDescription="A Edan Contabilidade simplifica seu dia a dia com links diretos em nosso site para retirada ágil das certidões negativas essenciais. Praticidade e eficiência para o sucesso contínuo do seu negócio."
      />
      <SectionContent>
        {[
          <ImgAndTitleCard
            key={1}
            img={imgReceitaFederal}
            imgDescription="Ícone Receita Federal"
            title="CND Receita e Previdência"
            link="https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PJ/Emitir"
          />,
          <ImgAndTitleCard
            key={2}
            img={imgTrabalhista}
            imgDescription="Ícone Certidão Trabalhista"
            title="CDT Débitos Trabalhistas"
            link="http://www.tst.jus.br/certidao"
          />,
          <ImgAndTitleCard
            key={3}
            img={imgFGTS}
            imgDescription="Ícone FGTS"
            title="CRF Regularidade do FGTS"
            link="https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf"
          />,
          <ImgAndTitleCard
            key={4}
            img={imgSefaz}
            imgDescription="Ícone SEFAZ"
            title="CND Sefaz/Bahia"
            link="https://sistemas.sefaz.ba.gov.br/sistemas/sigat/Default.Aspx?Modulo=CREDITO&Tela=DocEmissaoCertidaoInternet"
          />,
          <ImgAndTitleCard
            key={5}
            img={imgPrefeituraIlheus}
            imgDescription="Ícone Prefeitura de Ilhéus"
            title="CND Prefeitura Ilhéus/BA"
            link="http://ilheus.metropolisweb.com.br:83/metropolisWEB/tributario/emitirCertidaoDebitoPublico.do?metodo=executarListar"
          />,
          <ImgAndTitleCard
            key={6}
            img={imgFalencia}
            imgDescription="Ícone Falência e Concordata"
            title="CND Falência e Concordata"
            link="http://esaj.tjba.jus.br/esaj/portal.do?servico=810000"
          />,
          <ImgAndTitleCard
            key={7}
            img={imgSefazSP}
            imgDescription="Ícone Sefaz SP"
            title="CND Sefaz/São Paulo"
            link="https://www10.fazenda.sp.gov.br/CertidaoNegativaDeb/Pages/EmissaoCertidaoNegativa.aspx"
          />,
          <ImgAndTitleCard
            key={8}
            img={imgSefazRJ}
            imgDescription="Ícone Sefaz RJ"
            title="CND Sefaz/Rio de Janeiro"
            link="https://www4.fazenda.rj.gov.br/certidao-fiscal-web/emitirCertidao.jsf"
          />,
        ]}
      </SectionContent>
    </div>
  );
}

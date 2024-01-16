import "../../style/css/componentsStyle/aboutandawards.css";
import OverflowCard from "./OverflowCard";

function AboutAndAwards() {
  return (
    <div className="wrapper-AboutAndAwards">
      <div className="container-AboutAndAwards">
        <div className="sectionLeft-AboutAndAwards">
          <h1>Sobre a EDAN</h1>
          <p>
            Com essa assessoria, alinhada à produtividade da mão de obra, se
            pode realizar um bom planejamento tributário resultando em
            lucratividade. Informamos seus ativos, passivos, receitas, custos e
            despesas.
          </p>
          <p>
            Vivemos em um tempo que códigos e manuais são atualizadas
            constantemente, e essas mutações, oferecem grande risco ao
            patrimônio empresarial caso este não esteja aos cuidados de uma
            contabilidade ágil e atenta a essas variações, haja vista que o
            descumprimento de tais normas, difusas na maioria das vezes, geram
            multas exorbitantes.
          </p>
        </div>
        <div className="sectionRight-AboutAndAwards">
          <h1>Prêmios</h1>
          <OverflowCard />
        </div>
      </div>
    </div>
  );
}

export default AboutAndAwards;

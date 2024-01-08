import "../style/css/componentsStyle/ourservice.css";
import Card from "./Card";
import ButtonSlide from "./ButtonSlide";

function OurService() {
  return (
    <div className="qwerty">
      <div className="wrapper-OurService">
        <div className="title-OurService">
          <h1>Meu Título Central</h1>
        </div>
        <div className="card-OurService">
          <Card
            icone="icone-abertura"
            titulo="Abertura de Empresas"
            conteudo="Abra seu caminho para o sucesso empresarial conosco!"
          />
          <Card
            titulo="Baixas"
            conteudo="Encerre com facilidade: Baixas empresariais descomplicadas e eficientes!"
          />
          <Card
            titulo="Decore"
            conteudo="Decore suas finanças com precisão e tranquilidade."
          />
          <Card
            titulo="Imposto de Renda"
            conteudo="Maximize seu retorno: Especialistas em Imposto de Renda à sua disposição!"
          />
        </div>
      </div>
    </div>
  );
}

export default OurService;

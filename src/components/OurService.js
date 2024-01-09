import "../style/css/componentsStyle/ourservice.css";
import Card from "./Card";

function OurService() {
  return (
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
          icone="icone-abertura"
          titulo="Qualquer Parada"
          conteudo="ESQUEÇA TUDO"
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
  );
}

export default OurService;

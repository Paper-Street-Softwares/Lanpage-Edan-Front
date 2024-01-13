import "../style/css/componentsStyle/ourservice.css";
import Card from "./Card";
import { IconeInvest, IconeMarketing, IconeClients } from "./IconeComponent";

function OurService() {
  return (
    <div className="wrapper-OurService">
      <div className="card-OurService">
        <div className="title-OurService">
          <h1>Porque Somos A Escolha Certa</h1>
        </div>
        <Card
          icone={IconeMarketing}
          titulo="Expertise em Marketing"
          conteudo="Domínio estratégico para resultados excepcionais!"
        />
        <Card
          icone={IconeInvest}
          titulo="Investimento em Série"
          conteudo="Investir para crescimento consistente e sustentável."
        />
        <Card
          icone={IconeClients}
          titulo="Priorize os clientes"
          conteudo="Prioridade para sucesso duradouro e sustentável."
        />
      </div>
    </div>
  );
}

export default OurService;

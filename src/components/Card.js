import "../style/css/componentsStyle/ourservice.css";
import "../style/css/structure-global.css";

const Card = ({ titulo, conteudo }) => {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>{conteudo}</p>
    </div>
  );
};

export default Card;

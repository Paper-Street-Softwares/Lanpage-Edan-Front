import "../style/css/componentsStyle/ourservice.css";
import "../style/css/structure-global.css";
import { FaTimes } from "react-icons/fa";

function Card({ titulo, conteudo }) => {
  return (
    <div className="card">
      <FaTimes />
      <h2>{titulo}</h2>
      <p>{conteudo}</p>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Saiba mais
      </a>
    </div>
  );
}

export default Card;

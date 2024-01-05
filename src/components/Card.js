import "../style/css/componentsStyle/ourservice.css";
import "../style/css/structure-global.css";
import { FaTimes } from "react-icons/fa";

function Card({ titulo, conteudo }) {
  return (
    <div className="card">
      <FaTimes />
      <div>{titulo}</div>
      <div>{conteudo}</div>
      <div>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba mais
        </a>
      </div>
    </div>
  );
}

export default Card;

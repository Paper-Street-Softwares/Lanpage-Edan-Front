import "../style/css/componentsStyle/ourservice.css";
import "../style/css/structure-global.css";
import { ReactPropTypes } from "react";
import { FaTimes } from "react-icons/fa";

const Card = ({ titulo, conteudo }) => {
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
};

Card.prototype = {
  titulo: ReactPropTypes.string.isRequired,
  conteudo: ReactPropTypes.string.isRequired,
};

export default Card;

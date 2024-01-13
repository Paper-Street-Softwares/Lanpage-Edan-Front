import "../style/css/componentsStyle/ourservice.css";
import "../style/css/structure-global.css";
import PropTypes from "prop-types";

function Card({ icone, titulo, conteudo }) {
  const IconeComponent = icone;

  return (
    <div className="card">
      <div className="iconCard">{IconeComponent && <IconeComponent />}</div>
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

Card.propTypes = {
  icone: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  conteudo: PropTypes.string.isRequired,
};

export default Card;

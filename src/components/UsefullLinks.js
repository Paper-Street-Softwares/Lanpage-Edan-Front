import "../style/css/componentsStyle/usefulllinks.css";
import img from "../style/assets/images/ex2.jpg";

function UsefullLinks() {
  return (
    <div className="wrapper-UsefullLinks">
      <div className="title-UsefullLinks">
        <h1>LINKS ÚTEIS</h1>
      </div>
      <div className="container-UsefullLinks">
        <div className="gridCard-UsefullLinks">
          <div className="imageItens-UsefullLinks">
            <img src={img} alt="exemplo de imagem" />
            <p>ipsum</p>
          </div>
          <div className="imageItens-UsefullLinks">
            <img src={img} alt="exemplo de imagem" />
            <p>ipsum</p>
          </div>
          <div className="imageItens-UsefullLinks">
            <img src={img} alt="exemplo de imagem" />
            <p>ipsum</p>
          </div>
          <div className="imageItens-UsefullLinks">
            <img src={img} alt="exemplo de imagem" />
            <p>ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsefullLinks;

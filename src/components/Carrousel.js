import "../style/css/componentsStyle/carrousel.css";
import "../controllers/Slider";
import Wallpaper from "../style/assets/images/carrossel.png";

function Carrousel() {
  return (
    <div>
      <div className="wrapper-slider">
        <img src={Wallpaper} alt="Imagem do carrossel" />
      </div>
    </div>
  );
}

export default Carrousel;

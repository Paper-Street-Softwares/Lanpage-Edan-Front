
import '../style/css/componentsStyle/carrousel.css'
import '../controllers/Slider'
import { MdArrowForwardIos } from "react-icons/md";
import img1 from '../images/carrossel/cloud1.jpg'
import img2 from '../images/carrossel/cloud2.jpg'
import img3 from '../images/carrossel/cloud3.jpg'

function Carrousel() {

  return (
    <div className="wrapper-slider">
        <div className="btns-slide">
          <button id="prev-button"><MdArrowForwardIos /></button>
          <button id="next-button"><MdArrowForwardIos /></button>
        </div>
        <div className="wrapper-images">

          <div className="slider on">
            <h1>TEXT1</h1>
            <img src={img1} alt="cloud1"/>
          </div>

          <div className="slider">
            <h1>TEXT2</h1>
            <img src={img2} alt="cloud2" />
          </div>

          <div className="slider">
            <h1>TEXT3</h1>
            <img src={img3} alt="cloud3" />
          </div>

        </div>
    </div>
  );
}

export default Carrousel;
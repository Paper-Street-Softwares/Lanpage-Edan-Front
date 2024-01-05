
import '../style/css/componentsStyle/carrousel.css'
import '../controllers/Slider'
import img1 from '../images/carrossel/cloud1.jpg'
import img2 from '../images/carrossel/cloud2.jpg'
import img3 from '../images/carrossel/cloud3.jpg'
import arrow from '../images/carrossel/arrow.png'

function Carrousel() {
  return (
    <div className="wrapper-slider">
      <button id="prev-button"><img src={arrow} alt="prev-button"/></button>
        <div className="wrapper-images">
          <img src={img1} alt="cloud1" className="slider on"/>
          <img src={img2} alt="cloud2" className="slider"/>
          <img src={img3} alt="cloud3" className="slider"/>
        </div>
      <button id="next-button"><img src={arrow} alt="next-button"/></button>
    </div>
  );
}

export default Carrousel;
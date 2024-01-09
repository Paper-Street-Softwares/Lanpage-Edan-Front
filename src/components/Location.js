import "../style/css/componentsStyle/location.css";
import "../gateways/api/Map";
import Map from "../gateways/api/Map";

function Location() {
  return (
    <div className="wrapper-Location">
      <div className="container-Location">
        <div className="esquerda">
          <div className="titleLeft-Location">
            <h1>Div esquerda</h1>
            <h3>Algum conteúdo relacionado com localização</h3>
          </div>
        </div>
        <div className="direita">
          <div className="titleRight-Location">
            <h1>Nos encontre aqui: esqueça tudo</h1>
            <div className="container-Map">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;

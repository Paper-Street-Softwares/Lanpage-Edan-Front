import "../style/css/componentsStyle/location.css";
import MapLocation from "../../gateways/api/MapLocation";
import MapImg from "../style/assets/images/Map.png";

function Location() {
  return (
    <div className="wrapper-Location">
      <div className="container-Location">
        <div className="sectionLeft">
          <div className="titleLeft-Location">
            <h1>Descubra a Localização Estratégica da Nossa Empresa</h1>
          </div>
          <div className="text-Location">
            <p>
              Estamos empolgados em compartilhar que a nossa empresa está
              estrategicamente localizada em [CIDADE OU REGIÃO], um ponto
              central que reflete não apenas a nossa presença geográfica, mas
              também a nossa conexão com a vibrante comunidade que nos rodeia.
              Situada em meio a [DESTAQUES GEOGRÁFICOS LOCAIS, SE APLICÁVEL],
              nossa localização não só facilita o acesso para clientes e
              parceiros, mas também nos proporciona um ambiente inspirador para
              inovação e colaboração. Estamos comprometidos em servir a
              comunidade local e global a partir deste ponto estratégico,
              consolidando assim nossa presença como uma empresa líder na
              indústria. Visite-nos e descubra como nossa localização desempenha
              um papel crucial em moldar quem somos e no que acreditamos.
            </p>
          </div>
        </div>
        <div className="sectionRight">
          <div className="titleRight-Location">
            <h1>Nos encontre aqui:</h1>
          </div>
          <div className="container-Map">
            <MapLocation />
            <img src={MapImg} alt="mapa da localização" />
          </div>
          <div className="address-Location">
            <p>Endereço: Rua 123, Centro, Cidade Velha</p>
            <p>CEP: 51000-000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;

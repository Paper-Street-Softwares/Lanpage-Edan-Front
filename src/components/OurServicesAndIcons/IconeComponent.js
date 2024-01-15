import img2 from "../../style/assets/images/ex2.jpg";

function IconeMarketing() {
  return (
    <div className="imgCard">
      <img src={img2} alt="icone de marketing" />
    </div>
  );
}

function IconeInvest() {
  return (
    <div className="imgCard">
      <img src={img2} alt="icone de investimento" />
    </div>
  );
}

function IconeClients() {
  return (
    <div className="imgCard">
      <img src={img2} alt="icone de clientes" />
    </div>
  );
}

export { IconeInvest, IconeMarketing, IconeClients };

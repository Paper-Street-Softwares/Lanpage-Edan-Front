import "../../style/css/componentsStyle/ourservice.css";
import MultipleItems from "./MultipleItems";

function OurService() {
  return (
    <div className="wrapper-OurService">
      <div className="card-OurService">
        <div className="title-OurService">
          <h2>
            O que nos faz diferentes das outras contabilidades e garante que
            você pode confiar na EDAN?
          </h2>
          <MultipleItems />
        </div>
      </div>
    </div>
  );
}

export default OurService;

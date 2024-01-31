import imgAbertura from "../../style/assets/icons/servicos/abertura.png";

export default function StandardServiceCard() {
  return (
    <a
      href=""
      target="_blank"
      className="flex flex-col justify-between items-center w-36 h-56 mt-2 mb-2 border-solid border-neutral-200 border-t border-r border-l border-b-8 border-b-mediumgreen"
    >
      <div className="bg-red-100 w-full h-3/5 flex flex-row items-center justify-center">
        <div>
          <img
            src={imgAbertura}
            alt="{imgDescription}"
            className="bg-yellow-100 h-16 w-auto"
          ></img>
        </div>
      </div>
      <div className="bg-blue-700 w-full h-full flex font-poppins flex-col justify-between items-center">
        <div className="bg-purple-700 h-1/3 flex flex-col justify-end p-1">
          <div className="bg-pink-700 text-darkgreen text-center font-bold text-sm hover:text-lightgreen">
            Abertura de Empresas
          </div>
        </div>
        <div className="bg-yellow-500 h-2/3 flex flex-col justify-center text-center p-2">
          <div className="bg-white text-xs">
            Entao ndasdsa dasdasdas dasdasdas ads asdasa
          </div>
        </div>
      </div>
    </a>
  );
}

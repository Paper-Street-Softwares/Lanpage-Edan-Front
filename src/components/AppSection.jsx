import SectionContent from "../components/SectionComponents/SectionContent";
import imgAppScreen from "../style/assets/images/aplicativo/appScreens.png";

export default function AppSection() {
  return (
    <div className="content">
      <div className="feature">
        <SectionContent>
          <div className="bg-red-100 flex flex-col justify-around w-128">
            <div className="bg-yellow-100 flex flex-row justify-center font-poppins font-bold text-2xl text-darkgreen text-center">
              Baixe nosso aplicativo e tenha inúmeras vantagens
            </div>
            <div className="bg-green-100 flex flex-row justify-center">
              <img src={imgAppScreen} />
            </div>
          </div>
          <div className="bg-green-100 flex flex-col justify-around w-128 h-40">
            <div className="bg-purple-100 flex flex-row justify-center">
              Algumas funcionalidades do nosso aplicativo
            </div>
            <div className="bg-red-100 flex flex-row justify-center">
              Aqui vai a imagem da direita
            </div>
            <div className="bg-blue-100 flex flex-row justify-around items-center h-10 ">
              <div>Botao 1</div>
              <div>Botao 2</div>
            </div>
          </div>
        </SectionContent>
      </div>
    </div>
  );
}

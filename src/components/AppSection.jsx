import SectionContent from "../components/SectionComponents/SectionContent";
import imgAppScreen from "../style/assets/images/aplicativo/appScreens.png";
import imgAppUtilities from "../style/assets/images/aplicativo/appUtilities.png";
import imgAppStore from "../style/assets/images/aplicativo/appStore.png";
import imgPlayStore from "../style/assets/images/aplicativo/playStore.png";

export default function AppSection() {
  return (
    <div className="content">
      <div className="feature">
        <SectionContent>
          <div className="bg-red-100 flex flex-col justify-around w-128">
            <div className="bg-yellow-100 flex flex-row justify-center font-poppins font-bold text-2xl text-mediumgreen text-center">
              Baixe nosso aplicativo e tenha inúmeras vantagens
            </div>
            <div className="bg-green-100 flex flex-row justify-center">
              <img src={imgAppScreen} />
            </div>
          </div>
          <div className="bg-mediumgreen flex flex-col justify-around w-128">
            <div className="bg-purple-100 flex flex-row justify-center font-poppins font-bold text-2xl text-white text-center">
              Algumas funcionalidades do nosso aplicativo
            </div>
            <div className="bg-red-100 flex flex-row justify-center">
              <img className="w-4/5" src={imgAppUtilities}></img>
            </div>
            <div className="bg-blue-100 flex flex-row justify-around items-center h-10 ">
              <img className="h-11" src={imgAppStore} />
              <img className="h-11" src={imgPlayStore} />
            </div>
          </div>
        </SectionContent>
      </div>
    </div>
  );
}

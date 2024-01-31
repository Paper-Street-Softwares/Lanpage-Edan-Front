import SectionContent from "../components/SectionComponents/SectionContent";
import imgAppScreen from "../style/assets/images/aplicativo/appScreens.png";
import imgAppUtilities from "../style/assets/images/aplicativo/appUtilities.png";
import imgAppStore from "../style/assets/images/aplicativo/appStore.png";
import imgPlayStore from "../style/assets/images/aplicativo/playStore.png";

export default function AppSection() {
  return (
    <div className="content">
      <div className="feature mt-8 mb-8">
        <SectionContent>
          <div className="flex flex-col justify-around w-128 h-128">
            <div className="h-1/5 flex flex-col justify-center items-center">
              <div className="flex flex-row justify-center font-poppins font-bold text-2xl text-mediumgreen text-center">
                Baixe nosso aplicativo e tenha inúmeras vantagens
              </div>
            </div>
            <div className="h-4/5 flex flex-col justify-around items-center">
              <div className=" flex flex-row justify-center items-center">
                <img
                  className="h-4/5"
                  alt="Telas de celulares"
                  src={imgAppScreen}
                />
              </div>
            </div>
          </div>
          <div className="bg-mediumgreen flex flex-col justify-around w-128 h-128">
            <div className="h-1/5 flex flex-col justify-center items-center">
              <div className="flex flex-row justify-center font-poppins font-bold text-2xl text-white text-center">
                Algumas funcionalidades do nosso aplicativo
              </div>
            </div>
            <div className="h-4/5 flex flex-col justify-around items-center">
              <div className="flex flex-row justify-center">
                <img
                  className="w-4/5"
                  alt="Utilidades do aplicativo Edan"
                  src={imgAppUtilities}
                ></img>
              </div>
              <div className="flex flex-row justify-around items-center">
                <img className="h-11" alt="Botão App Store" src={imgAppStore} />
                <img
                  className="h-11"
                  alt="Bitão Play Store"
                  src={imgPlayStore}
                />
              </div>
            </div>
          </div>
        </SectionContent>
      </div>
    </div>
  );
}

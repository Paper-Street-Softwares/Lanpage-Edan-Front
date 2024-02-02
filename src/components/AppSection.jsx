import SectionContent from "../components/SectionComponents/SectionContent";
import imgAppScreen from "../style/assets/images/aplicativo/appScreens.png";
import imgAppUtilities from "../style/assets/images/aplicativo/appUtilities.png";
import imgAppStore from "../style/assets/images/aplicativo/appStore.png";
import imgPlayStore from "../style/assets/images/aplicativo/playStore.png";

export default function AppSection() {
  return (
    <div className="content">
      <div className="mt-8 mb-8 feature">
        <SectionContent>
          <div className="flex flex-col justify-around w-128 h-128">
            <div className="flex flex-col items-center justify-center h-1/5">
              <div className="flex flex-row justify-center text-2xl font-bold text-center font-poppins text-mediumgreen">
                Baixe nosso aplicativo e tenha inúmeras vantagens
              </div>
            </div>
            <div className="flex flex-col items-center justify-around h-4/5">
              <div className="flex flex-row items-center justify-center ">
                <img
                  className="h-4/5"
                  alt="Telas de celulares"
                  src={imgAppScreen}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around bg-mediumgreen w-128 h-128">
            <div className="flex flex-col items-center justify-center h-1/5">
              <div className="flex flex-row justify-center text-2xl font-bold text-center text-white font-poppins">
                Algumas funcionalidades do nosso aplicativo
              </div>
            </div>
            <div className="flex flex-col items-center justify-around  h-4/5">
              <div className="flex flex-row justify-center">
                <img
                  className="w-4/6"
                  alt="Utilidades do aplicativo Edan"
                  src={imgAppUtilities}
                ></img>
              </div>
              <div className="flex flex-row justify-around w-4/5 h-auto ">
                <a
                  href="https://apps.apple.com/il/app/edan-contabilidade/id6473044144"
                  target="_blank"
                >
                  <img
                    className="h-11"
                    alt="Botão App Store"
                    src={imgAppStore}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=br.com.taskdo.mobile.edan&hl=ln&gl=US"
                  target="_blank"
                >
                  <img
                    className="h-11"
                    alt="Botão Play Store"
                    src={imgPlayStore}
                  />
                </a>
              </div>
            </div>
          </div>
        </SectionContent>
      </div>
    </div>
  );
}

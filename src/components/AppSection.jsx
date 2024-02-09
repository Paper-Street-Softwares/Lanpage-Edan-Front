import SectionContent from "../components/SectionComponents/SectionContent";
import imgAppScreen from "../style/assets/images/aplicativo/appScreens.png";
import imgAppUtilities from "../style/assets/images/aplicativo/appUtilities2.png";
import imgAppStore from "../style/assets/images/aplicativo/appStore.png";
import imgPlayStore from "../style/assets/images/aplicativo/playStore.png";

export default function AppSection() {
  return (
    <div className="content">
      <div className="mt-8 mb-8 bg-neutral-200 feature">
        <SectionContent>
          <div className="flex flex-col justify-between w-full bg-yellow-500 h-128 tablet2:w-72 desktop1:w-112">
            <div className="flex flex-col items-center justify-center bg-red-700 h-28">
              <h1 className="flex flex-col justify-center font-bold text-center bg-green-200 text-title1 font-poppins text-secondary">
                Baixe nosso aplicativo e tenha inúmeras vantagens asdasd dasdasd
                sdadasd
              </h1>
            </div>
            <div className="flex flex-col items-center justify-around flex-grow bg-blue-500">
              <img
                className="w-11/12"
                alt="Telas de celulares"
                src={imgAppScreen}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start w-full bg-secondary h-128 tablet2:w-72 desktop1:w-112">
            <div className="flex items-center justify-center bg-pink-500 h-28">
              <h1 className="flex flex-row justify-center font-bold text-center text-white bg-blue-700 text-title1 font-poppins">
                Baixe nosso aplicativo e tenha inúmeras vantagens asdasd dasdasd
                sdadasd
              </h1>
            </div>
            <div className="flex flex-col items-center justify-around flex-grow bg-green-600">
              <div className="flex flex-row justify-center bg-red-600">
                <img
                  className="w-4/5 bg-blue-800"
                  alt="Utilidades do aplicativo Edan"
                  src={imgAppUtilities}
                ></img>
              </div>
              <div className="flex flex-row justify-between w-4/5 bg-pink-700">
                <a
                  href="https://apps.apple.com/il/app/edan-contabilidade/id6473044144"
                  target="_blank"
                >
                  <img
                    className="h-8 tablet1:h-12 tablet2:h-11"
                    alt="Botão App Store"
                    src={imgAppStore}
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=br.com.taskdo.mobile.edan&hl=ln&gl=US"
                  target="_blank"
                >
                  <img
                    className="h-8 tablet1:h-12 tablet2:h-11"
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

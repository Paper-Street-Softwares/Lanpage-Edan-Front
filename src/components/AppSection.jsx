import SectionContent from "../components/SectionComponents/SectionContent";
import imgAppScreen from "../style/assets/images/aplicativo/appScreens.png";
import imgAppUtilities from "../style/assets/images/aplicativo/appUtilities2.png";
import imgAppStore from "../style/assets/images/aplicativo/appStore.png";
import imgPlayStore from "../style/assets/images/aplicativo/playStore.png";

export default function AppSection() {
  return (
    <div className="content">
      <div className="mt-8 mb-8 feature">
        <SectionContent>
          <div className="flex flex-col justify-around w-full bg-yellow-500 h-96 tablet1:h-112 tablet2:w-72 desktop1:w-112 xl:w-128">
            <div className="flex flex-col items-center justify-center bg-red-700 h-1/5">
              <div className="flex flex-row justify-center mx-2 text-2xl font-bold text-center bg-green-200 font-poppins text-secondary tablet1:text-title3 tablet2:mx-3">
                Baixe nosso aplicativo e tenha inúmeras vantagens
              </div>
            </div>
            <div className="flex flex-col items-center justify-around h-4/5">
              <div className="flex flex-row items-center justify-center ">
                <img
                  className="h-4/5 tablet1:h-3/5 tablet2:h-4/5"
                  alt="Telas de celulares"
                  src={imgAppScreen}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around w-full bg-secondary h-96 tablet1:h-[680px] phone1:h-112 phone2:h-128 tablet2:w-72 tablet2:h-128 desktop1:w-112">
            <div className="flex flex-col items-center justify-center bg-pink-500 h-1/5">
              <div className="flex flex-row justify-center mx-4 mt-6 text-base font-bold text-center text-white bg-blue-700 font-poppins tablet1:text-title3 tablet2:text-2xl tablet2:mx-4">
                Algumas funcionalidades do nosso aplicativo
              </div>
            </div>
            <div className="flex flex-col items-center justify-around bg-green-400 h-4/5">
              <div className="flex flex-row justify-center bg-red-600">
                <img
                  className="bg-blue-800 w-5/6 tablet2:w-[90%]"
                  alt="Utilidades do aplicativo Edan"
                  src={imgAppUtilities}
                ></img>
              </div>
              <div className="bg-pink-700 flex flex-row justify-around w-4/5 h-8 tablet2:w-[90%]">
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

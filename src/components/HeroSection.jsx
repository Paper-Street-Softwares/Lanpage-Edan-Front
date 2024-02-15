import bgImage from "../style/assets/images/BackgroundImage.png";
import WhatsappForm from "./SectionComponents/WhatsappForm";
import MotionDivLeftToRight from "./SectionComponents/MotionDivLeftToRight";
import MotionDivRightToLeft from "./SectionComponents/MotionDivRightToLeft";

export default function HeroSection() {
  return (
    <div className="content" id="home">
      <div className="h-auto full">
        <div
          className="w-full bg-center bg-cover content md:min-h-0"
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        >
          <div className="flex flex-wrap items-center justify-between w-full h-full mt-10 text-white font-poppins ">
            <div className="w-full tablet2:w-auto tablet2:flex-1 tablet2:mr-11">
              <div className="h-64 mt-16 w-fit phone2:h-64 phone3:h-64 tablet1:h-60 tablet2:h-112">
                <h1 className="mb-2 font-bold leading-7 text-title4 tablet1:leading-none tablet1:text-title5 tablet2:text-title6">
                  <MotionDivLeftToRight>Solução e</MotionDivLeftToRight>
                </h1>
                <h1 className="font-bold leading-7 mb-9 text-title4 tablet1:leading-none tablet1:text-title5 tablet2:text-title6 phone2:mb-11">
                  <MotionDivLeftToRight>Resultado!</MotionDivLeftToRight>
                </h1>
                <p className="text-paragraph3 tablet2:text-paragraph4">
                  <MotionDivLeftToRight>
                    Experiência que Conta! Com mais de 40 anos de experiência,
                    oferecemos conhecimento sólido para lidar com os desafios
                    contábeis do seu negócio.
                  </MotionDivLeftToRight>
                </p>
              </div>
            </div>
            <div className="w-full mb-16 md:w-auto md:mb-0 mt-[-64px] md:mt-0">
              <MotionDivRightToLeft>
                <WhatsappForm />
              </MotionDivRightToLeft>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

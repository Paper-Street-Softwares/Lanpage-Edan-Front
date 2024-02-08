import bgImage from "../style/assets/images/BackgroundImage.png";
import WhatsappForm from "./SectionComponents/WhatsappForm";

export default function HeroSection() {
  return (
    <div className="content" id="home">
      <div className="h-auto full">
        <div
          className="w-full bg-center bg-cover content md:min-h-0"
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        >
          <div className="flex flex-wrap items-center justify-between w-full h-full mt-10 text-white opacity-0 font-poppins animate-fade-in">
            <div className="w-full md:w-auto md:flex-1 md:mr-11">
              <div className="h-64 mt-16 phone2:h-64 phone3:h-96">
                <h1 className="mb-2 font-bold leading-7 text-title4 phone3:leading-none phone3:text-title6">
                  Solução e
                </h1>
                <h1 className="font-bold leading-7 mb-9 text-title4 phone3:leading-none phone3:text-title6 phone2:mb-11">
                  Resultado!
                </h1>
                <p className="text-paragraph3 phone3:text-xl">
                  Experiência que Conta! Com mais de 40 anos de experiência,
                  oferecemos conhecimento sólido para lidar com os desafios
                  contábeis do seu negócio.
                </p>
              </div>
            </div>
            <div className="w-full mb-16 md:w-auto md:mb-0 mt-[-64px] md:mt-0">
              <WhatsappForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import bgImage from "../style/assets/images/BackgroundImage.png";
import WhatsappForm from "./SectionComponents/WhatsappForm";

export default function HeroSection() {
  return (
    <div className="content" id="home">
      <div className="full">
        <div
          className="content bg-center bg-cover h-[600px] w-full h-200"
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        >
          <div className="flex items-center justify-between w-full h-auto text-white opacity-0 font-poppins animate-fade-in">
            <div className="mt-16 h-96 mr-11">
              <h1 className="mb-2 text-5xl font-bold">Solução e</h1>
              <h1 className="text-5xl font-bold mb-11">Resultado!</h1>
              <p className="text-xl mr-11">
                Experiência que Conta! Com mais de 40 anos de experiência,
                oferecemos conhecimento sólido para lidar com os desafios
                contábeis do seu negócio.
              </p>
            </div>
            <div className="w-full">
              <WhatsappForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

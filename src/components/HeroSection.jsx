import bgImage from "../style/assets/images/BackgroundImage.png";
import WhatsappForm from "./SectionComponents/WhatsappForm";

export default function HeroSection() {
  return (
    <div className="content" id="home">
      <div className="full">
        <div
          className="content bg-center bg-cover h-[773px] w-full h-200"
          style={{ backgroundImage: "url(" + bgImage + ")" }}
        >
          <div className="flex justify-center text-white items-center w-full h-auto font-poppins opacity-0 animate-fade-in">
            <div className="mr-12">
              <h1 className="font-bold text-5xl mb-11">Solução e Resuldado!</h1>
              <p className="text-xl">
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

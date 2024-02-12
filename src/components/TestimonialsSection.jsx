import imgOfficeGreenBackground from "../style/assets/images/BackgroundImage.png";
import avatar from "../style/assets/images/testemunhos/avatar.png";

export default function ParallaxSectionWithContent() {
  return (
    <div
      className="mt-12 bg-center bg-cover tablet2:mt-28 content"
      style={{
        backgroundImage: `url(${imgOfficeGreenBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <div className="flex flex-col items-center justify-center w-full font-poppins text-paragraph3 phone3:text-paragraph4">
        <div className="flex flex-col w-full phone3:w-[80%] m-[10%] text-center items-center text-white">
          <p>
            "A Edan Contabilidade é demais! Eles cuidam da minha empresa com
            maestria total. Estou super satisfeito e recomendo muito!"
          </p>
          <img
            alt="Foto de perfil"
            className="rounded-full w-[15%] my-[5%] phone3:w-[7%] phone3:my-[3%]"
            src={avatar}
          ></img>
          <h1 className="font-medium">Ivan Coelho</h1>
          <p className="text-paragraph1 phone3:text-paragraph2">
            Auto Posto Pontal
          </p>
        </div>
      </div>
    </div>
  );
}

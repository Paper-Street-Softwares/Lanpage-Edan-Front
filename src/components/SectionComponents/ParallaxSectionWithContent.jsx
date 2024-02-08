import SectionContent from "./SectionComponents/SectionContent";
import imgOfficeGreenBackground from "../style/assets/images/BackgroundImage.png";

export default function TestimonialsSection() {
  return (
    <div
      className="bg-center bg-cover feature h-52"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <SectionContent>
        <div className="w-full h-52">
          <div className="flex flex-row items-center justify-center bg-green-900 h-52">
            <div className="flex flex-col justify-around text-white bg-green-700 h-52">
              Center
            </div>
          </div>
        </div>
      </SectionContent>
    </div>
  );
}

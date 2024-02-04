import SectionContent from "./SectionComponents/SectionContent";
import imgOfficeGreenBackground from "../style/assets/images/BackgroundImage.png";

export default function TestimonialsSection() {
  return (
    <div
      className="bg-fixed bg-red-100 mt-28 content"
      style={{ backgroundImage: `url(${imgOfficeGreenBackground})` }}
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

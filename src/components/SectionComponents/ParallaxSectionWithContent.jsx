import imgOfficeGreenBackground from "../../style/assets/images/BackgroundImage.png";

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
      <div className="flex items-center justify-center w-full h-52">
        <h1 className="text-center text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
          explicabo in! Quia, mollitia, aspernatur tempore non illum quo id
          quibusdam excepturi, dolores accusantium eveniet! Veritatis facilis
          soluta et dolorem exercitationem.
        </h1>
      </div>
    </div>
  );
}

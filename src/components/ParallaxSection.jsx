import paralaxBg from "../style/assets/images/paralaxe/paralaxeBg1.jpg";

export default function ParallaxSection() {
  return (
    <div className="mt-10 full">
      <div className="full">
        <div
          className="bg-fixed feature h-52"
          style={{ backgroundImage: `url(${paralaxBg})` }}
        ></div>
      </div>
    </div>
  );
}

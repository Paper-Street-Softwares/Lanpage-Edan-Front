import paralaxBg from "../style/assets/images/paralaxe/paralaxeBg1.jpg";

export default function ParallaxSection() {
  return (
    <div className="full">
      <div className="full">
        <div
          className="feature h-52 bg-fixed"
          style={{ backgroundImage: `url(${paralaxBg})` }}
        ></div>
      </div>
    </div>
  );
}

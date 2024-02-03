export default function ParallaxSection(props) {
  const { img } = props;

  return (
    <div className="mt-10 full">
      <div className="full">
        <div
          className="bg-fixed feature h-52"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </div>
  );
}

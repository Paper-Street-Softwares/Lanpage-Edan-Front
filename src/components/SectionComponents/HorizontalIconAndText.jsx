export default function HonrizontalIconAndText(props) {
  const { img, imgAlt, text, textLine2, textLine3, textLine4 } = props;

  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-center">
        <img className="w-6" alt={imgAlt} src={img} />
      </div>
      <div className="flex flex-col justify-center w-full ml-4 text-xs items-left">
        <div>{text}</div>
        <div>{textLine2}</div>
        <div>{textLine3}</div>
        <div>{textLine4}</div>
      </div>
    </div>
  );
}

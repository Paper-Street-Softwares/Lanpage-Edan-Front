export default function HonrizontalIconAndText(props) {
  const { img, imgAlt, text, textLine2, textLine3, textLine4 } = props;

  return (
    <div className="flex flex-col bg-yellow-700 phone3:flex-row">
      <div className="flex flex-col items-center justify-center bg-blue-700">
        <img className="w-6 " alt={imgAlt} src={img} />
      </div>
      <div className="flex flex-col justify-center w-full bg-green-500 phone3:ml-4 items-left">
        <div>{text}</div>
        <div>{textLine2}</div>
        <div>{textLine3}</div>
        <div>{textLine4}</div>
      </div>
    </div>
  );
}

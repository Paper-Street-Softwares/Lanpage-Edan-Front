export default function HonrizontalIconAndText(props) {
  const { img, imgAlt, text, textLine2, textLine3, textLine4 } = props;

  return (
    <div className="flex flex-col phone3:flex-row">
      <div className="flex flex-col items-center justify-center">
        <img className="w-6 m-2 phone3:m-0 " alt={imgAlt} src={img} />
      </div>
      <div className="flex flex-col justify-center w-full mb-2 phone3:ml-4 phone3:mb-0 items-left">
        <div>{text}</div>
        <div>{textLine2}</div>
        <div>{textLine3}</div>
        <div>{textLine4}</div>
      </div>
    </div>
  );
}

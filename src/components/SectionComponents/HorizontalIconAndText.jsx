export default function HonrizontalIconAndText(props) {
  const { icon, textLine1, textLine2, textLine3 } = props;

  return (
    <div className="bg-blue-300 h-auto w-full flex flex-row justify-start">
      <div className="bg-yellow-400 w-full flex flex-row items-center">
        <div className="bg-green-400 w-1/5 flex flex-row justify-start items-center mr-2">
          <img className="h-8" src={icon} />
        </div>
        <div>{textLine1}</div>
        <div>{textLine2}</div>
        <div className="bg-blue-100">{textLine3}</div>
      </div>
    </div>
  );
}

export default function HonrizontalIconAndText(props) {
  const { icon, textLine1, textLine2, textLine3 } = props;

  return (
    <div className="flex flex-row justify-start">
      <div className="h-16 w-full flex flex-row items-center">
        <div className="flex flex-row items-center mr-2">
          <img alt="Icon" className="h-6" src={icon} />
        </div>
        <div className="h-auto flex flex-col justify-center items-left">
          <div>{textLine1}</div>
          <div>{textLine2}</div>
          <div>{textLine3}</div>
        </div>
      </div>
    </div>
  );
}

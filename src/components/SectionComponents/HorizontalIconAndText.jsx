export default function HonrizontalIconAndText(props) {
  const { icon, textLine1, textLine2, textLine3 } = props;

  return (
    <div className="flex flex-row justify-start">
      <div className="flex flex-row items-center w-full h-16">
        <div className="flex flex-row items-center mr-2">
          <img alt="Icon" className="h-6" src={icon} />
        </div>
        <div className="flex flex-col justify-center h-auto items-left">
          <div>{textLine1}</div>
          <div>{textLine2}</div>
          <div>{textLine3}</div>
        </div>
      </div>
    </div>
  );
}

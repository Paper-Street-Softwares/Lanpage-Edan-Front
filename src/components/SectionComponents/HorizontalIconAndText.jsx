export default function HonrizontalIconAndText(props) {
  const { icon, text } = props;

  return (
    <div className="bg-blue-300 h-auto w-full flex flex-row justify-start">
      <div className="bg-yellow-400 w-full flex flex-row items-center">
        <div className="bg-green-400 w-1/5 flex flex-row justify-start items-center mr-2">
          {icon}
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
}

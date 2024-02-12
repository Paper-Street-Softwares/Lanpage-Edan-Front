export default function HonrizontalIconAndText(props) {
  const { img, imgAlt, number, text } = props;

  return (
    <div className=" flex flex-row my-[10%] phone3:my-[3%] w-[85%] phone3:w-[40%] items-center font-poppins phone3:mx-[2%]">
      <div className=" flex flex-col justify-center items-center h-16 w-16 border-solid border-[3px] border-verylighter">
        <img className="w-[40%]" alt={imgAlt} src={img} />
      </div>
      <div className="flex flex-col justify-center flex-1 ml-[5%]">
        <div className="font-extrabold text-left text-verylighter text-title4">
          {number}
        </div>
        <div className="text-left text-white text-paragraph2">{text}</div>
      </div>
    </div>
  );
}

export default function HonrizontalIconAndText(props) {
  const { img, imgAlt, number, text } = props;

  return (
    <div className="flex flex-row items-center my-[10%] w-full phone3:my-[3%] phone3:w-[40%] font-poppins phone3:mx-[2%]">
      <div className="flex flex-col justify-center items-center h-[68px] w-[68px] border-solid border-[3px] border-primary">
        <img className="w-[50%]" alt={imgAlt} src={img} />
      </div>
      <div className="flex flex-col justify-center flex-1 ml-[5%]">
        <div className="flex flex-col justify-start font-extrabold leading-none text-primary text-title2">
          {number}
        </div>
        <div className="text-left text-white text-paragraph1">{text}</div>
      </div>
    </div>
  );
}

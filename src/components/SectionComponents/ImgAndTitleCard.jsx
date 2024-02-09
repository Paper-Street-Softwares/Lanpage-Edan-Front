export default function ImgAndTitleCard(props) {
  const img = props.img;
  const imgDescription = props.imgDescription;
  const title = props.title;
  const link = props.link;

  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col items-center justify-between w-32 mt-2 mb-2 h-28 phone3:w-[50%] tablet1:w-[25%]"
      rel="noreferrer"
    >
      <div className="flex flex-row items-end justify-center w-full h-full">
        <div>
          <img src={img} alt={imgDescription} className="w-auto h-12"></img>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full h-full">
        <div className="font-medium text-center transition duration-300 text-paragraph3 tablet1:text-paragraph4 font-poppins text-secondary hover:text-primary">
          {title}
        </div>
      </div>
    </a>
  );
}

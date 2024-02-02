export default function ImgAndTitleCard(props) {
  const img = props.img;
  const imgDescription = props.imgDescription;
  const title = props.title;
  const link = props.link;

  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col items-center justify-between mt-2 mb-2 w-44 h-28"
      rel="noreferrer"
    >
      <div className="flex flex-row items-end justify-center w-full h-full">
        <div>
          <img src={img} alt={imgDescription} className="w-auto h-12"></img>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full h-full">
        <div className="text-sm font-bold text-center transition duration-300 font-poppins text-darkgreen hover:text-lightgreen">
          {title}
        </div>
      </div>
    </a>
  );
}

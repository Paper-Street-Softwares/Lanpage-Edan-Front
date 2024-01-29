export default function ImgAndTitleCard(props) {
  const img = props.img;
  const imgDescription = props.imgDescription;
  const title = props.title;
  const link = props.link;

  return (
    <a
      href={link}
      className="flex flex-col justify-between items-center w-44 h-28 mt-2 mb-2"
    >
      <div className="w-full h-full flex flex-row items-end justify-center">
        <div>
          <img src={img} alt={imgDescription} className="h-12 w-auto"></img>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center">
        <div className="font-poppins text-darkgreen text-center font-bold text-sm hover:text-lightgreen transition duration-300">
          {title}
        </div>
      </div>
    </a>
  );
}

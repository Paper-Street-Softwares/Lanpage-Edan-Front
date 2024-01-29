export default function ImgAndTitleCard(props) {
  const img = props.img;
  const imgDescription = props.imgDescription;
  const title = props.title;

  return (
    <div className="bg-blue-100 flex flex-col justify-center items-center w-36 h-44">
      <img src={img} alt={imgDescription} className="bg-yellow-100 h-14"></img>
      <div className="bg-red-100 font-poppins text-center font-bold text-sm">
        {title}
      </div>
    </div>
  );
}

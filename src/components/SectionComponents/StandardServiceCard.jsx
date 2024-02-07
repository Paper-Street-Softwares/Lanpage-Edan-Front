export default function StandardServiceCard(props) {
  const { title, description, icon, altIcon } = props;

  return (
    <a className="flex flex-col items-center justify-between w-full h-56 mt-2 mb-2 border-t border-b-8 border-l border-r border-solid border-neutral-200 border-b-primary tablet2:w-28 desktop1:w-36">
      <div className="flex flex-row items-center justify-center w-full h-3/5">
        <div>
          <img src={icon} alt={altIcon} className="w-auto h-12"></img>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between w-full h-full font-poppins">
        <div className="flex flex-col items-center justify-center p-1 h-1/3">
          <div className="text-xs font-medium text-center transition text-secondary hover:text-primary">
            {title}
          </div>
        </div>
        <div className="flex flex-col justify-center p-2 text-center h-2/3">
          <div className="text-xs text-quaternary">{description}</div>
        </div>
      </div>
    </a>
  );
}

export default function StandardServiceCard(props) {
  const { title, description, icon, altIcon } = props;

  return (
    <a className="flex flex-col items-center justify-between w-full h-auto mt-2 mb-2 border-t border-b-8 border-l border-r border-solid phone3:h-56 border-neutral-200 border-b-primary tablet2:w-28 desktop1:w-36">
      <div className="flex flex-row items-center justify-center w-full h-20 phone3:h-3/5">
        <div>
          <img src={icon} alt={altIcon} className="w-auto h-12"></img>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between w-full phone3:h-full font-poppins">
        <div className="flex flex-col items-center justify-center p-1 h-1/3">
          <div className="text-xs font-bold text-center transition text-secondary hover:text-primary">
            {title}
          </div>
        </div>
        <div className="flex flex-col justify-center p-2 text-center h-14 phone3:h-2/3">
          <div className="text-xs text-quaternary">{description}</div>
        </div>
      </div>
    </a>
  );
}

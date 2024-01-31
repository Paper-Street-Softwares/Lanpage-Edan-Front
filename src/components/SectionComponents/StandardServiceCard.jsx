export default function StandardServiceCard(props) {
  const { title, description, icon, altIcon } = props;

  return (
    <a className="flex flex-col justify-between items-center w-36 h-56 mt-2 mb-2 border-solid border-neutral-200 border-t border-r border-l border-b-8 border-b-mediumgreen">
      <div className="w-full h-3/5 flex flex-row items-center justify-center">
        <div>
          <img src={icon} alt={altIcon} className="h-12 w-auto"></img>
        </div>
      </div>
      <div className="w-full h-full flex font-poppins flex-col justify-between items-center">
        <div className="h-1/3 flex flex-col justify-end p-1">
          <div className="text-darkgreen text-center font-medium text-xs hover:text-lightgreen">
            {title}
          </div>
        </div>
        <div className="h-2/3 flex flex-col justify-center text-center p-2">
          <div className="text-xs text-neutral-500">{description}</div>
        </div>
      </div>
    </a>
  );
}

export default function HonrizontalIconAndText(props) {
  return (
    <div className="flex bg-blue-400">
      <div className="flex flex-col items-center justify-center bg-purple-700">
        <img className="h-6" alt="Ícone" src="" />
      </div>
      <div className="flex flex-row items-center w-full ml-2 text-xs bg-purple-400">
        Texto texto
      </div>
    </div>
  );
}

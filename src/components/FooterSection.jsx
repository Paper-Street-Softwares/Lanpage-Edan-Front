import HonrizontalIconAndText from "./SectionComponents/HorizontalIconAndText";
import SectionContent from "./SectionComponents/SectionContent";

export default function FooterSection() {
  return (
    <div className="full bg-mediumgreen">
      <div>
        <div className="content">
          <SectionContent>
            <div className="bg-red-500 w-64 h-40">
              <div className="bg-white">Titulo</div>
              <div className="bg-blue-700 h-auto">
                <HonrizontalIconAndText icon="icone" text="texto" />
                <HonrizontalIconAndText icon="icone" text="texto" />
              </div>
            </div>
            <div className="bg-green-500 w-64 h-40">Sobre</div>
            <div className="bg-blue-500 w-64 h-40">Navegação</div>
          </SectionContent>
        </div>
        <div className="bg-lightgreen w-full text-center">
          Copyrights e Créditos
        </div>
      </div>
    </div>
  );
}

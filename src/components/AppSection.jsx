import SectionContent from "../components/SectionComponents/SectionContent";

export default function AppSection() {
  return (
    <div className="content">
      <div className="feature">
        <SectionContent>
          <div className="bg-red-100 w-128">Esquerda</div>
          <div className="bg-green-100 w-128">Direita</div>
        </SectionContent>
      </div>
    </div>
  );
}

import appBanner from "../style/assets/images/aplicativo/appBanner.png";

export default function AppSection() {
  return (
    <div className="content">
      <div className="feature">
        <img className="mt-8" src={appBanner}></img>
      </div>
    </div>
  );
}

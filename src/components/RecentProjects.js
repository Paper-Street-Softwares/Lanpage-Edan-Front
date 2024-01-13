import "../style/css/componentsStyle/recentprojects.css";
import img from "../style/assets/images/ex2.jpg";

function RecentProjects() {
  return (
    <div className="wrapper-RecentProjects">
      <div className="title-RecentProjects">
        <h1>Projetos Recentes</h1>
      </div>
      <div className="container-RecentProjects">
        <div className="gridImages-RecentProjects">
          <div className="imageItens-RecentProjects">
            <img src={img} />
          </div>
          <div className="imageItens-RecentProjects">
            <img src={img} />
          </div>
          <div className="imageItens-RecentProjects">
            <img src={img} />
          </div>
          <div className="imageItens-RecentProjects">
            <img src={img} />
          </div>
          <div className="imageItens-RecentProjects">
            <img src={img} />
          </div>
          <div className="imageItens-RecentProjects">
            <img src={img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;

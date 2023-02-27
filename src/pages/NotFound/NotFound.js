import UseTitle from "../../Hooks/useTitle/UseTitle";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="container_found center">
      <UseTitle title="Non Trouvée" description="Page d'erreur 404" path="*"/>
      
      <div id="clouds">
        <div className="cloud x1"></div>
        <div className="cloud x1_5"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>

      <div className="content">
        <div className="_404">404</div>
        <div className="page">LA PAGE</div>
        <div className="notFound">N'A PAS ETE TROUVEE</div>
        <Link className="btn_home" to="/">RETOUR VERS L"ACCEUIL</Link>
      </div>
      <div className="min-notFound"></div>
    </div>
  )
}
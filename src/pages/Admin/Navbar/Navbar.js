import { useNavigate, Link } from "react-router-dom";
import "../Dashboard/Dashboard.css";

function Navbar() {
    const navigate = useNavigate();

    function deconnectClient() {
        localStorage.removeItem("connected-infos");
        navigate("/login", { replace: true });
    }

    return <nav className="dash_nav">
        <button type="button" className="dash_deconnect" onClick={() => deconnectClient()}>Déconnexion</button>
        <div className="dash_list">
            <Link className="dash_route" to="/dashboard/images" title="Accèder au Images">Images</Link><span className="sepa_spe">→</span>
            <Link className="dash_route" to="/dashboard/users" title="Voir les utilisateurs Admin">Utilisateurs</Link>{/* <span className="sepa_spe">→</span> */}
            {/* <Link className="dash_route" to="/dashboard/infos" title="Voir les informations serveur">Informations</Link> */}
        </div>
    </nav>
}

export default Navbar;
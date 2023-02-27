import { Link } from "react-router-dom"
import { FaDiscord, FaYoutube, FaTwitter, FaGithubSquare } from "react-icons/fa";
import ToggleSwitch from "../../components/ToogleSwitch/ToogleSwitch";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="copyright">
            <ToggleSwitch text={{active: true, on: "Dark Mode", off: "White Mode"}} defaultChecked={true}/>
            <p className="sigmacp">Sigma Roleplay &copy; 2022</p>
            <p className="dakomcp">Developped with <span title="love">❤️</span> by <a href="https://github.com/dakooom" className="github-link" target="_blank" rel="noopener noreferrer"><FaGithubSquare/> DakoM</a></p>
        </div>
        
        <div className="content">
            <span className="cat">Raccourci</span>
            <Link to="/" className="link_nav">Acceuil</Link>
            <Link to="/rules" className="link_nav">Règlement</Link>
            <Link to="/shop" className="link_nav">Boutique</Link>
            <Link to="/top-server" className="link_nav">Top Serveur</Link>
            <Link to="/about" className="link_nav">A Propos</Link>
        </div>

        <div className="content_2">
            <span className="cat">Socials</span>
            <div className="socials">
                <a href="https://discord.gg/sigmarp" className="link_footer discord" target="_blank" title="Discord" alt="Discord" rel="noopener noreferrer"><FaDiscord/></a>
                <a href="https://www.youtube.com/c/DakoM/videos" className="link_footer youtube" target="_blank" title="YouTube" alt="YouTube" rel="noopener noreferrer"><FaYoutube/></a>
                <a href="https://twitter.com/_DakoM" className="link_footer twitter" target="_blank" title="Twitter" alt="Twitter" rel="noopener noreferrer"><FaTwitter/></a>
            </div>
        </div>
    </footer>
  )
}
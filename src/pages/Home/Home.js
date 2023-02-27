import UseTitle from "../../Hooks/useTitle/UseTitle";
import { FaDiscord, FaYoutube, FaTwitter, FaExternalLinkAlt } from "react-icons/fa";
// import wallpaper from "./wallpaper.jpg";
import "./Home.css";

export default function Home() {

  return (
    <div className="presentation">
      <UseTitle title="Acceuil" description="Page de présentation du serveur GTA 5 Roleplay Sigma" path="/"/>
        <h1 className="title">
          Sigma Roleplay
          <br/>
          <span className="smalli">Votre serveur <span className="colors">GTA RP</span></span>
        </h1>

        <p className="description">
          Sigma est un Serveur FREE ACCESS<br/>
          Nous avons des mods (scripts, mappings, vêtements) Exclusif<br/>
          Un Serveur Semi-Serious RP a votre disposition, nous n'attendons plus que vous!
        </p>
        <hr className="separator"/>

        <span className="subTitle">Nous Rejoindre</span>
        <div className="container_link">
          <a href="https://discord.gg/sigmarp" className="join_our discord" target="_blank" title="Discord" alt="Discord" rel="noopener noreferrer"><FaDiscord className="icon"/> Discord</a>
          <a href="https://www.youtube.com/c/DakoM/videos" className="join_our youtube" target="_blank" title="YouTube" alt="YouTube" rel="noopener noreferrer"><FaYoutube className="icon"/> YouTube</a>
          <a href="https://twitter.com/_DakoM" className="join_our twitter" target="_blank" title="Twitter" alt="Twitter" rel="noopener noreferrer"><FaTwitter className="icon"/> Twitter</a>
          <a href="fivem://connect/play.sigmarp.fr:30120" className="join_our connect" target="_blank" title="Se Connecter au Serveur FiveM" alt="Connexion FiveM" rel="noopener noreferrer"><FaExternalLinkAlt className="icon"/> Connexion</a>
        </div>

        <hr className="separator"/>
        <span className="subTitle">Notre Trailer</span>

      <div className="wrapper">
        <iframe src="https://www.youtube.com/embed/T2XrFzCZ4Sg" title="Trailer Sigma RP" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      </div>
  )
}
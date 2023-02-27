import React from "react";
import UseTitle from "../../Hooks/useTitle/UseTitle";
import "./Boutique.css";

// Images
import miniaCoins500 from "./miniaCoins500.jpg";
import miniaCoins1000 from "./miniaCoins1000.jpg";
import miniaCoins1500 from "./miniaCoins1500.jpg";

import miniaCoins2500 from "./miniaCoins2500.jpg";
import miniaCoins5000 from "./miniaCoins5000.jpg";
import miniaCoins10000 from "./miniaCoins10000.jpg";

export default function Boutique() {
  const buyableItems = [
    {
      link: "https://shop.sigmarp.fr/package/5331813", 
      points: 500,
      src: miniaCoins500
    },
    {
      link: "https://shop.sigmarp.fr/package/5349268", 
      points: 1000,
      src: miniaCoins1000
    },
    {
      link: "https://shop.sigmarp.fr/package/5349270", 
      points: 1500,
      src: miniaCoins1500
    },
    {
      link: "https://shop.sigmarp.fr/package/5349869", 
      points: 2500,
      src: miniaCoins2500
    },
    {
      link: "https://shop.sigmarp.fr/package/5349270", 
      points: 5000,
      src: miniaCoins5000
    },
    {
      link: "https://shop.sigmarp.fr/package/5349867", 
      points: 10000,
      src: miniaCoins10000
    }
  ];

  const VehiclesImages = [
    {src: "https://cdn.discordapp.com/attachments/1026254269793435658/1033006052758794240/unknown.png"},
    {src: "https://cdn.discordapp.com/attachments/1026254269793435658/1032997577026719784/unknown.png"},
    {src: "https://cdn.discordapp.com/attachments/1026254269793435658/1027639807343603783/unknown.png"},
    {src: "https://cdn.discordapp.com/attachments/1026254269793435658/1027630604348559380/unknown.png"},
    {src: "https://cdn.discordapp.com/attachments/1026254269793435658/1027630499843285075/unknown.png"},
    {src: "https://cdn.discordapp.com/attachments/1026254269793435658/1027594727962456075/unknown.png"}
  ];

  return (
    <div className="containerShop">
      <UseTitle title="Boutique" description="Si vous souhaitez acheter des mods extra sur notre serveur il faudra passer par cette page internet" path="/shop"/>

      <h1 className="TitleShop">Notre Boutique FiveM</h1>
      <p className="DescriptionShop">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolorem fuga cumque incidunt ex distinctio optio enim recusandae non accusantium.</p>
      
      <hr className="separator"/>
      <h2 className="SubTitleShop">Nos Offres</h2>

      
      <div className="cardShop">
        {
          buyableItems.map((item, uniqueId) => {
            return (
              <a href={item.link} title={`Acheter l'offre a ${item.points} Points`} className="card-link" target="_blank" rel="noopener noreferrer" key={uniqueId}>
                <img className="card-img" draggable={false} src={item.src} alt={`Image de ${item.points} Points`}/>
                <div className="card-content">
                  <strong className="card-title">Acheter {item.points.toString()} Points</strong>
                  <p className="card-desc">Le nombre de points vous permet d'acheter des véhicules, Accès V.I.P a des peds exclusif et de soutenir le serveur.</p>
                  <small className="card-infos">Vous pouvez acheter ce nombre de points en cliquant sur cette image!</small>
                </div>
              </a>
            )
          })
        }
{/* 
        <a href="https://shop.sigmarp.fr/package/5331813" className="card-link" target="_blank" rel="noopener noreferrer">
          <img className="card-img" draggable={false} src={miniaCoins500} alt="Boutique Achat 500 coins" />
          <div className="card-content">
            <strong className="card-title">Acheter 500 Points</strong>
            <p className="card-desc">Le nombre de points vous permet d'acheter des véhicules, Accès V.I.P a des peds exclusif et de soutenir le serveur.</p>
            <small className="card-infos">Vous pouvez acheter ce nombre de points en cliquant sur cette image!</small>
          </div>
        </a>

        <a href="https://shop.sigmarp.fr/package/5349268" className="card-link" target="_blank" rel="noopener noreferrer">
          <img className="card-img" draggable={false} src={miniaCoins1000} alt="Boutique Achat 1000 coins" />
          <div className="card-content">
            <strong className="card-title">Acheter 1 000 Points</strong>
            <p className="card-desc">Cela vous permet d'acheter des véhicules modder<br/>Cela vous donne aussi un accès V.I.P a des peds exclusif.<br/>Mais avant tout de soutenir le serveur.</p>
            <small className="card-infos">Vous pouvez acheter ce nombre de points en cliquant sur cette image!</small>
          </div>
        </a>

        <a href="https://shop.sigmarp.fr/package/5349270" className="card-link" target="_blank" rel="noopener noreferrer">
          <img className="card-img" draggable={false} src={miniaCoins1500} alt="Boutique Achat 1500 coins" />
          <div className="card-content">
            <strong className="card-title">Acheter 1 500 Points</strong>
            <p className="card-desc">Le nombre de points vous permet d'acheter des véhicules, Accès V.I.P a des peds exclusif et de soutenir le serveur.</p>
            <small className="card-infos">Vous pouvez acheter ce nombre de points en cliquant sur cette image!</small>
          </div>
        </a> */}
      </div>

      <h2 className="SubTitleShop">Nos Véhicules</h2>
      <div className="cardShop">
        {
          VehiclesImages.map((item, uniqueId) => {
            return <div className="card-link" key={uniqueId}>
              <img className="card-img" draggable={false} src={item.src} alt={`Vehicule #${uniqueId.toString()}`} />
            </div>
          })
        }
      </div>
    </div>
  )
}
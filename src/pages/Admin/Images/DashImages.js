import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DashImages.css";

// Interne
import Navbar from "../Navbar/Navbar";
import "../Dashboard/Dashboard.css";
import { useNavigate } from "react-router-dom";

function DashImages() {
  const navigate = useNavigate();
  const connected = localStorage.getItem("connected-infos");
  const [imageData, setData] = useState([]);
  const [filtersImages, setFilersImage] = useState(0);
  const [imageSelected, setImageSelected] = useState({});
  var filteredImages = imageData.filter(item => item.public === filtersImages);
  
  useEffect(() => {
    if (connected === null) {
      navigate("/login");
    } else {
      const data = axios.get("http://localhost:4000/images");
      data.then(response => setData(response.data));
    }
  }, []);

  useEffect(() => {
    filteredImages = imageData.filter(item => item.public === filtersImages);
  }, [filtersImages]);

  const FilteredImages = (e, value) => {
    e.preventDefault();
    console.log("on change form", value);
    setFilersImage(value);
  }

  const ChangeImageVisibility = (event, item) => {
    event.preventDefault();
    console.log("no action", item);

    let result = axios.put(`http://localhost:4000/images/${item.id}`, {
      data: {
        id: item.id, 
        public: item.public
      }
    }, {});

    result.then(response => console.log("RESULTAT: ", response.data))
  }

  const refreshList = (event) => {
    filteredImages = imageData.filter(item => item.public === filtersImages);
  }
  
  return (
    <div className="container_dashboard">
      <Navbar/>

      <div className={imageSelected?.url ? "modal_images active" : "modal_images"}>
        <h2>Modifier l'image de {imageSelected?.author}</h2>

        <div className="card_image">
          <img className="imageUrl" src={imageSelected.url} alt={`image de ${imageSelected.author}`} draggable={false}/>
          <div className="container">
            <span className="author">{imageSelected.author}</span>
            <span className="uploadAt">{new Date(imageSelected.uploadAt).toLocaleString()}</span>
            <hr className="separator"/>
            <span className="publicImg">Modifier la visibilité</span>
            <div className="form-filters">
              <div className="input-group" onClick={(e) => ChangeImageVisibility(e, imageSelected)}>
                <div className={imageSelected?.public === 1 ? "radio-div active" : "radio-div"}></div>
                <span className="labelRadio">Publique</span>
              </div>

              <div className="input-group" onClick={(e) => ChangeImageVisibility(e, imageSelected)}>
                <div className={imageSelected?.public === 0 ? "radio-div active" : "radio-div"}></div>
                <span className="labelRadio">Privée</span>
              </div>
            </div>
          </div>
        </div>
        <p onClick={(e) => setImageSelected({})} className="btn-close">Fermer l'image</p>
      
      </div>

      <h1>Gérer les images</h1>
      <div className="form-filters">
        <div className="input-group" onClick={(e) => FilteredImages(e, 1)}>
          <div className={filtersImages === 1 ? "radio-div active" : "radio-div"}></div>
          <span className="labelRadio">Publique</span>
        </div>

        <div className="input-group" onClick={(e) => FilteredImages(e, 0)}>
          <div className={filtersImages === 0 ? "radio-div active" : "radio-div"}></div>
          <span className="labelRadio">Privée</span>
        </div>
      </div>

      <div className="dash_images">
        {filteredImages.length > 0 ?
          (
            filteredImages.map((item, uniqueId) => {
              return (
                <div className="card_image cursor" key={uniqueId} onClick={(e) => setImageSelected(item)}>
                  <img className="imageUrl" src={item.url} alt={`image de ${item.author}`} draggable={false}/>
                  <div className="container">
                    <span className="author">{item.author}</span>
                    <span className="uploadAt">{new Date(item.uploadAt).toLocaleString()}</span>
                    <span className="publicImg">{item.public === 0 ? "Privée" : "Publique"}</span>
                    <small className="infos-text">Pour modifier l'image veuillez cliquer dessus</small>
                  </div>
                </div>
              )
            })
          ) : (
            <p>Aucune image a afficher</p>
          )
        }
      </div>
    </div>
  )
}

export default DashImages;
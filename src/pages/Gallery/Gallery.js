import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import UseTitle from "../../Hooks/useTitle/UseTitle";

import "./Gallery.css";

function ImagePreview({ active = false, image, alt="Image du serveur Sigma", onClose }) {
  console.log("image preview log", image);

  return (
    <div className={active ? "img-preview active" : "img-preview"}>
      <span className={active ? "text active" : "text"}>Autheur: {image?.item?.author}</span>
      <img src={image?.item?.url} alt={alt} draggable={false} className={active ? "image active" : "image"}/>
      <button type="button" className="button-close" onClick={() => onClose(false)}>Fermer la Prévisualisation</button>
    </div>
  )
}

function Gallery() {
  const [previewImage, setPreview] = useState({
    active: false, 
    item: {}
  });

  const [dataImage, setDataImage] = useState([]);
  
  function managePreview(param, item) {
    setPreview({active: param.active, item: item});
    document.body.style.overflow = param.active === true ? "hidden" : "auto";
  }

  useEffect(() => {
    const data = axios.get("http://localhost:4000/images");
    data.then(response => setDataImage(response.data));
  }, []);

  const publicImages = dataImage.filter(image => image.public === 1);

  return (
    <Fragment>
      <UseTitle title="Gallerie d'images" description="Gallerie d'images prise en jeu par des joueurs" path="/gallery"/>
      <div className="container_gallery">
        <ImagePreview
          active={previewImage.active}
          image={previewImage}
          onClose={() => managePreview({active: false}, previewImage)}
        />
        <h1 className="heading-text">Gallerie d'image <span>Sigma</span></h1>
        <ul className="image-gallery">
          {publicImages.length > 0 ?
            publicImages.map((item, uniqueId) => <li onClick={() => managePreview({active: !previewImage.active}, item)} key={uniqueId}>
                <img src={item.url} alt={item.alt || "Image Sigma"} draggable={false}/>
                <div className="overlay"><span>Cliquer pour l'agrandir</span></div>
              </li>
            )
          : (
            <p>Aucune Images n'est disponible</p>
          )}
        </ul>
      </div>
    </Fragment>
  )
}

export default Gallery;
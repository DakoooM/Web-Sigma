import React from 'react'
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import "./Button.css";

export default function Button({ download, interne, children, type, link, color }) {
  return download ? (
        <Link to={link} style={{backgroundColor: color}} className={type ? `button download ${type}` : "button download"} target={interne ? "_self" : "_blank"} download><FaDownload/> {children || "Télécharger"}</Link>
    ) : (
        <Link to={link} className={type ? `button ${type}` : "button"} target={interne ? "_self" : "_blank"} download>{children}</Link>
    )
}
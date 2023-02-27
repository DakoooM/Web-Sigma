import Button from "../../components/Button/Button";
import UseTitle from "../../Hooks/useTitle/UseTitle";

import config from "./Rules.json";
import "./Rules.css"; 

import React, { useEffect, useState } from 'react';
import { FaInfoCircle } from "react-icons/fa";


import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();

function ModalRule({ 
  show, 
  param = {
    title: "Aucun Titre", 
    name: "Aucune règle.", 
    example: "Aucun Example.",
    
  }, onClose 
}) {
  useEffect(() => {
      document.body.style.overflow = show ? "hidden" : "auto";
  }, [show])

  return (
    <div className={show ? "rule-modal active" : "rule-modal"}>
      <div className="close" onClick={() => onClose()}>X</div>
      <div className="content">
        <h3 className="title">{param.title}</h3>
        <p className="text">{param.name}</p>
          <Tooltip title="Exemple / Mise en situation" position="bottom" arrow={true}>
            <span className="example">
              <FaInfoCircle/> {param.example ? param.example : "Aucun exemple"}
            </span>  
          </Tooltip>
      </div>
    </div>
  )
}

function RulesBloc({ 
  subtitle, /* animation, 
  duration = 2, */ items = [],
  /* once = true */ 
}) {
  const [showModal, setModal] = useState(false);
  const [lastItem, setLastItem] = useState(false);

  const manageRule = (e, item) => {
    e.preventDefault();
    setModal(!showModal);
    setLastItem(item)
  }

  function onCloseModal(element) {
    console.log("element", element);
    if (showModal && element !== 2) {
      setModal(false)
    }
  }

  return (
    <React.Fragment>
      <ModalRule show={showModal} param={lastItem} onClose={(element) => onCloseModal(element)}/>
      <div className="rules-block" /* data-aos={animation} data-aos-duration={(duration * 1000).toString()} data-aos-once={once.toString()} */>
        <h2 className="subtitle">{subtitle}</h2>
        <div>
          <ul className="list">
            {
              items.map((item, index) => {
                return <li className="item" key={index} onClick={(e) => manageRule(e, item)}>
                  {item.title && <h3 className="title">{item.title}</h3>}
                  <p className="rule-text"><strong>{index + 1}.</strong> {item.name}</p>
                  {item.example && (
                      <Tooltip title="Exemple / Mise en situation" position="bottom" arrow={true}>
                        <small className="example">
                          <FaInfoCircle/> {item.example ? item.example : "Aucun Exemple"}
                        </small>
                      </Tooltip>
                  )}
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default function Rules() {
  return (
    <React.Fragment>
      <UseTitle title="Règlement" description="Règlement du serveur GTA 5 Roleplay Sigma" path="/rules"/>
      <div className="container_rules">
        <h1 className="title">Règlement Sigma</h1>
        <div className="description flex-row-wrap">
          <span>
            Serveur <a className="link" href="https://fivem.net" target="_blank" rel="noreferrer">FiveM</a> (GTA RP)
          </span>

          <span>
            <Button download={true} color="#e8b889" target={false} link="/files/rules_sigma.pdf" type="small"/>
          </span>
        </div>

        <hr className="separator"/>

        <div className="rule-disclaimer" title="Disclaimer - Veuillez attentivement lire ce message de prévention">
          <FaInfoCircle className="infos"/>
          <div className="disclaimer">
            Le règlement est considéré comme lu dès que le joueur rejoint le serveur/discord.<br/>
            L’administration du serveur se réserve le droit de modifier le règlement à tout moment et sans aucun préavis..
          </div>
        </div>

        <RulesBloc subtitle="DÉFINITIONS GÉNÉRALES" animation="zoom-in" items={config.Generals}/>
        <RulesBloc subtitle="LEXIQUE RP" animation="zoom-out" items={config.LexiqueRP}/>
        <RulesBloc subtitle="RÈGLES ROLEPLAY" animation="zoom-in" items={config.Roleplay}/>
        <RulesBloc subtitle="RÈGLES HRP" animation="zoom-out" items={config.hrpRules}/>
        <RulesBloc subtitle="DEMANDE SPÉCIFIQUE" animation="zoom-out" items={config.demandeSpecs}/>
      </div>
    </React.Fragment>
  )
}

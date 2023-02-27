import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Dashboard.css";

// Interne
import Navbar from "../Navbar/Navbar";

function Dashboard() {
    const navigate = useNavigate();
    const connected = localStorage.getItem("connected-infos");
    const [tokenVisible, setTokenVisible] = useState(false);
    const [emailVisible, setEmailVisible] = useState(false);
    const [notification, setNotification] = useState(false);

    useEffect(() => {
        if (connected === null) {
            navigate("/login");
            setNotification(false);
        }
    }, [connected, navigate, notification]);

    return connected !== null && <div className="container_dashboard">
        <Navbar/>
        <h1>Bienvenue sur le Dashboard</h1>
        <p>Dans cette endroit vous pouvez gérer tout pleins de taches liée au site internet Sigma Roleplay</p>

        <hr className="separator"/>
        <h2>Voici vos informations</h2>
        <div className="group-infos">
            <p className="group_title">Pseudonyme:</p>
            <p>{JSON.parse(connected).name}</p>
            <p className="group_title">Token:</p>
            <p className={tokenVisible ? "token visible" : "token"} onClick={() => setTokenVisible(!tokenVisible)}>{JSON.parse(connected).token}</p>
            <p className="group_title">Email:</p>
            <p className={emailVisible ? "token visible" : "token"} onClick={() => setEmailVisible(!emailVisible)}>{JSON.parse(connected).email}</p>
        </div>
    </div>
}

export default Dashboard;
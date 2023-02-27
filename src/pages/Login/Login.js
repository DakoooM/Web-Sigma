import UseTitle from "../../Hooks/useTitle/UseTitle";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const connectedInfos = localStorage.getItem("connected-infos");
    const [connected, setConnected] = useState(connectedInfos);

    const submitForm = (event) => {
        event.preventDefault();
        const fetch = axios.get(`http://localhost:4000/login/${email}/${password}`);
        
        fetch.then(result => {
            if (result.data.code === 200) {
                console.log("result", result.data);
                delete result.data["code"];
                setConnected(JSON.stringify(result.data));
                // navigate("/");
            }
            
            setErrorMessage(result.data.code === 200 ? "" : result.data.message);
        })
        
        fetch.catch(err => {
            setConnected(false);
            setErrorMessage(err.message);
        });
    }
    
    useEffect(() => {
        if (connected === false) {
            localStorage.removeItem("connected-infos");
        } else if (connected !== null) {
            localStorage.setItem("connected-infos", connected);
            console.log("connected", connected);
        }
    }, [connected]);

  return <React.Fragment>
    <UseTitle title="Connexion" description="Page de connexion admin du serveur GTA 5 Roleplay Sigma" path="/login"/>
    {!connected ? (
        <React.Fragment>
            <h1 className="login_title">Se Connecter</h1>
            <div className="container_login">
                <form onSubmit={submitForm} className="login_form">
                    <label htmlFor="email" className="label">Email</label>
                    <input type="email" required id="email" className="input" autoComplete="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password" className="label">Mot de Passe</label>
                    <input type="password" required id="password" className="input" autoComplete="current-password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="button_login">Se Connecter</button>
                </form>
                <p className="errorMessage">
                    {errorMessage}
                </p>
            </div>
        </React.Fragment>
    ) : (
        <div className="container_login">
            <span className="already_title">Vous êtes déja connecter</span>
            <button type="button" className="button_login" onClick={() => navigate("/dashboard", { replace: true })}>Accèder au Panel d'administration</button>
            <button type="button" className="button_login deconnect" onClick={() => setConnected(false)}>Déconnexion</button>
        </div>
    )}
  </React.Fragment>
}

export default Login;
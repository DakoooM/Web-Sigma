import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Menu for context menu replace
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuRadioGroup,
    MenuDivider, 
    MenuHeader
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import "@szhsin/react-menu/dist/theme-dark.css";

// Interne
import Navbar from "../Navbar/Navbar";
import "../Dashboard/Dashboard.css";
import "./DashUsers.css";

function ModalUser({ active, children, openModal }) {
    return active && (
        <div className="modal">
            <div className="close_modal" onClick={() => openModal(false)}>X</div>
            {children}
        </div>
    )
}

function DashUsers() {
    const Groups = [
        {label: "Helpeur", level: 0},
        {label: "Modérateur", level: 1},
        {label: "Administrateur", level: 2},
        {label: "Fondateur", level: 3}
    ];
    
    const navigate = useNavigate();
    const connected = localStorage.getItem("connected-infos");
    const [userGroup, setUserGroup] = useState({label: "Helpeur", level: 0});
    const [users, setUsers] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState({
        name: "Aucun",
        email: "dako.request@gmail.com"
    });

    // Inputs
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [File, setFileImage] = useState(null);
    // const [Name, setName] = useState("");

    useEffect(() => {
        if (connected === null) {
            navigate("/login");
        } else {
            axios.get("http://localhost:4000/users/all")
                .then(result => setUsers(result.data))
                .catch(err => console.log("have error", err));
        }

        return () => {
            setUsers(false);
        }
    }, []);

    useEffect(() => {
        setName(selectedUser?.name);
        setEmail(selectedUser?.email);
        setUserGroup(selectedUser?.perms);
    }, [selectedUser]);

    useEffect(() => {
        console.log("File", File, "Floor");
    }, [File])

    const modifyUser = (e, havePerms, user) => {
        e.preventDefault();
        if (havePerms){
            setSelectedUser(user);
            setShowModal(true);
        } else {
            console.log("Vous n'avez pas les permissions nécessaire!");
        }
    }

    const modifyUserData = (e) => {
        e.preventDefault();
        // axios.put(`localhost:4000/`, {});
    }

    const convertMegaBytes = (bytes) => bytes / (1024 ** 2);

    const changeFile = (event) => {
        const selectedFile = event.target.files[0];
        const objectUrl = URL.createObjectURL(selectedFile);
        console.log("change file", selectedFile);
        setFileImage({
            name: selectedFile.name,
            size: convertMegaBytes(selectedFile.size),
            extension: selectedFile.name.split(".")[1],
            url: objectUrl
        });
    }

    return (
        <div className="container_dashboard">
            <Navbar/>
            <ModalUser active={showModal} openModal = {(bool) => setShowModal(bool)}>
                <h1 className="modify_title">Modifier {selectedUser.name}</h1>
                <form className="login_form" onSubmit={(e) => modifyUserData(e)}>
                    <div className="file_container">
                        <label htmlFor="file" className="changePhoto">Changer la photo</label>
                        <input type="file" name="file" id="file" className="fileInput" accept="image/*" onChange={(e) => changeFile(e)}/>
                        <img className="preview_img" draggable={false} src={File ? File.url : selectedUser.image} alt="image upload by user"/>
                    </div>
                    <label htmlFor="name" className="label">Pseudonyme</label>
                    <input 
                        type="text" 
                        placeholder="Pseudonyme" 
                        name="name" 
                        id="name" 
                        className="input" 
                        onChange={(e) => setName(e.target.value)} 
                        value={Name} 
                        required
                    />

                    <label htmlFor="email" className="label">Email</label>
                    <input 
                        type="email" 
                        placeholder="Adresse Mail" 
                        name="email" 
                        id="email" 
                        className="input"
                        onChange={(e) => setEmail(e.target.value)}  
                        value={Email}
                        required
                    />

                    <Menu menuButton={<MenuButton>Permissions</MenuButton>} theming="dark">
                        <MenuHeader>{userGroup?.label}</MenuHeader>
                        <MenuDivider />
                        <MenuRadioGroup value={userGroup} onRadioChange={e => setUserGroup(Groups.find(val => val.level === e.value))}>
                            {
                                Groups.map(group => {
                                    return (
                                        <MenuItem type="radio" disabled={selectedUser?.perms?.level === group.level} value={group.level}>{group.label}</MenuItem>
                                    )
                                })
                            }
                        </MenuRadioGroup>
                    </Menu>

                    <button type="submit" className="button">Modifier les données</button>
                </form>
            </ModalUser>
            {users && (
                <div className="users_container">
                    {
                        users.map((user, uniqueId) => {
                            const { name, email, perms, image } = user;
                            const UserParse = JSON.parse(connected);
                            const havePerms = UserParse.perms.level > perms.level || UserParse.perms.level === perms.level;

                            return <div className="user" key={uniqueId}>
                                <img className="imageUser" draggable={false} src={image} alt="logo de la personne" />
                                <div className="flex_column">
                                    <span className="userName">{name}</span>
                                    <span>{perms.label}</span>
                                    <a className="userEmail" href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email}</a>
                                </div>
                                <button 
                                    type="button" 
                                    className={havePerms ? "modifyBtn" : "modifyBtn disabled"}
                                    title={havePerms ? `Modifier les données de ${name}` : `Vous n'avez pas les droit nécessaire pour Modifier ${name}`}
                                    onClick={(e) => modifyUser(e, havePerms, user)}
                                >Modifier</button>
                            </div>
                        })
                    }
                </div>
            )}
        </div>
    )
}

export default DashUsers;
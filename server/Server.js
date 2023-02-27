const { v4: uuidv4 } = require('uuid');
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
// const file = require("fs");
const app = express();
const DEFAULT_PORT = 4000;

// Database
const infDb = require("./Database/Database.json");
const Database = require("./Database/Database");
const db = new Database(infDb);

app.use(cors());

const Groups = [
    {level: 0, label: "Helpeur"},
    {level: 1, label: "Modérateur"},
    {level: 2, label: "Administrateur"},
    {level: 3, label: "Fondateur"},
];

app.get(`/images`, (req, res) => {
    db.con.query("SELECT * FROM images ORDER BY uploadAt DESC", (err, results) => {
        if (err) return console.error("have error on request '/images'", err);

        res.json(results);
    });
});

app.put(`/images/:id`, (req, res) => {
    const imageId = req.params.id;
    const public = req.params.public || false;

    console.log("dakor", req.data);

    if (!imageId || !public) return res.json({udpate: false});

    db.con.query('UPDATE images SET public = ? WHERE id=?', [public, imageId], (error) => {
        if (error) return res.json({udpate: false});

        res.json({udpate: true});

        console.log("update time with success!");
    });
})

app.get(`/users/all`, (req, res) => {
    db.con.query("SELECT * FROM admin", (err, results) => {
        if (err) return console.error("have error on request '/users/all'", err);

        for (let i = 0; i < results.length; i++) {
            delete results[i].password;
            results[i].perms = Groups.find(group => group.level === results[i].perms);
        } 

        res.json(results);
    });
})

app.put(`/user/:id`, (req, res) => {
    
})

app.get(`/login/:email/:password`, (req, res) => {
    let email = req.params.email;
    let password = req.params.password;
    let userExist = false;

    db.con.query("SELECT * FROM admin WHERE email=? AND password=?", [email, password], (err, result) => {
        if (err) return console.error("have error on request", err);

        userExist = result.length > 0;

        if (userExist) {
            db.con.query('UPDATE sigma.admin SET lastConnect = CURRENT_TIMESTAMP WHERE email=? AND password=?', [email, password], (error) => {
                if (error) throw error;
    
                console.log("update time with success!");
            });
        }
        
        res.json(userExist ? {
            code: 200,
            name: result[0].name,
            email: result[0].email,
            perms: Groups.filter(group => group.level === result[0].perms)[0],
            token: uuidv4()
        } : {
            message: "L'utilisateur n'existe pas",
            code_msg: "USER_NOT_EXIST",
            code: 502
        })
    })
});

app.listen(process.env.APP_PORT || DEFAULT_PORT, () => {
    console.log(`le back-end est fonctionnel sous http://localhost:${process.env.APP_PORT || DEFAULT_PORT}`);
});
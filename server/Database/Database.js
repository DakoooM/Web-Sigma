var mysql = require("mysql");

class Database {
    /* host, user, password, database */
    constructor(informations) {
        this.connection = informations;
        this.con = this.connect();
    }

    connect() {
        let dbConnect = mysql.createConnection(this.connection);

        dbConnect.connect(err => {
            if (err) throw err;
            console.log("Connected!");
        })
        
        return dbConnect;
    }
}


module.exports =  Database;
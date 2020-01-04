const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Dv3ga75579dv6380!",
    database: burgers_db
})

connection.connect(err => {
    if (err) throw err;
    Console.log("Connected")
})

module.exports = connection;
const mysql = require('mysql');
const QUERY = "SELECT * FROM electric_car_charger.ev_chargingpoints_table;";

var connection = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "Nimneus6000!",
    "database": "electric_car_charger"
});

connection.connect(function(err) {
    if (err) {
        console.error("Connection error: ", err.message);
    } else {
        console.log("Connected as: ", connection.threadId);
    }
});

connection.query(QUERY, function(err, rows, fields) {
    if (err) throw err;
    for (var i = 0; i < rows.length; i++) {
        console.log(rows[i]['ï»¿ID'], rows[i]['Site_name'], rows[i]['Status'], rows[i]['Postal code'], [rows[i]['Coordinates']]);
    }
});


connection.end();
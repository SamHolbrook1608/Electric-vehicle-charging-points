// Access from browser with http://localhost:8080/

const express = require('express');
const mysql = require('mysql');

const PORT = 8080;

const QUERY = "SELECT * FROM electric_car_charger.ev_chargingpoints_table;";

var app = express();

// configure Express to use embedded JavaScript
app.set("view engine", "ejs");

// serve static content from 'static' folder
app.use(express.static('static'));

// callback function for the splash page request handler
function splash(request, response) {

    connection.query(QUERY, function(err, rows, fields) {
        if (err) throw err;
        response.render("index", { 'rows': rows});
    });
}

// Splash page (index.html) is served by default
app.get("/", splash);
app.get("/index.html", splash);

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

process.env.PORT = process.env.PORT || conf[process.env.NODE_ENV].port;
var database = process.env.JAWSDB_MARIA_URL || conf[process.env.NODE_ENV].db;
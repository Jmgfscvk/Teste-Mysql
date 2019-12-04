var mysql = require("mysql");
var con = mysql.createConnection({
    host: "asgard-mysql",
    user: "root",
    password: "1234"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("##Successfully connected to MySQL container##");
});

var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/views/';
const PORT = 8080;
const HOST = '0.0.0.0';

router.use(function(req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function(req, res) {
    res.sendFile(path + "index.html");
});

router.get("/sharks", function(req, res) {
    res.sendFile(path + "sharks.html");
});

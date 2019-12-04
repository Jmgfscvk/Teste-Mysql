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

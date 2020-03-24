
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "qbhol6k6vexd5qjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "sykkx2bhlodx2x5c",
  password: "apcre4hzhtaq8jh7",
  database: "yt553ealfx31yu4c"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;

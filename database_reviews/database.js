var mysql = require("mysql");
var config = require("./sql-config.js");
const data = process.env.NODE_ENV === "test" ? "reviews_test" : "reviews";
config.database = data;
var connection = mysql.createConnection(config);

connection.connect();

module.exports = connection;

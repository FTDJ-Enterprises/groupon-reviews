var mysql = require('mysql')
var config = require('./sql-config.js')
var connection = mysql.createConnection(config)

connection.connect()

var getAllReview = function(callback) {
    connection.query('SELECT * FROM reviews', function(err, result) {
        if(err) {
            throw err
        } else {
            callback(result);
        }
    })
}

module.exports.getAllReview = getAllReview;
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reviews'
})

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
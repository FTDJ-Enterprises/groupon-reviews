const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("../database_reviews/database.js");
const port = 3001;

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api/:id/reviews", (req, res) => {
  db.query(`SELECT * FROM reviews WHERE product_id = ${req.params.id}`, function(err, result) {
    console.log('reached this point', err, result)
    if (err) {
      throw err;
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => console.log(`server app listening on port ${port}!`));

module.exports = app;

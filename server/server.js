const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("../database_reviews/database.js");

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/api/:id/reviews", (req, res) => {
  db.query(`SELECT * FROM reviews WHERE product_id = ${req.params.id}`, function(err, result) {
    if (err) {
      throw err;
    } else {
      res.json(result);
    }
  });
});

app.listen(3001, () => console.log(`server app listening on port 3001!`));

module.exports = app;

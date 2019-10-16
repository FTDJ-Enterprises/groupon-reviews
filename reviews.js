const express = require("express");
const router = express.Router();
const db = require("./database_reviews/database.js");

router.get("/reviews", async (req, res) => {
  const data = await db.query("SELECT * FROM reviews");
  return res.json(data);
});

module.exports = router;

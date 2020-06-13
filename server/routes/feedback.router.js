const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  let queryText = `SELECT * FROM "feedback" ORDER BY "id" ASC`;

  pool
    .query(queryText)
    .then((res) => {
      res.send(result.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = router;

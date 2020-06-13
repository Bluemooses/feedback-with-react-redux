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

// router.post('/', (req, res) => {
//     let newFeedBack = req.body;
//     console.log('Feedback added', newFeedBack);

//     let queryText = `INSERT INTO "feedback"`

// })

module.exports = router;

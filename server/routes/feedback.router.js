const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post('/', (req, res) => {
    let newFeedBack = req.body;
    console.log('Feedback added', newFeedBack);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments");`;

    pool.query(queryText, [newFeedBack.feeling, newFeedBack.understanding, newFeedBack.support, newFeedBack.comments])
      .then(res => {
        res.sendStatus(200)
      })
      .catch((err) => {
        console.log("pool DB post ERR", err)
        res.sendStatus(500)
      })

})

module.exports = router;


// VALUES($1, $2, $3, $4)
// 
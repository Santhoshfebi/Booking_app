const express = require("express");
const db = require("../db/db");
const router = express.Router();

router.get("/getMoviesInfo", (req, res, next) => {
  const getAllMoviesQuery = "SELECT * FROM movies"; // Retrieve all columns from the 'movies' table
  db.query(getAllMoviesQuery, (err, result) => {
    if (err) {
      console.error("Error fetching movies:", err);
      return res.status(500).send("Error fetching movies");
    }
    // console.log("Fetched movie information:", result);
    res.status(200).json(result); // Return all movie information
  });
});

module.exports = router;

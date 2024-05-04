// getMovieById.js
const express = require("express");
const db = require("../db/db");
const router = express.Router();

router.get("/getMovie/:id", (req, res, next) => {
  const movieId = req.params.id;
  const getMovieQuery = "SELECT * FROM movies WHERE movieid = ?"; // Retrieve movie by ID
  db.query(getMovieQuery, [movieId], (err, result) => {
    if (err) {
      console.error("Error fetching movie:", err);
      return res.status(500).send("Error fetching movie");
    }
    if (result.length === 0) {
      return res.status(404).send("Movie not found");
    }
    res.status(200).json(result[0]); // Return movie information
  });
});

module.exports = router;

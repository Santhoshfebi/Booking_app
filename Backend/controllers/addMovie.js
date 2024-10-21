// addMovie.js
const express = require("express");
const db = require("../db/db");
const router = express.Router();

router.post("/addMovie", (req, res) => {
  const { moviename, description, genere, language, url, cast } = req.body;

  const insertMovieQuery =
    "INSERT INTO movies (moviename, description, genere, language, url, cast) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(insertMovieQuery, [moviename, description, genere, language, url, cast], (err, result) => {
    if (err) {
      console.error("Error adding movie:", err);
      return res.status(500).send("Error adding movie");
    }
    console.log("Movie added:", result);
    res.status(200).send("Movie added successfully");
  });
});

module.exports = router;

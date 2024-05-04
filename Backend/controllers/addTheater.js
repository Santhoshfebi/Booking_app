// addTheater.js
const express = require("express");
const db = require("../db/db");
const router = express.Router();

router.post("/addTheater", (req, res, next) => {
  const { theater_name, theater_address, theater_city, movie_id, timing } = req.body;

  const addTheaterQuery = "INSERT INTO theaters (theater_name, theater_address, theater_city, movie_id, timing) VALUES (?, ?, ?, ?, ?)";
  
  db.query(addTheaterQuery, [theater_name, theater_address, theater_city, movie_id, timing], (err, result) => {
    if (err) {
      console.error("Error adding theater:", err);
      return res.status(500).send("Error adding theater");
    }
    res.status(200).send("Theater added successfully");
  });
});

module.exports = router;

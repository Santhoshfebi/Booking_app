// registration.js
const express = require("express");
const db = require("../db/db");
const router = express.Router();

router.post("/register", (req, res) => {
  const { fullname, emailid, password, mobile_no } = req.body;

  // Check if the user with the provided email already exists
  const checkUserQuery = "SELECT * FROM registration WHERE emailid = ?";
  db.query(checkUserQuery, [emailid], (err, result) => {
    if (err) {
      console.error("Error checking user:", err);
      return res.status(500).send("Error registering user");
    }

    if (result.length > 0) {
      // User with provided email already exists
      return res.status(400).send("User already exists");
    }

    // User does not exist, proceed with registration
    const insertUserQuery =
      "INSERT INTO registration (fullname, emailid, password, mobile_no) VALUES (?, ?, ?, ?)";
    db.query(insertUserQuery, [fullname, emailid, password, mobile_no], (err, result) => {
      if (err) {
        console.error("Error registering user:", err);
        return res.status(500).send("Error registering user");
      }
      console.log("User registered:", result);
      res.status(200).send("User registered successfully");
    });
  });
});

module.exports = router;

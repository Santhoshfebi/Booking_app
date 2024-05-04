// login.js
const express = require("express");
const db = require("../db/db");
const router = express.Router();

router.post("/login", (req, res) => {
  const { emailid, password } = req.body;

  const sql = "SELECT * FROM registration WHERE emailid = ? AND password = ?";
  db.query(sql, [emailid, password], (err, result) => {
    if (err) {
      console.error("Error logging in:", err);
      return res.status(500).send("Error logging in");
    }

    if (result.length > 0) {
      // Extract role from the result
      const { role } = result[0];

      // Redirect based on role
      if (role === "admin") {
        return res.status(200).send("admin");
      } else {
        return res.status(200).send("user");
      }
    } else {
      return res.status(401).send("Incorrect email or password");
    }
  });
});

module.exports = router;

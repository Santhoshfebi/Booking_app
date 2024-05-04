const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "bookmyshowadmin",
  password: "Bookmyshow1",
  database: "bookmyshow",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected");
});

// Registration Endpoint
app.post("/register", (req, res) => {
  const { fullname, emailid, password, mobile_no } = req.body;

  // Check if the user with the provided email already exists
  const checkUserQuery = "SELECT * FROM registration WHERE emailid = ?";
  db.query(checkUserQuery, [emailid], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering user");
    } else {
      if (result.length > 0) {
        // User with provided email already exists
        res.status(400).send("User already exists");
      } else {
        // User does not exist, proceed with registration
        const insertUserQuery = 'INSERT INTO registration (fullname, emailid, password, mobile_no, role) VALUES (?, ?, ?, ?, ?)';
        const role = 'user'; // Default role for new users
        db.query(insertUserQuery, [fullname, emailid, password, mobile_no, role], (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send('Error registering user');
          } else {
            console.log('User registered:', result);
            res.status(200).send('User registered successfully');
            }

          }
        );
      }
    }
  });
});

// Login Endpoint
app.post("/login", (req, res) => {
  const { emailid, password } = req.body;

  const sql = "SELECT * FROM registration WHERE emailid = ? AND password = ?";
  db.query(sql, [emailid, password], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error logging in");
    } else {
      if (result.length > 0) {
        // Extract role from the result
        const { role } = result[0];

        // Redirect based on role
        if (role === "admin") {
          res.status(200).send("admin");
        } else {
          res.status(200).send("user");
        }
      } else {
        res.status(401).send("Incorrect email or password");
      }
    }
  });
});

// Add Movie Endpoint
app.post("/addMovie", (req, res) => {
  const { moviename, description, genere, language, url, cast } = req.body;

  const insertMovieQuery =
    "INSERT INTO movies (moviename, description,genere, language, url, cast) VALUES (?, ?, ? ,? ,? ,?)";
  db.query(
    insertMovieQuery,
    [moviename, description, genere, language, url, cast],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error adding movie");
      } else {
        console.log("Movie added:", result);
        res.status(200).send("Movie added successfully");
      }
    }
  );
});

// Add user Endpoint
app.post("/userinfo", (req, res) => {
  const { username, usermailid, userpassword, usermobilenum, userrole } =
    req.body;

  const insertUserQuery =
    "INSERT INTO user (username, usermailid, userpassword, usermobilenum, userrole) VALUES (?, ?, ? ,? ,?)";
  db.query(
    insertUserQuery,
    [username, usermailid, userpassword, usermobilenum, userrole],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error adding user");
      } else {
        console.log("User added:", result);
        res.status(200).send("User added successfully");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

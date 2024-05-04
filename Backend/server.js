// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const registerRouter = require("./controllers/registration");
const loginRouter = require("./controllers/login");
const addMovieRouter = require("./controllers/addMovie");
const getMoviesInfoRouter = require("./controllers/getMovie");
const getMovieByIdRouter = require("./controllers/getMovieById");
const addTheaterRouter = require("./controllers/addTheater");
const db = require("./db/db");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(registerRouter);
app.use(loginRouter);
app.use(addMovieRouter);
app.use(getMoviesInfoRouter);
app.use(getMovieByIdRouter); 
app.use(addTheaterRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

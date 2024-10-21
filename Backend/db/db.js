//database
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "showadmin",
  password: "Bookmyshow123",
  database: "bookmyshow",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected");
});

module.exports = db;
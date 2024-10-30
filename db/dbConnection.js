const mongoose = require("mongoose");

function dbConnection(dbUrl) {
  mongoose.connect(dbUrl);
  console.log("DataBase Connected....");
}

module.exports = dbConnection;

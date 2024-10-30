require("dotenv").config();
const dbConnection = require("./db/dbConnection");
const product = require("./models/bookProducts");
const bookJson = require("./book.json");

async function start(req, res) {
  try {
    await dbConnection(process.env.DB_URL);
    await product.create(bookJson);
    console.log("JSON is created Successfully in DB");
  } catch (error) {
    console.log(`I'm in bookdb.js ${error.message}`);
  }
}
start();

require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 1172;
const dbConnection = require("./db/dbConnection");
const bookRouter = require("./routes/bookRoutes");
app.get("/", (req, res) => {
  res.send("Welcome to Book API");
});
app.use("/api/books/", bookRouter);
async function startServer() {
  try {
    dbConnection(process.env.DB_URL);
    app.listen(port, () => {
      console.log(`Your server is running at port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
startServer();

require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 1172;
app.get("/", (req, res) => {
  res.send("Welcome to Book API");
});

async function startServer() {
  try {
    app.listen(port, () => {
      console.log(`Your server is running at port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
startServer();

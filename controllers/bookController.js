const { json } = require("express");
const model = require("../models/bookProducts");
async function getAllBooks(req, res) {
  let myData = await model.find({});
  try {
    res.status(200).json({ myData });
  } catch (error) {
    console.log(error.message);
  }
}
async function getFancyBooks(req, res) {
  let fancyData = await model.find(req.query);
  try {
    res.status(200).json({ fancyData });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { getAllBooks, getFancyBooks };

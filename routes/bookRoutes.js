const express = require("express");
const router = express.Router();
const { getAllBooks, getFancyBooks } = require("../controllers/bookController");
router.route("/").get(getAllBooks);
router.route("/fancyBooks").get(getFancyBooks);
module.exports = router;

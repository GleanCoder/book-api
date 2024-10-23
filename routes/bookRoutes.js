const express = require("express");
const router = express.Router();
router.route("/").get(getAllBooks);
router.route("/fancyBooks").get(getFancyBooks);
module.exports = router;

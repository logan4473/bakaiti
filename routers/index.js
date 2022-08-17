const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home");

router.get("/api", homeController.home);

module.exports = router;

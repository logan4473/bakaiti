const { Router } = require("express");
const controller = require("../controllers/user");

const router = Router();

router.get("/", controller.doc);

module.exports = router;

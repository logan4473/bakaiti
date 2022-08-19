const { Router } = require("express");
const controller = require("../controllers/user");
const middleware = require("../middlewares/auth");

const router = Router();

router.get("/", controller.doc);

module.exports = router;

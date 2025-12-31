const adminUserdata = require("../controller/admin-controller.js");
const express = require("express");
const router = express.Router();

router.route("/user").get(adminUserdata);

module.exports = router;
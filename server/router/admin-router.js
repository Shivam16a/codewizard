const { adminUserdata, deleteuser } = require("../controller/admin-controller.js");
const express = require("express");
const router = express.Router();

router.route("/user").get(adminUserdata);
router.route("/deleteuser/:id").delete(deleteuser);

module.exports = router;
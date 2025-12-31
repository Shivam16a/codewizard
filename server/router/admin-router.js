const { adminUserdata, deleteuser, updateuser } = require("../controller/admin-controller.js");
const express = require("express");
const router = express.Router();

router.route("/user").get(adminUserdata);
router.route("/deleteuser/:id").delete(deleteuser);
router.route("/updateuser/:id").put(updateuser);

module.exports = router;
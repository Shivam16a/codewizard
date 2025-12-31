const express = require("express");
const router = express.Router();
const { serviceForm, servicedata } = require("../controller/service_controller.js");

router.route("/serviceform").post(serviceForm);
router.route("/servicedata").get(servicedata);

module.exports = router;
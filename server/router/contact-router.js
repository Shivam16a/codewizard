const express = require("express");
const router = express.Router();
const {contactForm,contactData} = require("../controller/contact-controller.js");

router.route("/message").post(contactForm);
router.route("/contactdata").get(contactData);

module.exports = router;
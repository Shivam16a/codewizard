const express = require("express");
const router = express.Router();
const { contactForm, contactData, deleteContact } = require("../controller/contact-controller.js");

router.route("/message").post(contactForm);
router.route("/contactdata").get(contactData);
router.route("/deletcontact/:id").delete(deleteContact);

module.exports = router;
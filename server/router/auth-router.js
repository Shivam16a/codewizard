const express = require("express");
const router = express.Router();
const { login, register, user } = require("../controller/auth-controller.js");
const { signupSchema, loginSchema } = require("../validators/auth-validator.js");
const validator = require("../middlewares/validate-middleware.js");
const authMiddleware = require("../middlewares/auth-middleware.js");

// router.get("/",(req,res)=>{
//     res
//     .status(200)
//     .send("Welcome to the Home page using router");
// });

router.route("/login").post(validator(loginSchema), login);
router.route("/register").post(validator(signupSchema), register);
router.route("/user").get(authMiddleware, user);

module.exports = router;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const router = require("./router/auth-router.js");
const contactRout = require("./router/contact-router.js");
const serviceRoute = require("./router/service-router.js");
const adminRout = require("./router/admin-router.js");
const connectDb = require("./utils/db.js");

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://codewizard-omega.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: true
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

app.use("/api/auth", router);
app.use("/api/contact", contactRout);
app.use("/api/service", serviceRoute);
app.use("/api/admin", adminRout);

const PORT = process.env.PORT || 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});

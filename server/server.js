const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const router = require("./router/auth-router.js");
const contactRout = require("./router/contact-router.js");
const serviceRoute = require("./router/service-router.js");
const adminRout = require("./router/admin-router.js");
const connectDb = require("./utils/db.js");

/* ✅ CORS FIX */
const corsOptions = {
    origin: [
        "http://localhost:5173",          // local
        "https://codewizardnewshivam.vercel.app" // production
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", router);
app.use("/api/contact", contactRout);
app.use("/api/service", serviceRoute);
app.use("/api/admin", adminRout);

/* ✅ PORT FIX */
const PORT = process.env.PORT || 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
});

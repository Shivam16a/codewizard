const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const router = require("./router/auth-router.js");
const contactRout = require("./router/contact-router.js");
const serviceRoute = require("./router/service-router.js");
const adminRout = require("./router/admin-router.js");
const connectDb = require("./utils/db.js");

const corseOption = {
    origin: "http://localhost:5173",
    method: "GET,POST,PUT,PATCH,HEAD,DELETE",
    Credential:true,
}

app.use(cors(corseOption));


app.use(express.json());

app.use("/api/auth", router);
app.use("/api/contact", contactRout);
app.use("/api/service",serviceRoute);
app.use("/api/admin",adminRout);

// app.get("/",(req,res)=>{
//     res.status(200).send("Welcome to the Home page");
// })

const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port:${PORT}`);
    })
});
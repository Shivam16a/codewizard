const mongodb = require("mongoose");

//const pass = UF9jFceOl6H4dFUB;
//const uri = "";

const connectDb = async()=>{
    try {
        await mongodb.connect(process.env.MONGODB_URI);
        console.log("connection successfull to DB");
    } catch (error) {
        console.error(error); 
        console.error("connection failed to db");
        process.exit(0);
    }
};

module.exports = connectDb;

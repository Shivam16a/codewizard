const User = require("../models/user-models.js");

const adminUserdata = async (req, res,) => {
    try {
        const response = await User.find({},{password:0});
        if(response){
            return res.status(200).json({mes:response});
        }
        return res.status(400).json({mes:"No user data found"});
    } catch (error) {
        console.log(`AdminUser:${error}`);
        
    }
}

module.exports = adminUserdata;
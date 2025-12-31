const User = require("../models/user-models.js");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json("Invalid credential");
        }
        const user = await bcrypt.compare(password, userExist.password);

        if (user) {
            return res.status(200).json({ msg: "Login successful", token: await userExist.generateToken(), userId: userExist._id.toString() });
        } else {
            return res.status(401).json("Invalid Email or Password");
        }
    } catch (error) {
        console.error(error); 
        return res.status(400).json({error:"Internal server error"});
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;
        const userExit = await User.findOne({ email });
        if (userExit) {
            return res.status(400).json("user already exists");
        }
        const haspassword = await bcrypt.hash(password, 10);
        const usercreated = await User.create({ username, email, phone, password: haspassword });
        // console.log(usercreated);

        return res.status(200).json({ mes: "User created successfuly", token: await usercreated.generateToken(), userId: usercreated._id.toString(), });
    } catch (error) {
        console.error(error); 
        return res.status(501).json({error:"server internal error"});
    }
}

const user = async (req, res) => {
    try {
        const userData = req.user;
        // console.log(userData);
        return res.status(200).json(userData);
    } catch (error) {

        return res.status(400).json(error);
        
    }
}

module.exports = { login, register,user };
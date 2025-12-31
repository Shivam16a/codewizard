const User = require("../models/user-models.js");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized access" });
    }

    const jwtToken = token.replace("Bearer ", "");

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);

        const userData = await User
            .findOne({ email: isVerified.email })
            .select("-password");

        if (!userData) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = userData;
        req.token = jwtToken;
        req.userId = userData._id;

        next();
    } catch (error) {
        console.error(error); 
        return res.status(401).json({ error: "Invalid token" });
    }
};

module.exports = authMiddleware;

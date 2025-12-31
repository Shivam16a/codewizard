const User = require("../models/user-models.js");

const adminUserdata = async (req, res,) => {
    try {
        const response = await User.find({}, { password: 0 });
        if (response) {
            return res.status(200).json({ mes: response });
        }
        return res.status(400).json({ mes: "No user data found" });
    } catch (error) {
        console.log(`AdminUser:${error}`);

    }
}

const deleteuser = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await User.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ mes: "user not found" });
        }
        return res.status(200).json({ mes: "user deleted successfully" });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateuser = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ mes: "User not found" });
        }

        return res.status(200).json({
            mes: "User updated successfully",
            user: updatedUser
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server error" });
    }
};

module.exports = { adminUserdata, deleteuser, updateuser };
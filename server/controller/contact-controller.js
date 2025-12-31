const contact = require("../models/contact-model.js");
const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await contact.create(response);
        return res.status(200).json({ msg: "message send successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

const contactData = async (req, res) => {
    try {
        const response = await contact.find();
        if (response) {
            // console.log(response);
            return res.status(201).json(response);
        }
        console.log("No contact details found");
        return res.status(400).json("No contact details found");
    } catch (error) {
        return res.status(400).json(error);
    }
}
module.exports = { contactForm, contactData };
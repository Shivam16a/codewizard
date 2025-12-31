const service = require("../models/service-models.js");

const serviceForm = async (req, res) => {
    try {
        const response = req.body;
        await service.create(response);
        return res.status(200).json({ mes: "data saved in backend" });
    } catch (error) {
        console.error(error); 
        return res.status(400).json({ error: "Internal server Error" });
    }
}

const servicedata = async (req, res) => {
    try {
        const response = await service.find();
        if(response){
            return res.status(200).json({mes:response});
        }
        return res.status(200).json("No servise data found");
    } catch (error) {
        console.log(`service:${error}`);
        
    }
}

module.exports = {serviceForm,servicedata};
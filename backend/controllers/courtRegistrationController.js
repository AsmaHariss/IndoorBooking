import courtRegistrationModel from "../models/courtRegistrationModel.js";
import userModel from '../models/userModel.js'

//user requests for court registration
const placecourtRegistration = async (req, res) => {
    
    const frontend_url = "http://localhost:5174";

    try {
        
        const newcourtRegistration = new courtRegistrationModel({
            
            userId: req.body.userId,
            courtName: req.body.courtName,
            sportName: req.body.sportName,
            location: req.body.location

        });

        const savedcourtRegistration = await newcourtRegistration.save();

        await userModel.findByIdAndUpdate(req.body.userId, {
            $push: { courtRegistrations: savedcourtRegistration._id }
        });

        res.status(201).json({
            message: "courtRegistration placed successfully",
            courtRegistration: savedcourtRegistration
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while placing the courtRegistration",
            error: error.message
        });
    }
}


//user get all their courtRegistration
//in request body search as userId not ._id
const usercourtRegistrationList = async (req, res) => {
    try {
        const courtRegistrations = await courtRegistrationModel.find({ userId: req.body.userId });
        res.json({ success: true, data: courtRegistrations })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

//for admin
const listAllcourtRegistration = async (req, res) => {

    try {
        const courtRegistrations = await courtRegistrationModel.find({})
        res.json({ success: true, data: courtRegistrations })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }
}

//for admin
const updateStatus = async (req, res) => {
    try {
        await courtRegistrationModel.findByIdAndUpdate(req.body.courtRegistrationId, { status: req.body.status })
        res.json({ success: true, message: "Status Updated" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

//admin & user
const removecourtRegistration = async (req, res) => {
    try {
        const courtRegistration = await courtRegistrationModel.findById(req.body.id);

        await courtRegistrationModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "court registration Removed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }

}
export { placecourtRegistration, listAllcourtRegistration, usercourtRegistrationList, updateStatus, removecourtRegistration};
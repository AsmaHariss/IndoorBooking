import bookingModel from "../models/bookingModel.js";
import userModel from '../models/userModel.js'

//user
const placeBooking = async (req, res) => {
    
    const frontend_url = "http://localhost:5174";

    try {
        
        const newBooking = new bookingModel({
            userId: req.body.userId,
            courtId: req.body.courtId,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            sportName: req.body.sportName
        });

        const savedBooking = await newBooking.save();

        await userModel.findByIdAndUpdate(req.body.userId, {
            $push: { bookings: savedBooking._id }
        });

        res.status(201).json({
            message: "Booking placed successfully",
            booking: savedBooking
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while placing the booking",
            error: error.message
        });
    }
}


//user get all their booking
//in request body search as userId not ._id
const userBookingList = async (req, res) => {
    try {
        const bookings = await bookingModel.find({ userId: req.body.userId });
        res.json({ success: true, data: bookings })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

//admin
const listAllBooking = async (req, res) => {

    try {
        const bookings = await bookingModel.find({})
        res.json({ success: true, data: bookings })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }
}

//admin
const updateStatus = async (req, res) => {
    try {
        await bookingModel.findByIdAndUpdate(req.body.bookingId, { status: req.body.status })
        res.json({ success: true, message: "Status Updated" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// user & admin
const removeBooking = async (req, res) => {
    try {
        const booking = await bookingModel.findById(req.body.id);

        await bookingModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "booking Removed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }

}

export { placeBooking, listAllBooking, userBookingList, updateStatus, removeBooking};
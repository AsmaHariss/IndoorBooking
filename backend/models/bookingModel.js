import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

    // the required fields should fill up in the database
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    sportName : {type: String, required:true},
    courtId: { type: mongoose.Schema.Types.ObjectId, ref: 'court', required: true },
    status: { type: String, default: "Booking Processing" }

});

const bookingModel = mongoose.model('booking', bookingSchema);
export default bookingModel;

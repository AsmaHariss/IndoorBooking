import mongoose from "mongoose";

const courtRegistrationSchema = new mongoose.Schema({

    // the required fields should fill up in the database
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    courtName: { type: String, required: true },
    sportName: {type: String, required:true},
    location: {type: String, required: true},
    status: { type: String, default: "Registraion Processing" }

});

const courtRegistrationModel = mongoose.model('courtRegistration', courtRegistrationSchema);
export default courtRegistrationModel;


import mongoose from "mongoose";

const superAdminSchema = new mongoose.Schema({

    // the required fields should fill up in the database
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: {type:Number, required:true},
    email: { type: String, required: true, unique: true },
    password: {type:String, required:true}
    
});

const superAdminModel = mongoose.model('superAdmin', superAdminSchema);
export default superAdminModel;


import mongoose from "mongoose";

const courtAdminSchema = new mongoose.Schema({

    // the required fields should fill up in the database
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: {type:Number, required:true},
    email: { type: String, required: true, unique: true },
    password: {type:String, required:true}
    
});

const courtAdminModel = mongoose.model('courtAdmin', courtAdminSchema);
export default courtAdminModel;


import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    // the required fields should fill up in the database
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: {type:Number, required:true},
    email: { type: String, required: true, unique: true },
    password: {type:String, required:true}
    
});

const userModel = mongoose.model('user', userSchema);
export default userModel;

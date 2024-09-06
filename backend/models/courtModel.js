import mongoose from "mongoose";

const courtSchema = new mongoose.Schema({

    // the required fields should fill up in the database
    name: { type: String, required: true },
    sportName: {type: String, required:true},
    location: {type: String, required: true}
    

});//

const courtModel = mongoose.model('court', courtSchema);
export default courtModel;


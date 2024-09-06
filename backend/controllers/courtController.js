import courtModel from "../models/courtModel.js";


// add court item

const addCourt = async (req, res) => {
   
    const court = new courtModel({
        name: req.body.name,
        sportName: req.body.sportName,
        location: req.body.location
    })

    try {
        await court.save();
        res.json({ success: true, message: "court Registered" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }

}

// all court list
const listCourt = async (req, res) => {

    try {
        const courts = await courtModel.find({})
        res.json({ success: true, data: courts })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }
}

// remove court 
const removeCourt = async (req, res) => {
    try {
        const court = await courtModel.findById(req.body.id);

        await courtModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "court Removed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }

}

export { addCourt, listCourt, removeCourt }
import courtAdminModel from "../models/courtAdminModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//login courtAdmin
const logincourtAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const courtAdmin = await courtAdminModel.findOne({ email });

        if (!courtAdmin) {
            return res.json({ success: false, message: "courtAdmin does not exists" })
        }

        const isMatch = await bcrypt.compare(password, courtAdmin.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" })
        }
        const token = createToken(courtAdmin._id);
        res.json({ success: true, token })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//register courtAdmin
const registercourtAdmin = async (req, res) => {
    const { firstName, lastName, phone, email, password,} = req.body;
    try {

        //checking is courtAdmin already exists
        const exist = await courtAdminModel.findOne({ email });
        if (exist) {
            return res.json({ success: false, message: "courtAdmin already exists" })
        }

        // validating email format and string password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter strong password" })
        }

        // hashing courtAdmin password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newcourtAdmin = new courtAdminModel({
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            password: hashedPassword
        })

        const courtAdmin = await newcourtAdmin.save()
        const token = createToken(courtAdmin._id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { logincourtAdmin, registercourtAdmin }
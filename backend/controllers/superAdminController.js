import superAdminModel from "../models/superAdminModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//login superAdmin
const loginsuperAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const superAdmin = await superAdminModel.findOne({ email });

        if (!superAdmin) {
            return res.json({ success: false, message: "superAdmin does not exists" })
        }

        const isMatch = await bcrypt.compare(password, superAdmin.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" })
        }
        const token = createToken(superAdmin._id);
        res.json({ success: true, token })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//register superAdmin
const registersuperAdmin = async (req, res) => {
    const { firstName, lastName, phone, email, password,} = req.body;
    try {

        //checking is superAdmin already exists
        const exist = await superAdminModel.findOne({ email });
        if (exist) {
            return res.json({ success: false, message: "superAdmin already exists" })
        }

        // validating email format and string password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter strong password" })
        }

        // hashing superAdmin password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newsuperAdmin = new superAdminModel({
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            password: hashedPassword
        })

        const superAdmin = await newsuperAdmin.save()
        const token = createToken(superAdmin._id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { loginsuperAdmin, registersuperAdmin }
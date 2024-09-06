import express from "express"
import { listAllcourtRegistration, placecourtRegistration, removecourtRegistration, updateStatus, usercourtRegistrationList } from "../controllers/courtRegistrationController.js"

const courtRegistrationRouter = express.Router()

//the path should be consider in frontend.
courtRegistrationRouter.get("/listAllcourtRegistration", listAllcourtRegistration)
courtRegistrationRouter.post("/placecourtRegistration", placecourtRegistration)
courtRegistrationRouter.post("/updateStatus", updateStatus)
courtRegistrationRouter.get("/usercourtRegistrationList", usercourtRegistrationList)
courtRegistrationRouter.post("/removecourtRegistration", removecourtRegistration)

export default courtRegistrationRouter;
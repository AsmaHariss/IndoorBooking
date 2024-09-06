import express from "express"
import { logincourtAdmin, registercourtAdmin } from "../controllers/courtAdminController.js"


const courtAdminRouter = express.Router()

//the path should be consider in frontend.
courtAdminRouter.post("/registerCoAdmin", registercourtAdmin)
courtAdminRouter.post("/loginCoAdmin", logincourtAdmin)

export default courtAdminRouter;
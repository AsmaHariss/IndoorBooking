import express from "express"
import { loginsuperAdmin, registersuperAdmin } from "../controllers/superAdminController.js"


const superAdminRouter = express.Router()

//the path should be consider in frontend.
superAdminRouter.post("/registerSupAdmin", registersuperAdmin)
superAdminRouter.post("/loginSupAdmin", loginsuperAdmin)

export default superAdminRouter;
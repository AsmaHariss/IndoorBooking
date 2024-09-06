import express from "express"
import { addCourt, listCourt, removeCourt } from "../controllers/courtController.js"

const courtRouter = express.Router()

//the path should be consider in frontend.
courtRouter.post("/addCourt", addCourt)
courtRouter.get("/listCourt", listCourt)
courtRouter.post("/removeCourt", removeCourt)


export default courtRouter;
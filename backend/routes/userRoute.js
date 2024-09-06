import express from "express"
import { listUser, loginUser, registerUser } from "../controllers/userController.js"


const userRouter = express.Router()

//the path should be consider in frontend.
userRouter.get("/listUser", listUser)
userRouter.post("/registerUser", registerUser)
userRouter.post("/loginUser", loginUser)

export default userRouter;
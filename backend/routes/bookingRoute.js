import express from "express"
import { placeBooking, listAllBooking, userBookingList, updateStatus, removeBooking } from "../controllers/bookingController.js"

const bookingRouter = express.Router()

//the path should be consider in frontend.
bookingRouter.post("/placeBooking", placeBooking)
bookingRouter.get("/listAllBooking", listAllBooking)
bookingRouter.get("/userBookingList", userBookingList)
bookingRouter.post("/updateStatus", updateStatus)
bookingRouter.post("/removeBooking", removeBooking)

export default bookingRouter;
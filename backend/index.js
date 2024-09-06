import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js'
import userRouter from './routes/userRoute.js'
import courtAdminRouter from './routes/courtAdminRoute.js'
import superAdminRouter from './routes/superAdminRoute.js'
import courtRouter from './routes/courtRoute.js'
import bookingRouter from './routes/bookingRoute.js'
import courtRegistrationRouter from './routes/courtRegistrationRoute.js'


const app = express()
const port = 4000;
app.use(express.json())
app.use(cors())

//api end point
app.use("/api/user", userRouter)
app.use("/api/courtAdmin", courtAdminRouter)
app.use("/api/superAdmin", superAdminRouter)
app.use("/api/court", courtRouter)
app.use("/api/booking", bookingRouter)
app.use("/api/courtRegistration", courtRegistrationRouter)

app.use(cookieParser())
dotenv.config()

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})
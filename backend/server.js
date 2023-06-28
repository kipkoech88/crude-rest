const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const {errorHandler} = require("./middlewares/errorMiddleware")
const goalRoute = require("./routes/goalRoutes")
const userRoute = require("./routes/userRoutes")
const colors = require("colors");
const connectDB = require("./config/db")


connectDB()
//Initializing the app instance
const app = express()
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/goals", goalRoute);
app.use("/api/users", userRoute);
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
})
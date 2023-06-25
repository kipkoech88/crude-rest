const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const goalRoute = require("./routes/goalRoutes")

//Initializing the app instance
const app = express()
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/", goalRoute);

app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
})
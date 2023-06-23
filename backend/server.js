const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000

//Initializing the app instance
const app = express()


app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
})
const mongoose = require("mongoose")
const mongouri= process.env.MONGODB_URI

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(mongouri)

        console.log(`Mongodb connected!: ${conn.connection.host}`.cyan.underline)
    }
    catch (err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB
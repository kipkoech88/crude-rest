const asyncHandler = require("express-async-handler")
const Goal = require("../models/goalModel")

const getGoals = asyncHandler(async(req, res)=>{
    const goal = await Goal.find()

    res.status(200).json(goal)
})

const setGoals = asyncHandler(async(req, res)=>{
    if (!req.body.text){
        res.status(400)
        throw new Error("Please enter a valid input text")
    }
    res.status(200).json({Message: "Create a goals"})
})

const updateGoals = asyncHandler(async(req, res)=>{
    res.status(200).json({Message: `Update goals ${id}`})
})

const deleteGoals = asyncHandler(async(req, res)=>{
    res.status(200).json({Message: `Delete goals ${id}`})
})

module.exports = {getGoals, 
    updateGoals, 
    setGoals, 
    deleteGoals
}
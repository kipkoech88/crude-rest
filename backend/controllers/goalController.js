const asyncHandler = require("express-async-handler")
const Goal = require("../models/goalModel")

const getGoals = asyncHandler(async(req, res)=>{
    const goal = await Goal.find({user: req.user.id})

    res.status(200).json(goal)
})

const setGoals = asyncHandler(async(req, res)=>{
    if (!req.body.text){
        res.status(400)
        throw new Error("Please enter a valid input text")
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    console.log(goal)
    res.status(200).json(goal)
})

const updateGoals = asyncHandler(async(req, res)=>{
    const goal = await Goal.findById(req.params.id)

    if (!goal){
        res.status(400)
        throw new Error("Goal not found")
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json({Message: `Update goals ${id}`})
})

const deleteGoals = asyncHandler(async(req, res)=>{

    const goal = await Goal.findById(req.params.id)

    if (!goal){
        res.status(400)
        throw new Error("Goal not found")
    }

    await goal.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {getGoals, 
    updateGoals, 
    setGoals, 
    deleteGoals
}
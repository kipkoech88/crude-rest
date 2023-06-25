const getGoals = (req, res)=>{
    res.status(200).json({message: "get goals"})
}

const setGoals = (req, res)=>{
    if (!req.body.text){
        res.status(400)
        throw new Error("Please enter a valid input text")
    }
    res.status(200).json({Message: "Create a goals"})
}

const updateGoals = (req, res)=>{
    res.status(200).json({Message: `Update goals ${id}`})
}

const deleteGoals = (req, res)=>{
    res.status(200).json({Message: `Delete goals ${id}`})
}

module.exports = {getGoals, 
    updateGoals, 
    setGoals, 
    deleteGoals
}
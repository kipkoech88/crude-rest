//@desc Register user
//@route api/users
//@access private

const registerUser = (req, res)=>{
    res.json({message: "Register USers"})
}

//@desc Authenticate user
//@route POST/api/users/login
//@access Public

const loginUser = (req, res)=>{
    res.json({message: "Login USers"})
}

//@desc Get users data
//@route GET/api/users/me
//@access Public


const getUser = (req, res)=>{
    res.json({message: "Register USers"})
}

module.exports = {
    loginUser,
    registerUser,
    getUser,
}
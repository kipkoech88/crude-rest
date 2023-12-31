const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

//@desc Register user
//@route api/users
//@access private

const registerUser = asyncHandler(async(req, res)=>{
    const {email, name, password } = req.body;

    if (!email || !name || !password){
        res.status(400);
        throw new Error("Please fill all the fields")
    }

    //See if usr exists
    const userExists = await User.findOne({email});

    if (userExists){
        res.status(400);
        throw new Error("User already exists")
    }

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create users
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error("Unable to create user")
    }
    res.json({message: "Register USers"})
})

//@desc Authenticate user
//@route POST/api/users/login
//@access Public

const loginUser = asyncHandler(async(req, res)=>{

    const {email, password} = req.body;

    const user = await User.findOne({email});

    //check if user exist
    if (user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id:user.id,
            email: user.email,
            name: user.name,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error("No matching user details")
    }
    res.json({message: "Login USers"})
})

//@desc Get users data
//@route GET/api/users/me
//@access Public


const getUser = asyncHandler(async(req, res)=>{
    const {_id, email, name} = await User.findById(req.user.id);

    res.status(200).json({
        id: _id,
        email: email,
        name: name
    });

})


//Generate JWT
const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}

module.exports = {
    loginUser,
    registerUser,
    getUser,
}
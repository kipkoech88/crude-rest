const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

//@desc Register user
//@route api/users
//@access private

const registerUser = asyncHandler(async(req, res)=>{
    res.json({message: "Register USers"})
})

//@desc Authenticate user
//@route POST/api/users/login
//@access Public

const loginUser = asyncHandler(async(req, res)=>{
    res.json({message: "Login USers"})
})

//@desc Get users data
//@route GET/api/users/me
//@access Public


const getUser = asyncHandler(async(req, res)=>{
    res.json({message: "Register USers"})
})

module.exports = {
    loginUser,
    registerUser,
    getUser,
}
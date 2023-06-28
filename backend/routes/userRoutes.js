const express = require("express")
const { route } = require("./goalRoutes")
const router = express.Router()
const {registerUser} = require("../controllers/userController")

router.post("/", registerUser);

module.exports = router
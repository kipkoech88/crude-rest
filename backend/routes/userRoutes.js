const express = require("express")
const { route } = require("./goalRoutes")
const router = express.Router()
const {registerUser, loginUser, getUser} = require("../controllers/userController")
const {protect} = require("../middlewares/authMiddleware")

router.post("/", registerUser);
router.get("/me", protect, getUser);
router.post("/login", loginUser)


module.exports = router
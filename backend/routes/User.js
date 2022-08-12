const express = require("express")
const userController = require("../controllers/User")


const router = express.Router()



router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/:id", userController.getUserByID)


module.exports = router
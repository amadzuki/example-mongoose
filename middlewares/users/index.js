const express = require("express")
const router = express.Router()

const users = require("./controller")

/* GET users listing. */
router.get("/", users.getAll)
router.get("/:id", users.getById)

// POST users
router.post("/", users.postNewUser)

// DELETE all users
router.delete("/", users.deleteAllUsers)

module.exports = router

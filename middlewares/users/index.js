const express = require("express")
const router = express.Router()

const users = require("./controller")

/* GET users listing. */
router.get("/", users.getAll)
router.get("/:id", users.getById)

// POST users
router.post("/", users.postNewUser)

module.exports = router

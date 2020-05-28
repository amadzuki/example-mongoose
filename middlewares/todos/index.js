const express = require("express")
const router = express.Router()

const todos = require("./controller")

// GET todos listing
router.get("/", todos.getAll)

module.exports = router

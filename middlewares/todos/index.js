const express = require("express")
const router = express.Router()

const todos = require("./controller")

// GET todos listing
router.get("/", todos.getAll)
router.get("/:id", todos.getById)

//POST new todo
router.post("/", todos.addNewTodo)

module.exports = router

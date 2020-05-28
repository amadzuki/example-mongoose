const express = require("express")
const router = express.Router()

const todos = require("./controller")

// GET todos listing
router.get("/", todos.getAll)
router.get("/:id", todos.getById)

//POST new todo
router.post("/", todos.addNewTodo)

// update todo text
router.put("/:id", todos.updateTodoText)

//DELETE methods
router.delete("/", todos.deleteAll)
router.delete("/:id", todos.deleteTodoById)

module.exports = router

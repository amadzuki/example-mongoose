const Todo = require("./model")

module.exports = {
  getAll: async (req, res, next) => {
    const allTodos = await Todo.getAll()
    res.send({
      title: "List of all todos",
      todos: allTodos,
    })
  },

  getById: async (req, res, next) => {
    const selectedId = Number(req.params.id)
    try {
      const todo = await Todo.findById(selectedId)
      if (todo) {
        res.send({
          message: "Get todo by id",
          todo: todo,
        })
      } else {
        res.send({
          message: "Todo is not found",
        })
      }
    } catch (error) {
      console.log(error)
    }
  },

  addNewTodo: (req, res, next) => {
    const booleanIsFavorited = Boolean(Number(req.body.todoIsFavorited))
    const booleanIsDone = Boolean(Number(req.body.todoIsDone))
    const newTodo = {
      text: req.body.todoText,
      isFavorited: booleanIsFavorited,
      isDone: booleanIsDone,
    }
    Todo.addNewTodo(newTodo)
    res.send({
      message: "Successfully add a new todo",
      todo: newTodo,
    })
  },

  deleteAll: async (req, res, next) => {
    const deleteLog = await Todo.deleteAll()
    res.send({
      message: "Successfully delete all todos",
      report: deleteLog,
    })
  },

  deleteTodoById: async (req, res, next) => {
    const todoId = Number(req.params.id)
    try {
      const todo = await Todo.findById(todoId)
      if (todo) {
        const deleteLog = await Todo.deleteById(todoId)
        res.send({
          message: "Successfully deleted a record of todo",
          deletedTodo: todo,
          report: deleteLog,
        })
      } else {
        res.send({
          message: "Todo is not found!",
        })
      }
    } catch (error) {
      console.log(error)
    }
  },
}

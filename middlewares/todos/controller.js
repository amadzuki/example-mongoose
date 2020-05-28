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
    const isFavorited = Boolean(Number(req.body.todoIsFavorited))
    const isDone = Boolean(Number(req.body.todoIsDone))
    const newTodo = {
      text: req.body.todoText,
      isFavorited: isFavorited,
      isDone: isDone,
    }
    Todo.addNewTodo(newTodo)
    res.send({
      message: "Successfully add a new todo",
      todo: newTodo,
    })
  },
}

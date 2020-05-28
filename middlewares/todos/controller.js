const Todo = require("./model")

module.exports = {
  getAll: async (req, res, next) => {
    const allTodos = await Todo.getAll()
    res.send({
      title: "List of all todos",
      todos: allTodos,
    })
  },
}

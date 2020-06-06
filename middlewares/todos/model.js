const mongoose = require("../../config/mongoose")



const Todo = mongoose.model("todo", {
  // user_id = still don't know how to implement this
  id: Number,
  text: String,
  isFavorited: Boolean,
  isDone: Boolean,
})

let currentId = 2
// seed
// const seedTodo = new Todo({
//   id: 1,
//   text: "Plan your work for the day",
//   isFavorited: true,
//   isDone: false,
// })
// seedTodo.save().then(() => {})

module.exports = {
  getAll: async () => {
    const allTodos = await Todo.find({}, function (error, result) {})
    return allTodos
  },

  findById: async (id) => {
    const todo = await Todo.findOne({ id: id }, function (error, result) {})
    return todo
  },

  addNewTodo: (newTodo) => {
    currentId++
    const todo = new Todo({
      id: currentId,
      ...newTodo,
    })
    todo.save().then(() => {})
  },

  updateTodoText: async (id, newTodoText) => {
    const updatedTodo = await Todo.findOneAndUpdate(
      { id: id },
      { $set: { text: newTodoText } },
      { new: true }
    )
    return updatedTodo
  },

  deleteAll: async () => {
    const deleteLog = await Todo.deleteMany({})
    return deleteLog
  },

  deleteById: async (id) => {
    const deleteLog = await Todo.deleteOne({ id: id })
    return deleteLog
  },
}

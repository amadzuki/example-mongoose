const mongoose = require("mongoose")

const environment = require("../../config/env")

mongoose.connect(environment.mongodbURI, { useNewUrlParser: true })

const Todo = mongoose.model("todo", {
  // user_id = still don't know how to implement this
  text: String,
  isFavorited: Boolean,
  isDone: Boolean,
})

// seed
// const seedTodo = new Todo({
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
}

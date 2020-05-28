const mongoose = require("mongoose")

const environment = require("../../config/env")

mongoose.connect(environment.mongodbURI, { useNewUrlParser: true })

const User = mongoose.model("user", {
  id: Number,
  name: String,
  username: String,
  email: String,
})

let idCounter = 0

User.find()
  .sort({ id: -1 })
  .limit(1)
  .exec(function (error, result) {
    if (result.length === 0) {
      console.log("Creating new collection")
    } else {
      idCounter = result[0].id
    }
  })

module.exports = {
  find: () => {
    const users = User.find({}, (error, user) => {})
    return users
  },

  findById: (id) => {
    const user = User.findOne({ id: id }, (error, user) => {})
    return user
  },

  create: (newUser) => {
    idCounter++
    console.log(idCounter)
    const addUser = new User({
      id: idCounter,
      ...newUser,
    })
    addUser.save().then(() => console.log("Successfully add new user"))
  },

  deleteAll: async () => {
    let deleteLog = await User.deleteMany({})
    return deleteLog
  },

  deleteById: async (id) => {
    const deleteLog = await User.deleteOne({ id: id })
    return deleteLog
  },
}

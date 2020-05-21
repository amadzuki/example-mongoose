const mongoose = require("mongoose")

const environment = require("../../config/env")

mongoose.connect(environment.mongodbURI, { useNewUrlParser: true })

const User = mongoose.model("user", {
  id: Number,
  name: String,
  username: String,
  email: String,
})

const userSeed = new User({
  id: 1,
  name: "M Haidar Hanif",
  username: "mhaidarh",
  email: "haidar@haidar.com",
})

userSeed.save()

let idCounter = 1
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
}

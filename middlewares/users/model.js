const mongoose = require("mongoose")

const environment = require("../../config/env")

mongoose.connect(environment.mongodbURI, { useNewUrlParser: true })

const User = mongoose.model("user", {
  id: Number,
  name: String,
  username: String,
  email: String,
})

// const userSeed = new User({
//   id: 1,
//   name: "M Haidar Hanif",
//   username: "mhaidarh",
//   email: "haidar@haidar.com",
// })

// userSeed.save()

let idCounter = 0

User.find()
  .sort({ id: -1 })
  .limit(1)
  .exec(function (error, result) {
    if (error) {
      console.log(error)
    } else {
      console.log(result)
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
}

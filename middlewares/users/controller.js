const User = require("./model")

module.exports = {
  getAll: (req, res, next) => {
    res.send({
      messages: "Get all users",
      users: User.find(),
    })
  },

  getById: (req, res, next) => {
    const id = Number(req.params.id)
    try {
      const user = User.findById(id)
      if (user) {
        res.send({
          message: "Get user by ID",
          user: user,
        })
      } else {
        res.send({
          message: "User is not found",
        })
      }
    } catch (error) {
      console.log(error)
    }
  },

  postNewUser: (req, res, next) => {
    const newUser = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
    }
    User.create(newUser)
    res.send({
      message: "Add new user",
      newUser: newUser,
    })
  },
}

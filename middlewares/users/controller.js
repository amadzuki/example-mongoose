const User = require("./model")

module.exports = {
  getAll: async (req, res, next) => {
    const users = await User.find()
    res.send({
      messages: "Get all users",
      users: users,
    })
  },

  getById: async (req, res, next) => {
    const id = Number(req.params.id)
    try {
      const user = await User.findById(id)
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

  updateName: async (req, res, next) => {
    const userId = Number(req.params.id)
    const updatedUser = await User.updateName(userId, req.body.newName)
    res.send({
      message: "Update name success",
      updatedUser: updatedUser,
    })
  },

  deleteAllUsers: async (req, res, next) => {
    const report = await User.deleteAll()
    res.send({
      message: "All users deleted",
      report: report,
    })
  },

  deleteUserById: async (req, res, next) => {
    const userId = Number(req.params.id)
    try {
      const user = await User.findById(userId)
      if (user) {
        const deleteLog = await User.deleteById(userId)
        res.send({
          message: "The following user successfully deleted",
          user: user,
          report: deleteLog,
        })
      } else {
        res.send({
          message: "User not found!",
        })
      }
    } catch (error) {
      console.log(error)
    }
  },
}

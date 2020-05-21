let users = [
  {
    id: 1,
    name: "M Haidar Hanif",
    username: "mhaidarh",
    email: "haidar@haidar.com",
  },
  {
    id: 2,
    name: "Ahmad Marzuki",
    username: "amadzuki",
    email: "marzuki@marzuki.com",
  },
]

let idCounter = 2

module.exports = {
  find: () => {
    return items
  },

  findById: (id) => {
    const user = users.find((user) => user.id === id)
    return user
  },

  create: (newUser) => {
    idCounter++
    const updatedUsers = items.concat({
      ...newUser,
      id: idCounter,
    })
    items = updatedUsers
  },
}

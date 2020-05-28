const express = require("express")
const router = express.Router()

const users = require("./controller")

/* GET users listing. */
router.get("/", users.getAll)
router.get("/:id", users.getById)

// POST users
router.post("/", users.postNewUser)

// Update name of user with certain id
router.put("/:id", users.updateNameById)

// DELETE users
router.delete("/", users.deleteAllUsers)
router.delete("/:id", users.deleteUserById)

module.exports = router

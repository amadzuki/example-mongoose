require('dotenv').config()

var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")

var rootMiddleware = require("./middlewares/index")
var usersMiddleware = require("./middlewares/users")
var todosMiddleware = require("./middlewares/todos")

var app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", rootMiddleware)
app.use("/users", usersMiddleware)
app.use("/todos", todosMiddleware)

module.exports = app

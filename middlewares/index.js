var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send({
    title: "Complete Backend Amadzuki",
    description:
      "Node.js Server with Express MVC framework and Mongoose MongoDB",
  })
})

//GET Hello World message
router.get("/hello", (req, res, next) => {
  res.send({
    message: "Hello World!",
  })
})

module.exports = router

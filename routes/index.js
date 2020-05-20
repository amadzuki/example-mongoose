var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({
    title: "Complete Backend Amadzuki",
    description:
      "Node.js Server with Express MVC framework and Mongoose MongoDB",
  })
})

module.exports = router

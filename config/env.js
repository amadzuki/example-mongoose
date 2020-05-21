require("dotenv").config()

module.exports = {
  port: process.env.PORT,
  mongodbURI: process.env.MONGODB_URI,
}

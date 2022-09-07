require('dotenv').config()

const MONGODB_PORT = process.env.MONGODB_PORT || 27017
module.exports = {
  url: `mongodb://localhost:${MONGODB_PORT}/`,
}

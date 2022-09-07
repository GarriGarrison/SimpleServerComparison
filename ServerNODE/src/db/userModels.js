const { Schema, model } = require('mongoose')

const schema = new Schema({
  id: {
    type: String,
    required: true,
    // default: false
  },
  name: {
    type: String,
    required: true,
    // default: false
  },
  age: {
    type: Number,
    // required: true,
    default: 0
  },
  city: {
    type: String
    // required: true,
    // default: false
  },
})

module.exports = model('UserModel', schema)

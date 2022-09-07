/**
 * Пример от Минина NodeJS + MongoDB
 */

const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3001

async function start() {
  try {
    await mongoose.connect('mongodb://root:example@localhost:5052/users', {
      useNewUrlParser: true,
      useFindAndModify: false,
    })

    app.listen(PORT, () => {
      console.log(`Server has been started on PORT: ${PORT}\n build: ${RELEASE},  date: ${DATE} `)
    })
  } catch (e) {
    console.error(e)
  }
}

start()

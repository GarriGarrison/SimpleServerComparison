'use strict'

/**
 * Project: "lite API CRUD"
 * Path: "server"
 * Author: Garrison
 */

const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const db = require('./src/db/models/index')
const fakeRouter = require('./src/routes/fake.router')
const usersRouter = require('./src/routes/users.router')

const RELEASE = 9
const DATE = '26.09.2022 г.'

const app = express()
const PORT = process.env.PORT || 3001

/* APP'S MIDDLEWARES */
app.use(
  cors({
    origin: true,
    credentials: true,
  })
)

app.use(express.json())
app.use(express.static(path.join(process.env.PWD, 'public')))

/* APP'S ROUTES */
app.use('/api/v1/fake', fakeRouter)
app.use('/api/v1/users', usersRouter)

app.use((req, res, next) => {
  return res.sendStatus(404)
})

async function startApp() {
  try {
    await db.sequelize.authenticate()
    console.log('Соединение с БД было успешно установлено')

    app.listen(PORT, () => {
      console.log(
        `Server has been started on PORT: ${PORT}\n build: ${RELEASE},  date: ${DATE} `
      )
    })
  } catch (err) {
    console.error('Невозможно выполнить подключение к БД: ', err)
  }
}

startApp()

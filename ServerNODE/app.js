/**
 * Project: "lite API CRUD"
 * Path: "server"
 * Author: Garrison
 */
const RELEASE = 8
const DATE = '14.09.2022 г.'

const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
// const { isConnectDB } = require('./src/db/models')

const fakeRouter = require('./src/routes/fake.router')
const usersRouter = require('./src/routes/users.router')

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

app.listen(PORT, () => {
  console.log(
    `Server has been started on PORT: ${PORT}\n build: ${RELEASE},  date: ${DATE} `
  )
})

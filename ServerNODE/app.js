/**
 * Project: "lite API CRUD"
 * Path: "server"
 * Author: Garrison
 */
const RELEASE = 2
const DATE = '17.10.2022 г.'

const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const fakeRouter = require('./src/routes/fake.router')

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

app.use((req, res, next) => {
  return res.sendStatus(404)
})

app.listen(PORT, () => {
  console.log(`Server has been started on PORT: ${PORT}\n build: ${RELEASE},  date: ${DATE} `)
})

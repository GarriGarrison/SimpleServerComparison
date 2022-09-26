/**
 * Project: "lite API CRUD"
 * Path: "server"
 * Author: Garrison
 */
import express from 'express'
import cors from 'cors'
import path from 'path'
import * as dotenv from 'dotenv'
import chalk from 'chalk'
import fakeRouter from './src/routes/fake.router.js'

const RELEASE = 9
const DATE = '26.09.2022 г.'

dotenv.config()
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
// app.use('/api/v1/users', usersRouter)

app.use((req, res, next) => {
  return res.sendStatus(404)
})

app.listen(PORT, () => {
  console.log(chalk.green(
    `Server has been started on PORT: ${PORT}\n build: ${RELEASE},  date: ${DATE} `
  ))
})

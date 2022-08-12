/**
 * Project: "lite API CRUD"
 * Path: "server"
 * Author: Garrison
 */
const RELEASE = 1
const DATE = '12.10.2022 г.'

const express = require('express')
const cors = require('cors')

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
  const error = createError(404, 'Запрашиваемой страницы не существует на сервере.')
  next(error)
})

app.use((err, req, res, next) => {
  const appMode = req.app.get('env')
  let error

  if (appMode === 'development') {
    error = err
  } else {
    error = {}
  }

  res.locals.message = err.message
  res.locals.error = error
  res.status(err.status || 500)
})

app.listen(PORT, () => {
  console.log(`Server has been started on PORT: ${PORT}\n build: ${RELEASE},  date: ${DATE} `)
})

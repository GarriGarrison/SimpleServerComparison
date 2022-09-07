/**
 * Project: "lite API CRUD"
 * Path: "server"
 * Author: Garrison
 */
const RELEASE = 6
const DATE = '06.09.2022 г.'

const express = require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
// const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
// const mongo = require('./src/db/config.mongo')

const fakeRouter = require('./src/routes/fake.router')
const usersRouter = require('./src/routes/users.router')

const app = express()
const PORT = process.env.PORT || 3001

// /* Connection MongoDB control */
// const mongoClient = new MongoClient(mongo.url)
// mongoClient.connect(function (err, client) {
//   const db = client.db('admin') // обращаемся к базе данных admin (есть поумолчанию)
//   if (err) {
//     return console.error(err)
//   }

//   db.command({ ping: 1 }, function (err, result) {
//     if (!err) {
//       console.log('\nПодключение с сервером MongoDB успешно установлено')
//       console.log(result)
//     }
//     client.close()
//     console.log('Подключение к MongoDB закрыто')
//   })
// })

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

// app.listen(PORT, () => {
//   console.log(`Server has been started on PORT: ${PORT}\n build: ${RELEASE},  date: ${DATE} `)
// })


// const express = require('express')
// const mongoose = require('mongoose')

// const app = express()
// const PORT = process.env.PORT || 3001

// app.use('/api/v1/users', usersRouter)
// app.use('/api/v1/fake', fakeRouter)

async function start() {
  try {
    // await mongoose.connect('mongodb://root:example@localhost:5052/users', {
    //   useNewUrlParser: true,
    //   useFindAndModify: false,
    // })
    await mongoose.connect('mongodb://localhost:5052/users')

    app.listen(PORT, () => {
      console.log(`Server has been started on PORT: ${PORT}\n build: ${RELEASE},  date: ${DATE} `)
    })
  } catch (e) {
    console.error(e)
  }
}

start()

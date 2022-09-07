const UserModel = require('../db/userModels')

const getAllUsers = async (req, res) => {
  const users = await UserModel.find({})

  console.log('GET all users')
  console.log(users)
  console.log('--------------------------------------------------')
  return res.status(200).json(users)
 }

const addUser = (req, res) => {
  if (!req.body) return res.sendStatus(400)

  const { id, name, age, city } = req.body

  if (id && name && age && city) {
    // let last_id = users[users.length - 1].id

    // users.push({ id: ++last_id, name, age, city })
  //   const newUser = { id, name, age, city }
  //   if (isConnMongo(newUser)) {
  //     console.log('POST add new user')
  //     console.log(users)
  //     console.log('--------------------------------------------------')

  //     return res.status(201).json(users)
  //   }

  //   console.log('POST add new user')
  //   console.error('ERROR')
  //   console.log('--------------------------------------------------')

  //   return res.sendStatus(400)
  }

  console.log('POST add new user')
  console.error('ERROR')
  console.log('--------------------------------------------------')

  return res.sendStatus(400)
}

// const MongoClient = require('mongodb').MongoClient
// const mongo = require('../db/config.mongo')

// /**
//  * Подключение к базе данных MongoDB
//  * @param {object} record
//  * @returns {boolean}
//  */
// const isConnMongo = (record) => {
//   const mongoClient = new MongoClient(mongo.url)
//   mongoClient.connect(function (err, client) {
//     const db = client.db('users') // обращаемся к базе данных users (если нет создатся автоматически)
//     if (err) {
//       console.error(err)
//       return false
//     }

//     // const newUser = {
//     //   id: req.body.id,
//     //   name: req.body.name,
//     // }

//     db.collection('users').insert(record, (err, result) => {
//       if (err) {
//         console.error('Ошибка обращения к базе данных')
//         return false
//       }
//       return true
//     })

//     client.close()

//     // db.command({ ping: 1 }, function (err, result) {
//     //   if (!err) {
//     //     console.log('\nПодключение с сервером MongoDB успешно установлено')
//     //     console.log(result)
//     //   }
//     //   client.close()
//     //   console.log('Подключение к MongoDB закрыто')
//     // })
//   })
// }

// const getAllUsers = (req, res) => {
//   const mongoClient = new MongoClient(mongo.url)
//   mongoClient.connect(function (err, client) {
//     if (err) {
//       console.error(err)
//       return res.sendStatus(500)
//     }

//     const db = client.db('users') // обращаемся к базе данных users (если нет создатся автоматически)
//     db.collection('users')
//       .find({})
//       .toArray(function (err, docs) {
//         if (err) {
//           console.error(err)
//           client.close()
//           return res.sendStatus(501)
//         }

//         client.close()
//         return res.send(JSON.stringify(docs))
//       })
//   })

//     // const db = client.db('admin')
//     // const collection = db.collection('users')
//     // const collection = db.collection('admin')
//     // console.log('collection', collection)
//     // collection.countDocuments(function (err, result) {
//     //   if (err) {
//     //     console.error(err)
//     //     return res.sendStatus(500)
//     //   }

//     //   console.log('GET all users')
//     //   console.log(`В коллекции users ${result} документов`)
//     //   console.log('--------------------------------------------------')

//     //   client.close()
//     //   return res.status(200).json(result)
//     // })
//     // if (err) {
//     //   console.error(err)
//     //   return res.sendStatus(500)
//     // }

//     // db.command({ ping: 1 }, function (err, result) {
//     //   if (!err) {
//     //     // console.log('\nПодключение с сервером MongoDB успешно установлено')
//     //     console.log(result)
//     //   }
//       // client.close()
//       // console.log('Подключение к MongoDB закрыто')
//       // return res.status(200).json(result)
//     // })
//   // })
// }

//   //   if (err) {
//   //     console.error(err)
//   //     return false
//   //   }

//   //   // const newUser = {
//   //   //   id: req.body.id,
//   //   //   name: req.body.name,
//   //   // }

//   //   db.collection('users').insert(record, (err, result) => {
//   //     if (err) {
//   //       console.error('Ошибка обращения к базе данных')
//   //       return false
//   //     }
//   //     return true
//   //   })

//   //   client.close()

//   //   // db.command({ ping: 1 }, function (err, result) {
//   //   //   if (!err) {
//   //   //     console.log('\nПодключение с сервером MongoDB успешно установлено')
//   //   //     console.log(result)
//   //   //   }
//   //   //   client.close()
//   //   //   console.log('Подключение к MongoDB закрыто')
//   //   // })
//   // })
// // }

// const addUser = (req, res) => {
//   if (!req.body) return res.sendStatus(400)

//   const { id, name, age, city } = req.body

//   if (id && name && age && city) {
//     // let last_id = users[users.length - 1].id

//     // users.push({ id: ++last_id, name, age, city })
//     const newUser = { id, name, age, city }
//     if (isConnMongo(newUser)) {
//       console.log('POST add new user')
//       console.log(users)
//       console.log('--------------------------------------------------')

//       return res.status(201).json(users)
//     }

//     console.log('POST add new user')
//     console.error('ERROR')
//     console.log('--------------------------------------------------')

//     return res.sendStatus(400)
//   }

//   console.log('POST add new user')
//   console.error('ERROR')
//   console.log('--------------------------------------------------')

//   return res.sendStatus(400)
// }

module.exports = {
  getAllUsers,
  addUser,
  // getUser,
  // editUser,
  // deleteUser,
}

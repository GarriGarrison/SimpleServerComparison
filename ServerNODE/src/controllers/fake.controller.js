'use strict'

const fakeService = require('../services/fake.service')

const getAllUsers = (req, res) => {
  const usersDB = fakeService.getAllUsersDB()
  return res.status(200).json(usersDB)
}

const addUser = (req, res) => {
  if (!req.body) {
    return res.sendStatus(400)
  }

  const usersDB = fakeService.addUserDB(req.body)

  if (usersDB) {
    return res.status(201).json(usersDB)
  }

  console.error(`Не удалось создать нового пользователя`)
  return res.sendStatus(400)
}

const getUser = async (req, res) => {
  const { id } = req.params
  const userDB = await fakeService.getUserDB(id)

  if (userDB) {
    return res.status(200).json(userDB)
  }

  console.error(chalk.red(`Пользователя с id = ${id} в базе данных нет`))
  return res.sendStatus(500)
}

const editUser = async (req, res) => {
  const { id } = req.params
  const userDB = await fakeService.editUserDB(id, req.body)

  if (userDB) {
    return res.status(200).json(userDB)
  }

  console.error(`Изменить данные пользователя с id = ${id} не удалось`)
  return res.sendStatus(424) //418
}

const deleteUser = async (req, res) => {
  const { id } = req.params
  const userDB = await fakeService.deleteUserDB(id)

  if (userDB) {
    return res.status(200).json(userDB)
  }

  console.error(`Удалить пользователя с id = ${id} не удалось`)
  return res.sendStatus(500)
}

module.exports = {
  getAllUsers,
  addUser,
  getUser,
  editUser,
  deleteUser,
}

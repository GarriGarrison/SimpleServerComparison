'use strict'

const usersService = require('../services/users.service')

const getAllUsers = async (req, res) => {
  const usersDB = await usersService.getAllUsersDB()

  if (usersDB) {
    return res.status(200).json(usersDB)
  }

  console.error(`Не удалось получить список пользователей из базы данных`)
  return res.sendStatus(500)
}

const addUser = async (req, res) => {
  if (!req.body) {
    return res.sendStatus(400)
  }

  const usersDB = await usersService.addUserDB(req.body)

  if (usersDB) {
    return res.status(201).json(usersDB)
  }

  console.error(`Не удалось создать нового пользователя в базе данных`)
  return res.sendStatus(500)
}

const getUser = async (req, res) => {
  const { id } = req.params
  const userDB = await usersService.getUserDB(id)

  if (userDB) {
    return res.status(200).json(userDB)
  }

  console.error(`Пользователя с id = ${id} в базе данных нет`)
  return res.sendStatus(500)
}

const editUser = async (req, res) => {
  const { id } = req.params
  const userDB = await usersService.editUserDB(id, req.body)

  if (userDB) {
    return res.status(200).json(userDB)
  }

  console.error(
    `Изменить данные пользователя с id = ${id} в базе данных не удалось`
  )
  return res.sendStatus(424) //418
}

const deleteUser = async (req, res) => {
  const { id } = req.params
  const userDB = await usersService.deleteUserDB(id)

  if (userDB) {
    return res.status(200).json(userDB)
  }

  console.error(`Удалить пользователя с id = ${id} из базы данных не удалось`)
  return res.sendStatus(500)
}

module.exports = {
  getAllUsers,
  addUser,
  getUser,
  editUser,
  deleteUser,
}

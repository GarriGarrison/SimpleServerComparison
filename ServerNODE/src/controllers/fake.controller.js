import chalk from 'chalk'
import {
  getAllUsersDB,
  addUserDB,
  getUserDB,
  editUserDB,
  deleteUserDB,
} from '../services/fake.service.js'

const getAllUsers = (req, res) => {
  const usersDB = getAllUsersDB()
  return res.status(200).json(usersDB)
}

const addUser = (req, res) => {
  if (!req.body) return res.sendStatus(400)

  const usersDB = addUserDB(req.body)

  if (usersDB) {
    return res.status(201).json(usersDB)
  }

  console.error(chalk.red(`Не удалось создать нового пользователя`))
  return res.sendStatus(400)
}

const getUser = async (req, res) => {
  const { id } = req.params
  const userDB = await getUserDB(id)

  if (userDB) {
    return res.status(200).json(userDB)
  }

  console.error(chalk.red(`Пользователя с id = ${id} в базе данных нет`))
  return res.sendStatus(500)
}

const editUser = async (req, res) => {
  const { id } = req.params
  const userDB = await editUserDB(id, req.body)

  if (userDB) {
    return res.status(200).json(userDB)
  }

  console.error(
    chalk.red(`Изменить данные пользователя с id = ${id} не удалось`)
  )
  return res.sendStatus(424)
}

const deleteUser = async (req, res) => {
  const { id } = req.params
  const userDB = await deleteUserDB(id)

  if (userDB) {
    return res.status(200).json(userDB)
  }

  console.error(chalk.red(`Удалить пользователя с id = ${id} не удалось`))
  return res.sendStatus(424)
}

export { getAllUsers, addUser, getUser, editUser, deleteUser }

'use strict'

// import User from '../db/models'
 const { User } = require('../db/models')

const getAllUsersDB = async () => {
  try {
    const users = await User.findAll({
      raw: true,
      attributes: ['id', 'name', 'age', 'city'],
    })
    return users
  } catch (error) {
    return null
  }
}

const addUserDB = async (user) => {
  if (!user) {
    // throw 'Нет даных нового пользователя'
    return null
  }

  const { name, age, city } = user

  if (name && age && city) {
    try {
      const createUser = await User.create({
        id: '6',
        name,
        age: Number(age),
        city,
      })

      return createUser
    } catch (error) {
      return null
    }
  }

  // throw 'Нет {name age, city} у нового пользователя'
  return null
}

const getUserDB = async (id) => {
  try {
    const user = await User.findOne({
      raw: true,
      where: {
        id,
      },
      attributes: ['id', 'name'],
    })

    return user
  } catch (error) {
    return null
  }
}

const editUserDB = async (id, userData) => {
  try {
    await User.update(
      { ...userData },
      {
        where: {
          id,
        },
      }
    )
    return id
  } catch (error) {
    //  throw `Изменить данные пользователя с id = ${id} не удалось`
    return null
  }
}

const deleteUserDB = async (id) => {
  try {
    await User.destroy({
      where: {
        id,
      },
    })
    return id
  } catch (err) {
    // throw `Удалить пользователя с id = ${id} не удалось`
    return null
  }
}

// export { getAllUsersDB, addUserDB, getUserDB, editUserDB, deleteUserDB }
module.exports = {
  getAllUsersDB,
  addUserDB,
  getUserDB,
  editUserDB,
  deleteUserDB,
}

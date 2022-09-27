'use strict'

const users = [
  {
    id: 1,
    name: 'Olga',
    age: 18,
    city: 'Kyev',
  },
  {
    id: 2,
    name: 'Egor',
    age: 16,
    city: 'NY',
  },
  {
    id: 3,
    name: 'Bob',
    age: 34,
    city: 'Canzas',
  },
  {
    id: 4,
    name: 'Zac',
    age: 57,
    city: 'London',
  },
  {
    id: 5,
    name: 'Mike',
    age: 7,
    city: 'Berlin',
  },
]

const getAllUsersDB = () => {
  console.log('GET all users')
  console.log(users)
  console.log('--------------------------------------------------')
  return users
}

const addUserDB = (user) => {
  if (!user) {
    // throw 'Нет даных нового пользователя'
    return null
  }

  const { name, age, city } = user

  if (name && age && city) {
    let last_id = users[users.length - 1].id

    users.push({ id: ++last_id, name, age, city })

    console.log('POST add new user')
    console.log(users)
    console.log('--------------------------------------------------')

    return users
  }

  console.log('POST add new user')
  console.error('ERROR')
  console.log('--------------------------------------------------')

  // throw 'Нет {name age, city} у нового пользователя'
  return null
}

const getUserDB = async (id) => {
  for (const user of users) {
    if (user.id == id) {
      console.log('GET user with id=' + id)
      console.log(user)
      console.log('--------------------------------------------------')

      return user
    }
  }

  console.log('GET user with id=' + id)
  console.error('ERROR')
  console.log('--------------------------------------------------')

  // throw `Пользователя с id = ${id} в базе данных нет`
  return null
}

const editUserDB = async (id, userData) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      users[i] = {
        ...users[i],
        ...userData,
      }

      console.log('PATCH edit user with id=' + id)
      console.log(users)
      console.log('--------------------------------------------------')

      return users[i]
    }
  }

  console.log('PATCH edit user with id=' + id)
  console.error('ERROR')
  console.log('--------------------------------------------------')

  //  throw `Изменить данные пользователя с id = ${id} не удалось`
  return null
}

const deleteUserDB = async (id) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      const remove = users.splice(i, 1)

      console.log('DELETE remove user with id=' + id)
      console.log(remove)
      console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')
      console.log(users)
      console.log('--------------------------------------------------')

      return remove
    }
  }

  console.log('DELETE remove user with id=' + id)
  console.error('ERROR')
  console.log('--------------------------------------------------')

  // throw `Удалить пользователя с id = ${id} не удалось`
  return null
}

module.exports = {
  getAllUsersDB,
  addUserDB,
  getUserDB,
  editUserDB,
  deleteUserDB,
}

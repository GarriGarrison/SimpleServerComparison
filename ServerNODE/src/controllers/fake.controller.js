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

const getAllUsers = (req, res) => {
  console.log('GET all users')
  console.log(users)
  console.log('--------------------------------------------------')
  return res.status(200).json(users)
}

const addUser = (req, res) => {
  if (!req.body) return res.sendStatus(400)

  const { name, age, city } = req.body

  if (name && age && city) {
    let last_id = users[users.length - 1].id

    users.push({ id: ++last_id, name, age, city })

    console.log('POST add new user')
    console.log(users)
    console.log('--------------------------------------------------')

    return res.status(201).json(users)
  }

  console.log('POST add new user')
  console.eror('ERROR')
  console.log('--------------------------------------------------')
  
  return res.sendStatus(400)
}

const getUser = (req, res) => {
  if (!req.body) return res.sendStatus(400)

  const { id } = req.params

  for (const user of users) {
    if (user.id == id) {
      console.log('GET user with id=' + id)
      console.log(user)
      console.log('--------------------------------------------------')

      return res.status(200).json(user)
    }
  }

  console.log('GET user with id=' + id)
  console.eror('ERROR')
  console.log('--------------------------------------------------')
  
  return res.sendStatus(500)
}

const editUser = async (req, res) => {
  const { id } = req.params

  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      users[i] = {
        ...users[i],
        ...req.body,
      }

      console.log('PATCH edit user with id=' + id)
      console.log(users)
      console.log('--------------------------------------------------')

      return res.status(200).json(users[i])
    }
  }

  console.log('PATCH edit user with id=' + id)
  console.error('ERROR')
  console.log('--------------------------------------------------')

  return res.sendStatus(424)
}

const deleteUser = async (req, res) => {
  const { id } = req.params

  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      const remove = users.splice(i, 1)

      console.log('DELETE remove user with id=' + id)
      console.log(remove)
      console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')
      console.log(users)
      console.log('--------------------------------------------------')

      return res.status(200).json(users[i])
    }
  }

  console.log('DELETE remove user with id=' + id)
  console.error('ERROR')
  console.log('--------------------------------------------------')

  return res.sendStatus(424)
}

module.exports = {
  getAllUsers,
  addUser,
  getUser,
  editUser,
  deleteUser,
}

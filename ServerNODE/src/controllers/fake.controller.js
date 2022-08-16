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
  return res.status(200).json(users)
}

const addUser = (req, res) => {
  if (!req.body) return res.sendStatus(400)

  const { name, age, city } = req.body

  if (name && age && city) {
    const last_id = users[users.length - 1].id

    users.push({ id: last_id++, name, age, city })
  }

  return res.sendStatus(400)
}

const getUser = (req, res) => {
  const { id } = req.params

  for (const user of users) {
    if (user.id == id) {
      return res.status(200).json(user)
    }
  }

  return res.sendStatus(500)
}

const editUser = async (req, res) => {
  try {
    const { id } = req.params

    await User.update(
      { ...req.body },
      {
        where: {
          id,
        },
      }
    )
    res.status(200).json(req.body)
  } catch (error) {
    res.sendStatus(424)
  }
}

const deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } })
    return res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(500)
  }
}

module.exports = {
  getAllUsers,
  addUser,
  getUser,
  editUser,
  deleteUser,
}

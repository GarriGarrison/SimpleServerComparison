const { User } = require('../db/models/')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      raw: true,
      attributes: ['id', 'name', 'age', 'city'],
    })
    return res.status(200).json(users)
  } catch (err) {
    return res.sendStatus(500)
  }
}

const addUser = async (req, res) => {
  if (!req.body) return res.sendStatus(400)

  const { name, age, city } = req.body

  if (name && age && city) {
    try {
      const createUser = await User.create({
        id: '6',
        name,
        age: Number(age),
        city,
      })

      return res.status(201).json(createUser)
    } catch (err) {
      res.sendStatus(500)
    }
  }
  return res.sendStatus(400)
}

const getUser = async (req, res) => {
  if (!req.body) return res.sendStatus(400)

  const { id } = req.params

  try {
    const user = await User.findOne({
      raw: true,
      where: {
        id,
      },
      attributes: ['id', 'name'],
    })

    return res.status(200).json(user)
  } catch (error) {
    return res.sendStatus(500)
  }
}

const editUser = async (req, res) => {
  const { id } = req.params

  try {
    await User.update(
      { ...req.body },
      {
        where: {
          id,
        },
      }
    )
    res.status(200).json(req.body) //sendStatus(200);
  } catch (error) {
    res.sendStatus(424) //418
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params

  try {
    await User.destroy({
      where: {
        id,
      },
    })
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

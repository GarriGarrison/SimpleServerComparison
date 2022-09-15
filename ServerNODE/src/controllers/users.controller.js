const { User } = require('../db/models/')

const getAllUsers = async (req, res) => {

  try {
    const users = await User.findAll({
      raw: true,
      attributes: ['id', 'name', 'age', 'city'],
    })
    console.log('GET all users')
    console.log(users)
    console.log('--------------------------------------------------')
    return res.status(200).json(users)
  } catch (err) {
    console.log('GET all users')
    console.error('ERROR')
    console.log('--------------------------------------------------')
    return res.sendStatus(500)
  }
}

module.exports = {
  getAllUsers,
  // addUser,
  // getUser,
  // editUser,
  // deleteUser,
}

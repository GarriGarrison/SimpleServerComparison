const router = require('express').Router()
const usersController = require('../controllers/users.controller')

router.route('/')
  .get(usersController.getAllUsers)
  .post(usersController.addUser)

router
  .route('/:id')
  .get(usersController.getUser)
  .patch(usersController.editUser)
  // .put(usersController.editUser)
  .delete(usersController.deleteUser)

module.exports = router

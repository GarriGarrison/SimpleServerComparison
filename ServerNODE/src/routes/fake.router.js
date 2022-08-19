const router = require('express').Router()
const fakeController = require('../controllers/fake.controller')

router.route('/')
  .get(fakeController.getAllUsers)
  .post(fakeController.addUser)

router.route('/:id')
  .get(fakeController.getUser)
  // .patch(fakeController.editUser)
  .put(fakeController.editUser)
  .delete(fakeController.deleteUser)

module.exports = router

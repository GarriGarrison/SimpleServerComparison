import { Router } from 'express'
import {
  getAllUsers,
  addUser,
  getUser,
  editUser,
  deleteUser,
} from '../controllers/fake.controller.js'

const router = new Router()

router.post('/', addUser)
router.get('/', getAllUsers)
router.get('/:id', getUser)
router.patch('/:id', editUser)
router.put('/:id', editUser)
router.delete('/:id', deleteUser)

export default router

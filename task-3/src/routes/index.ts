import { Router } from 'express'
import { addUser, deleteUser, getUserById, getUsers, updateUser } from '../controller/user'


const router = Router()


router.get('/', getUsers);
router.post('/', addUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);


export default router
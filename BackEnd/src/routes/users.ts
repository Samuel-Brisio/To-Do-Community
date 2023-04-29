import { Router } from 'express';
import { userController } from '../controllers/users';

const userRouter = Router();
userRouter.get('/', userController.listUsers);
userRouter.get('/:id', userController.getUser);
userRouter.post('/', userController.insertUser);
userRouter.delete('/:id', userController.deleteUser);

export { 
    userRouter,
}
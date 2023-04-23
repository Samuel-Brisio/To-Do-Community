import { Router } from 'express';
import { listController } from '../controllers/lists';

const listRouter = Router();
listRouter.get('/', listController.listLists);
listRouter.get('/:id', listController.getList);
listRouter.post('/', listController.insertList);
listRouter.delete('/:id', listController.deleteList);

export { 
    listRouter,
}
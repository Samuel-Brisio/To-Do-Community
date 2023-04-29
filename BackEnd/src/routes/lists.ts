import { Router } from 'express';
import { listController } from '../controllers/lists';

const listRouter = Router();
listRouter.post('/', listController.insertList);

// Use Group ID
listRouter.get('/group/:id', listController.listLists)

// Use List ID
listRouter.get('/list/:id', listController.getList);
listRouter.delete('/list/:id', listController.deleteList);

export { 
    listRouter,
}
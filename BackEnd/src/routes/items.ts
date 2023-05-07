import { Router } from 'express';
import { itemController } from '../controllers/items';

const itemRouter = Router();

// Use Item ID
itemRouter.patch('/crossout/:id', itemController.crossedOutItem)
itemRouter.delete('/item/:id', itemController.deleteItem); 

// Use List ID
itemRouter.post('/', itemController.insertItem);
itemRouter.get('/:id', itemController.listItems);

export { 
    itemRouter,
}
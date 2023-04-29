import { Request, Response } from 'express';
import { badRequest, internalServerError, validateNumber, notFound, ok } from '../services/util';
import { Item, CrossOut, itemModel } from '../models/items';

const insertItem = (req: Request, res: Response) => {

    {
        const item = req.body;
        if (!item)
            return badRequest(res, "Item inválido");

        if (!item.name)
            return badRequest(res, 'Informe o nome do Item');

    }

    const item = req.body as Item;
    return itemModel.insertItem(item)
        .then(item => {
            res.json(item);
        })
        .catch(err => internalServerError(res, err));
}


const listItems = (req: Request, res: Response) => {
    const listId = parseInt(req.params.id);
    
    {
        if(!validateNumber(listId))
            return badRequest(res, 'id inválido')
    }

    return itemModel.listItems(listId)
        .then(item => {
            res.json(item)
        })
        .catch(err => internalServerError(res, err));
}

const getItem = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');
    }

    return itemModel.getItem(id)
        .then((item) => {
            if(item)
                return res.json(item);
            else
                return notFound(res);
        })
        .catch(err => internalServerError(res, err));
}

const crossedOutItem = (req: Request, res: Response) => {
    const itemId = parseInt(req.params.id)
    {
        const patch = req.body;
        if (!patch)
            return badRequest(res, "Item inválido");

        if (patch.status == null)
            return badRequest(res, 'Informe o estado do Item');

    }

    const patch = req.body as CrossOut;
    return itemModel.crossOutItem(itemId, patch.status)
        .then(item => {
            res.json(item);
        })
        .catch(err => internalServerError(res, err));
}


const deleteItem = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');

        const itemSaved = await itemModel.getItem(id);
        if(!itemSaved)
            return notFound(res);
    }

    return itemModel.deleteItem(id)
        .then(() => ok(res))
        .catch(err => internalServerError(res, err));
}

export const itemController = {
    insertItem,
    listItems,
    getItem,
    crossedOutItem,
    deleteItem
}
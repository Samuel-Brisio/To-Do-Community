import { Request, Response } from 'express';
import { badRequest, internalServerError, validateNumber, notFound, ok } from '../services/util';
import { List, listModel } from '../models/lists';
import { itemModel } from '../models/items';

const insertList = (req: Request, res: Response) => {

    {
        const list = req.body;
        if (!list)
            return badRequest(res, "Lista inválido");

        if (!list.listName)
            return badRequest(res, 'Informe o nome da lista');

    }

    const list = req.body as List;
    return listModel.insertList(list)
        .then(list => {
            res.json(list);
        })
        .catch(err => internalServerError(res, err));
}


const listLists = (req: Request, res: Response) => {
    const groupId = parseInt(req.params.id);
    
    {
        if(!validateNumber(groupId))
            return badRequest(res, 'id inválido')
    }

    return listModel.listLists(groupId)
        .then(async lists => {

            for(let list of lists) {
                list.itens = await itemModel.listItems(list.id); 
            }

            res.json(lists)
        })
        .catch(err => internalServerError(res, err));
}

const getList = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');
    }

    return listModel.getList(id)
        .then(async (list) => {
            if(list) {
                list.itens = await itemModel.listItems(list.id); 
                return res.json(list);
            }
            else
                return notFound(res);
        })
        .catch(err => internalServerError(res, err));
}

const deleteList = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');

        const listSaved = await listModel.getList(id);
        if(!listSaved)
            return notFound(res);
    }

    return listModel.deleteList(id)
        .then(() => ok(res))
        .catch(err => internalServerError(res, err));
}

export const listController = {
    insertList,
    listLists,
    getList,
    deleteList
}
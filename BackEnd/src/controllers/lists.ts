import { Request, Response } from 'express';
import { badRequest, internalServerError, validateNumber, notFound, ok } from '../services/util';
import { List, listModel } from '../models/lists';

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


const listLists = ({}: Request, res: Response) => {
    listModel.listLists()
        .then(lists => {
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
        .then((list) => {
            if(list)
                return res.json(list);
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
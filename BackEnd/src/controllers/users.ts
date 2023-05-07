import { Request, Response } from 'express';
import { badRequest, internalServerError, validateNumber, notFound, ok } from '../services/util';
import { User, userModel } from '../models/users';

const insertUser = (req: Request, res: Response) => {

    {
        const user = req.body;
        if (!user)
            return badRequest(res, "Usuário inválido");

        if (!user.userName)
            return badRequest(res, 'Informe o nome do usuario');

        /*if (!validateNumber(user.password))
        '''    return badRequest(res, 'Informe a senha');*/
    }

    const user = req.body as User;
    return userModel.insertUser(user)
        .then(user => {
            res.json(user);
        })
        .catch(err => internalServerError(res, err));
}


const listUsers = ({}: Request, res: Response) => {
    userModel.listUsers()
        .then(users => {
            res.json(users)
        })
        .catch(err => internalServerError(res, err));
}

const getUser = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');
    }

    return userModel.getUser(id)
        .then((user) => {
            if(user)
                return res.json(user);
            else
                return notFound(res);
        })
        .catch(err => internalServerError(res, err));
}

const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');

        const userSaved = await userModel.getUser(id);
        if(!userSaved)
            return notFound(res);
    }

    return userModel.deleteUser(id)
        .then(() => ok(res))
        .catch(err => internalServerError(res, err));
}

const loginUser = async (req: Request, res: Response) => {
    {
        const user = req.body;
        if (!user)
            return badRequest(res, "Usuário inválido");

        if (!user.userName)
            return badRequest(res, 'Informe o nome do usuario');

        /*if (!validateNumber(user.password))
        '''    return badRequest(res, 'Informe a senha');*/
    }

    const user = req.body as User;
    return userModel.loginUser(user)
        .then(user => {
            if (user.length > 0) {
                res.send("Usuario Existe");
            }
            else res.send("Usuario não cadastrado");
        })
        .catch(err => internalServerError(res, err));

}

export const userController = {
    insertUser,
    listUsers,
    getUser,
    deleteUser,
    loginUser
}
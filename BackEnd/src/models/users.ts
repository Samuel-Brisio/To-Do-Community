import { dbQuery, dbQueryFirst } from '../services/db';


export type User = {
    id: number;
    userName: string;
    password: string;
}

export const insertUser = async(user: User) => {
    await dbQuery('INSERT INTO user (userName, password) VALUES(?, ?)' , [user.userName, user.password])
    let retorno = await dbQuery(`SELECT seq AS Id FROM sqlite_sequence WHERE  name = 'user'`);
    insertUserOnGroup(retorno[0].Id, 1)
    return getUser(retorno[0].Id);
}

const listUsers = async () => {
    const retorno = await dbQuery(`SELECT * FROM user`);
    return retorno as User[];
}

const getUser = async (id: number) => {
    const retorno = await dbQueryFirst(`SELECT * FROM user WHERE id = ?`, [id]);
    return retorno as User | undefined;
}

const deleteUser = async (id: number) => {
    await dbQueryFirst(`DELETE FROM user WHERE id = ?`, [id]);
}

const insertUserOnGroup = async(userId : number, groupId: number) => {
    await dbQuery('INSERT INTO members (groupId, userId) VALUES(?, ?)', [groupId, userId])
}

export const userModel = {
    insertUser,
    listUsers,
    getUser,
    deleteUser
}
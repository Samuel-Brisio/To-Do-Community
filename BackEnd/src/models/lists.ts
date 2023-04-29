import { dbQuery, dbQueryFirst } from '../services/db';


export type List = {
    id: number;
    listName: string;
    groupId: number;
}

export const insertList = async(list: List) => {
    await dbQuery('INSERT INTO list (name, groupId) VALUES(?, ?)' , [list.listName, list.groupId])
    let retorno = await dbQuery(`SELECT seq AS Id FROM sqlite_sequence WHERE name = 'list'`);
    return getList(retorno[0].Id);
}

const listLists = async (groupId: number) => {
    const retorno = await dbQuery(`SELECT * FROM list WHERE groupId = ?`, [groupId]);
    return retorno as List[];
}

const getList = async (id: number) => {
    const retorno = await dbQueryFirst(`SELECT * FROM list WHERE id = ?`, [id]);
    return retorno as List | undefined;
}

const deleteList = async (id: number) => {
    await dbQueryFirst(`DELETE FROM list WHERE id = ?`, [id]);
}

export const listModel = {
    insertList,
    listLists,
    getList,
    deleteList
}
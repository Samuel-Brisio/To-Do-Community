import { dbQuery, dbQueryFirst } from '../services/db';


export type Item = {
    id: number;
    name: string;
    quantity: number;
    crossedOut: number;
    writeBy: number;
    listId: number;
}

export type CrossOut = {
    status: boolean;
}

export const insertItem = async(item: Item) => {
    await dbQuery('INSERT INTO item (name, qtd, riscado, escritoPor, listId) VALUES(?, ?, ?, ?, ?)' , [item.name, item.quantity, item.crossedOut, item.writeBy, item.listId])
    let retorno = await dbQuery(`SELECT seq AS Id FROM sqlite_sequence WHERE name = 'item'`);
    return getItem(retorno[0].Id);
}

const listItems = async (listId: number) => {
    const retorno = await dbQuery(`SELECT * FROM item WHERE listId = ?`, [listId]);
    return retorno as Item[];
}

const getItem = async (id: number) => {
    const retorno = await dbQueryFirst(`SELECT * FROM item WHERE id = ?`, [id]);
    return retorno as Item | undefined;
}

const crossOutItem = async (id: number, status: boolean) => {
    await dbQueryFirst(`UPDATE item SET riscado = ? WHERE id = ?`, [status, id]);
    const retorno = await dbQueryFirst(`SELECT * FROM item WHERE id = ?`, [id]);
    return retorno as Item | undefined;
}


const deleteItem = async (id: number) => {
    await dbQueryFirst(`DELETE FROM item WHERE id = ?`, [id]);
}

export const itemModel = {
    insertItem,
    listItems,
    getItem,
    crossOutItem,
    deleteItem
}
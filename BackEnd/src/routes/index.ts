import { Application } from "express";
import Router from 'express';
import { userRouter } from "./users";
import { listRouter } from "./lists";
import { itemRouter } from "./items";


export const useRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use('/users', userRouter);

    app.use('/api/v1', apiRouter);
}

export const listRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use('/lists', listRouter);

    app.use('/api/v1', apiRouter);
}

export const itemRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use('/items', itemRouter);

    app.use('/api/v1', apiRouter);
}
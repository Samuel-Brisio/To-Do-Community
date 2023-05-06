import dotenv from 'dotenv';
dotenv.config();

import express, { Express, Request, Response } from "express";
import * as cors from 'cors';
import { useRoutes } from './routes';
import { listRoutes } from './routes';
import { itemRoutes } from './routes';
import bodyParser from 'body-parser';

const port = 8080;

const app: Express = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}
));
app.use(bodyParser.json());
useRoutes(app);
listRoutes(app);
itemRoutes(app);

app.get("/", (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
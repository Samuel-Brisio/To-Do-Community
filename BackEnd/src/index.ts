import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { useRoutes } from './routes';
import { listRoutes } from './routes';
import { itemRoutes } from './routes';
import bodyParser from 'body-parser';

const port = 8080;

const app: Express = express();
app.use(cors)

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};


// Then pass these options to cors:
app.use(cors(options));
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
import express from 'express';
import bodyParser from 'body-parser';
import { user } from './routes';

const app = express()

app.use(bodyParser.json());

app.use('/', user);

export default app;